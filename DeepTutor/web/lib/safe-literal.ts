/**
 * Data-only parser for the JavaScript object literals produced by the
 * visualization model (e.g. Chart.js configs).
 *
 * Accepts: objects (quoted/unquoted keys), arrays, strings, numbers, booleans,
 * null, comments and trailing commas.
 * Rejects everything else (functions, identifiers, calls, template
 * substitutions, operators), so LLM output can never execute code.
 */

const FORBIDDEN_KEYS = new Set(["__proto__", "constructor", "prototype"]);
const MAX_DEPTH = 40;

class LiteralParser {
  private pos = 0;

  constructor(private readonly src: string) {}

  parse(): unknown {
    this.skip();
    const value = this.value(0);
    this.skip();
    if (this.pos < this.src.length) this.fail("Unexpected content after value");
    return value;
  }

  private fail(msg: string): never {
    throw new Error(`Invalid chart config: ${msg} (at ${this.pos})`);
  }

  private skip(): void {
    const s = this.src;
    for (;;) {
      const c = s[this.pos];
      if (c === " " || c === "\n" || c === "\t" || c === "\r") {
        this.pos++;
      } else if (c === "/" && s[this.pos + 1] === "/") {
        while (this.pos < s.length && s[this.pos] !== "\n") this.pos++;
      } else if (c === "/" && s[this.pos + 1] === "*") {
        const end = s.indexOf("*/", this.pos + 2);
        if (end === -1) this.fail("Unterminated comment");
        this.pos = end + 2;
      } else {
        return;
      }
    }
  }

  private value(depth: number): unknown {
    if (depth > MAX_DEPTH) this.fail("Nesting too deep");
    const c = this.src[this.pos];
    if (c === "{") return this.object(depth);
    if (c === "[") return this.array(depth);
    if (c === '"' || c === "'" || c === "`") return this.string();
    if (c === "-" || c === "+" || c === "." || (c >= "0" && c <= "9")) {
      return this.number();
    }
    const word = this.identifier();
    if (word === "true") return true;
    if (word === "false") return false;
    if (word === "null") return null;
    return this.fail(`Unsupported token "${word || c}"`);
  }

  private object(depth: number): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    this.pos++; // {
    for (;;) {
      this.skip();
      if (this.src[this.pos] === "}") {
        this.pos++;
        return out;
      }
      const c = this.src[this.pos];
      let key: string;
      if (c === '"' || c === "'") key = this.string();
      else if (c >= "0" && c <= "9") key = String(this.number());
      else key = this.identifier();
      if (!key) this.fail("Expected property name");
      if (FORBIDDEN_KEYS.has(key)) this.fail(`Forbidden property "${key}"`);
      this.skip();
      if (this.src[this.pos] !== ":") this.fail("Expected ':'");
      this.pos++;
      this.skip();
      out[key] = this.value(depth + 1);
      this.skip();
      if (this.src[this.pos] === ",") this.pos++;
      else if (this.src[this.pos] !== "}") this.fail("Expected ',' or '}'");
    }
  }

  private array(depth: number): unknown[] {
    const out: unknown[] = [];
    this.pos++; // [
    for (;;) {
      this.skip();
      if (this.src[this.pos] === "]") {
        this.pos++;
        return out;
      }
      out.push(this.value(depth + 1));
      this.skip();
      if (this.src[this.pos] === ",") this.pos++;
      else if (this.src[this.pos] !== "]") this.fail("Expected ',' or ']'");
    }
  }

  private string(): string {
    const quote = this.src[this.pos++];
    let out = "";
    for (;;) {
      const c = this.src[this.pos++];
      if (c === undefined) this.fail("Unterminated string");
      if (c === quote) return out;
      if (quote === "`" && c === "$" && this.src[this.pos] === "{") {
        this.fail("Template substitutions are not allowed");
      }
      if (c === "\\") {
        const e = this.src[this.pos++];
        switch (e) {
          case "n": out += "\n"; break;
          case "t": out += "\t"; break;
          case "r": out += "\r"; break;
          case "b": out += "\b"; break;
          case "f": out += "\f"; break;
          case "0": out += "\0"; break;
          case "\n": break;
          case "u": {
            const hex = this.src.slice(this.pos, this.pos + 4);
            if (!/^[0-9a-fA-F]{4}$/.test(hex)) this.fail("Bad unicode escape");
            out += String.fromCharCode(parseInt(hex, 16));
            this.pos += 4;
            break;
          }
          case undefined: this.fail("Unterminated string"); break;
          default: out += e;
        }
      } else if (c === "\n" && quote !== "`") {
        this.fail("Newline in string");
      } else {
        out += c;
      }
    }
  }

  private number(): number {
    const m = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/.exec(
      this.src.slice(this.pos),
    );
    if (!m) this.fail("Bad number");
    this.pos += m[0].length;
    return Number(m[0]);
  }

  private identifier(): string {
    const m = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(this.src.slice(this.pos));
    if (!m) return "";
    this.pos += m[0].length;
    return m[0];
  }
}

export function parseSafeLiteral(source: string): unknown {
  return new LiteralParser(source.trim().replace(/;+\s*$/, "")).parse();
}

import assert from "node:assert/strict";
import test from "node:test";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { buildSanitizeSchema } from "../lib/markdown-sanitize";

// Same plugin order as RichMarkdownRenderer: raw -> sanitize -> katex.
async function render(md: string): Promise<string> {
  return renderToStaticMarkup(
    React.createElement(
      ReactMarkdown,
      {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeRaw,
          [rehypeSanitize, buildSanitizeSchema(defaultSchema)],
          rehypeKatex,
        ] as never,
      },
      md,
    ),
  );
}

const attacks: Array<[string, string]> = [
  ["script tag", "<script>alert(1)</script>"],
  ["img onerror", '<img src=x onerror="alert(1)">'],
  ["svg onload", '<svg onload="alert(1)"><circle r="5"/></svg>'],
  ["javascript: link", '<a href="javascript:alert(1)">x</a>'],
  ["javascript: md link", "[x](javascript:alert(1))"],
  ["iframe", '<iframe src="https://evil.example"></iframe>'],
  ["style attr", '<div style="background:url(javascript:alert(1))">x</div>'],
  ["svg script", "<svg><script>alert(1)</script></svg>"],
  ["foreignObject", "<svg><foreignObject><div onclick=alert(1)>x</div></foreignObject></svg>"],
  ["details ontoggle", "<details open ontoggle=alert(1)><summary>x</summary></details>"],
];

for (const [name, payload] of attacks) {
  test(`strips ${name}`, async () => {
    const out = (await render(payload)).toLowerCase();
    assert.ok(!/<script|<iframe|<foreignobject/.test(out), out);
    assert.ok(!/\son\w+\s*=/.test(out), out);
    assert.ok(!/javascript:/.test(out), out);
  });
}

test("keeps normal markdown, tables, html, svg and math", async () => {
  const out = await render(
    [
      "# Title",
      "",
      "| a | b |",
      "|---|---|",
      "| 1 | 2 |",
      "",
      '<div class="note"><strong>bold</strong> <a href="https://example.com">ok</a></div>',
      "",
      '<svg viewBox="0 0 10 10" width="10"><circle cx="5" cy="5" r="4" fill="red"/></svg>',
      "",
      "Inline $x^2$ and block:",
      "",
      "$$",
      "\\frac{a}{b}",
      "$$",
    ].join("\n"),
  );
  assert.match(out, /<h1>Title<\/h1>/);
  assert.match(out, /<table>/);
  assert.match(out, /<strong>bold<\/strong>/);
  assert.match(out, /class="note"/);
  assert.match(out, /href="https:\/\/example.com"/);
  assert.match(out, /<circle/);
  assert.match(out, /class="katex"/);
  assert.match(out, /katex-display/);
});

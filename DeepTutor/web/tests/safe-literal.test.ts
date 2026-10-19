import assert from "node:assert/strict";
import test from "node:test";

import { parseSafeLiteral } from "../lib/safe-literal";

test("parses a typical Chart.js object literal", () => {
  const cfg = parseSafeLiteral(`{
    type: 'bar', // comment
    data: { labels: ["A", 'B'], datasets: [{ label: "x", data: [1, 2.5, -3e1,], backgroundColor: ['#f00', "rgba(0,0,0,.5)"] }] },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: null } } },
  };`) as any;
  assert.equal(cfg.type, "bar");
  assert.deepEqual(cfg.data.datasets[0].data, [1, 2.5, -30]);
  assert.equal(cfg.options.scales.y.beginAtZero, true);
  assert.equal(cfg.options.scales.y.max, null);
});

test("parses JSON", () => {
  assert.deepEqual(parseSafeLiteral('{"a":[1,{"b":"c"}]}'), { a: [1, { b: "c" }] });
});

for (const [name, payload] of [
  ["function value", "{ options: { onClick: function(){ alert(1) } } }"],
  ["arrow function", "{ callback: () => alert(1) }"],
  ["call expression", "{ a: alert(1) }"],
  ["identifier", "{ a: window }"],
  ["IIFE", "(function(){ return {} })()"],
  ["template substitution", "{ a: `${alert(1)}` }"],
  ["__proto__ key", '{ "__proto__": { "x": 1 } }'],
  ["constructor key", "{ constructor: {} }"],
  ["trailing code", "{ a: 1 } ; alert(1)"],
  ["operator", "{ a: 1 + 2 }"],
] as const) {
  test(`rejects ${name}`, () => {
    assert.throws(() => parseSafeLiteral(payload));
  });
}

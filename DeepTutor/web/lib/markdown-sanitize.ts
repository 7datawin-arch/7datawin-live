// Safe subset of inline SVG that is still allowed inside Markdown HTML.
const SVG_TAGS = [
  "svg", "g", "path", "circle", "ellipse", "rect", "line", "polyline",
  "polygon", "text", "tspan", "defs", "linearGradient", "radialGradient", "stop",
];
const SVG_ATTRS = [
  "viewBox", "width", "height", "xmlns", "fill", "stroke", "strokeWidth",
  "strokeLinecap", "strokeLinejoin", "strokeDasharray", "opacity", "transform",
  "d", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "y1", "x2", "y2", "points",
  "offset", "stopColor", "stopOpacity", "textAnchor", "fontSize", "fontWeight",
  "fontFamily", "dominantBaseline",
];

/**
 * Sanitisation schema for model-produced Markdown HTML: GitHub's default
 * allow-list plus class names (needed by KaTeX/code fences) and basic SVG.
 * Scripts, event handlers, javascript: URLs, iframes and styles are dropped.
 */
export function buildSanitizeSchema(base: any) {
  const attributes: Record<string, any[]> = { ...base.attributes };
  attributes["*"] = [...(attributes["*"] ?? []), "className"];
  for (const tag of SVG_TAGS) attributes[tag] = [...(attributes[tag] ?? []), ...SVG_ATTRS];
  return {
    ...base,
    tagNames: [...base.tagNames, ...SVG_TAGS, "details", "summary"],
    attributes,
  };
}

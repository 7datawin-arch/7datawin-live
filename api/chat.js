// Server-side Gemini proxy. The API key lives only in the GEMINI_API_KEY
// environment variable (never VITE_-prefixed, so it is not bundled into the browser).

const MODEL = 'gemini-2.5-flash'
const MAX_BODY_CHARS = 60000
const MAX_OUTPUT_TOKENS = 1000
const RATE_LIMIT = 20 // requests per window per IP
const RATE_WINDOW_MS = 60 * 1000

// Best-effort limiter: in-memory, so it is per warm serverless instance.
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT
}

function originAllowed(req) {
  const origin = req.headers.origin
  if (!origin) return false
  const extra = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean)
  if (extra.includes(origin)) return true
  try {
    return new URL(origin).host === req.headers.host
  } catch {
    return false
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (!originAllowed(req)) {
    return res.status(403).json({ error: 'Origin not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(503).json({ error: 'AI service not configured' })
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' })
  }

  const body = req.body
  if (
    !body ||
    typeof body !== 'object' ||
    !Array.isArray(body.contents) ||
    body.contents.length === 0 ||
    JSON.stringify(body).length > MAX_BODY_CHARS
  ) {
    return res.status(400).json({ error: 'Invalid request' })
  }

  // Only forward the fields the app uses; the model and output cap are fixed here.
  const payload = {
    contents: body.contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: Math.min(Number(body.maxOutputTokens) || 500, MAX_OUTPUT_TOKENS),
    },
  }
  if (body.systemInstruction) payload.systemInstruction = body.systemInstruction

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify(payload),
      },
    )
    const data = await upstream.json()
    if (!upstream.ok) {
      return res.status(502).json({ error: data?.error?.message || 'AI request failed' })
    }
    return res.status(200).json(data)
  } catch {
    return res.status(502).json({ error: 'AI request failed' })
  }
}

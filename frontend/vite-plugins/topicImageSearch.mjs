const cache = new Map()
const CACHE_MS = 1000 * 60 * 60 * 12

function sendJson(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=300')
  res.end(JSON.stringify(body))
}

function decodeBingField(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/\\u0026/g, '&')
    .replace(/\\\//g, '/')
    .replace(/\\u003d/g, '=')
}

async function searchBing(query) {
  const url = `https://www.bing.com/images/async?q=${encodeURIComponent(query)}&first=1&count=12&mmasync=1`
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: '*/*',
      Referer: `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`,
    },
  })
  if (!res.ok) return null
  const html = await res.text()
  const match = html.match(
    /murl&quot;:&quot;(https?:.+?)&quot;,&quot;turl&quot;:&quot;(https?:.+?)&quot;/,
  )
  if (!match) return null
  const titleMatch = html.match(/&quot;t&quot;:&quot;(.+?)&quot;/)
  return {
    image: decodeBingField(match[1]),
    thumb: decodeBingField(match[2]),
    title: titleMatch ? decodeBingField(titleMatch[1]) : query,
    source: 'bing',
  }
}

async function searchDuckDuckGo(query) {
  const pageRes = await fetch(
    `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
    },
  )
  if (!pageRes.ok) return null
  const pageHtml = await pageRes.text()
  const vqd = pageHtml.match(/vqd=['"]([^'"]+)['"]/)?.[1]
  if (!vqd) return null

  const apiRes = await fetch(
    `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${encodeURIComponent(vqd)}&f=,,,,,&p=1`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://duckduckgo.com/',
      },
    },
  )
  if (!apiRes.ok) return null
  const data = await apiRes.json()
  const first = data.results?.[0]
  if (!first?.image) return null
  return {
    image: first.image,
    thumb: first.thumbnail || first.image,
    title: first.title || query,
    source: 'duckduckgo',
  }
}

async function searchGoogle(query) {
  try {
    const { chromium } = await import('playwright')
    const browser = await chromium.launch({ headless: true })
    try {
      const page = await browser.newPage({
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        locale: 'en-US',
      })
      await page.goto(
        `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}&hl=en&gl=us&safe=active`,
        { waitUntil: 'domcontentloaded', timeout: 8000 },
      )
      await page.waitForTimeout(900)
      for (const label of ['Accept all', 'I agree', 'Accept']) {
        const btn = page.getByRole('button', { name: label })
        if (await btn.count()) {
          await btn.first().click({ timeout: 1500 }).catch(() => {})
          break
        }
      }

      const ou = await page.evaluate(() => {
        const html = document.documentElement.innerHTML
        if (html.includes('unusual traffic') || html.includes('captcha')) {
          return []
        }
        return [...html.matchAll(/"ou":"(https?:[^"]+)"/g)].map((m) =>
          m[1]
            .replace(/\\u003d/g, '=')
            .replace(/\\u0026/g, '&')
            .replace(/\\\//g, '/'),
        )
      })

      if (ou[0]) {
        return {
          image: ou[0],
          thumb: ou[0],
          title: query,
          source: 'google',
        }
      }

      const imgs = page.locator('img')
      const count = await imgs.count()
      for (let i = 0; i < Math.min(count, 24); i += 1) {
        const img = imgs.nth(i)
        const box = await img.boundingBox()
        if (!box || box.width < 90) continue
        await img.click({ timeout: 2000 }).catch(() => {})
        await page.waitForTimeout(900)
        const picked = await page.evaluate(() => {
          const nodes = [...document.querySelectorAll('img')]
          for (const node of nodes) {
            const src = node.currentSrc || node.src
            if (
              src &&
              src.startsWith('http') &&
              !src.includes('gstatic.com/images?q=tbn') &&
              !src.includes('encrypted-tbn') &&
              !src.includes('logo')
            ) {
              return src
            }
          }
          return null
        })
        if (picked) {
          return {
            image: picked,
            thumb: picked,
            title: query,
            source: 'google',
          }
        }
      }
      return null
    } finally {
      await browser.close()
    }
  } catch {
    return null
  }
}

async function resolveHit(query) {
  const key = query.trim().toLowerCase()
  const cached = cache.get(key)
  if (cached && Date.now() - cached.at < CACHE_MS) return cached.hit

  const bing = await searchBing(query)
  if (bing) {
    cache.set(key, { hit: bing, at: Date.now() })
    void searchGoogle(query).then((google) => {
      if (google) cache.set(key, { hit: google, at: Date.now() })
    })
    return bing
  }

  const google = await searchGoogle(query)
  const hit = google || (await searchDuckDuckGo(query))
  if (hit) cache.set(key, { hit, at: Date.now() })
  return hit
}

async function proxyImage(targetUrl, res) {
  const upstream = await fetch(targetUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      Referer: 'https://www.bing.com/',
    },
    redirect: 'follow',
  })
  if (!upstream.ok) {
    res.statusCode = upstream.status
    res.end('Image fetch failed')
    return
  }
  const type = upstream.headers.get('content-type') || 'image/jpeg'
  const buf = Buffer.from(await upstream.arrayBuffer())
  res.statusCode = 200
  res.setHeader('Content-Type', type)
  res.setHeader('Cache-Control', 'public, max-age=86400')
  res.end(buf)
}

export function topicImageSearchPlugin() {
  return {
    name: 'topic-image-search',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          if (!req.url) return next()
          const url = new URL(req.url, 'http://localhost')

          if (url.pathname === '/api/topic-image') {
            const query = (url.searchParams.get('q') || '').trim()
            if (!query) {
              sendJson(res, 400, { error: 'Missing q' })
              return
            }
            const hit = await resolveHit(query)
            if (!hit) {
              sendJson(res, 404, { error: 'No image found', query })
              return
            }
            sendJson(res, 200, {
              query,
              title: hit.title,
              source: hit.source,
              image: hit.image,
              thumb: hit.thumb,
              displayUrl: `/api/topic-image-file?q=${encodeURIComponent(query)}`,
              googleUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`,
            })
            return
          }

          if (url.pathname === '/api/topic-image-file') {
            const query = (url.searchParams.get('q') || '').trim()
            if (!query) {
              res.statusCode = 400
              res.end('Missing q')
              return
            }
            const hit = await resolveHit(query)
            if (!hit) {
              res.statusCode = 404
              res.end('No image found')
              return
            }
            try {
              await proxyImage(hit.image, res)
            } catch {
              await proxyImage(hit.thumb, res)
            }
            return
          }

          return next()
        } catch (error) {
          sendJson(res, 500, {
            error: error instanceof Error ? error.message : 'Search failed',
          })
        }
      })
    },
  }
}

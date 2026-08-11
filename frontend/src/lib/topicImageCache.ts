import type { SlideContent } from '../types/course'

export type TopicImageResult = {
  query: string
  title: string
  source: string
  displayUrl: string
  googleUrl: string
}

type TopicImageFailure = {
  query: string
  error: string
}

type CacheEntry =
  | { status: 'ok'; data: TopicImageResult }
  | { status: 'error'; data: TopicImageFailure }
  | { status: 'pending'; promise: Promise<TopicImageResult> }

const cache = new Map<string, CacheEntry>()
const preloadedFiles = new Set<string>()

function cacheKey(query: string) {
  return query.trim().toLowerCase()
}

export function getSlideImageQueries(
  slide: Pick<
    SlideContent,
    'titleEn' | 'imageQuery' | 'imageQueries' | 'keywords'
  >,
  context?: {
    chapterTitleEn?: string
    sectionTitleEn?: string
  },
): string[] {
  const queries: string[] = []

  if (slide.imageQueries && slide.imageQueries.length > 0) {
    for (const query of slide.imageQueries) {
      const trimmed = query.trim()
      if (trimmed && !queries.includes(trimmed)) queries.push(trimmed)
    }
  }

  if (slide.imageQuery?.trim()) {
    const trimmed = slide.imageQuery.trim()
    if (!queries.includes(trimmed)) queries.push(trimmed)
  }

  if (queries.length > 0) return queries

  const title = slide.titleEn
    .replace(/^Part\s+[A-J]\s*[·•-]\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim()

  const parts = [title]
  if (context?.sectionTitleEn && context.sectionTitleEn !== title) {
    parts.push(context.sectionTitleEn)
  }
  if (context?.chapterTitleEn && context.chapterTitleEn !== title) {
    parts.push(context.chapterTitleEn)
  }
  if (slide.keywords?.[0]?.en) {
    parts.push(slide.keywords[0].en)
  }

  const derived = parts.join(' ').replace(/\s+/g, ' ').trim()
  return derived ? [derived] : []
}

function preloadImageFile(url: string) {
  if (!url || preloadedFiles.has(url)) return
  preloadedFiles.add(url)
  const img = new Image()
  img.decoding = 'async'
  img.src = url
}

async function requestTopicImage(query: string): Promise<TopicImageResult> {
  const res = await fetch(`/api/topic-image?q=${encodeURIComponent(query)}`)
  if (!res.ok) {
    throw new Error(`No image for “${query}”`)
  }
  const data = (await res.json()) as TopicImageResult
  preloadImageFile(data.displayUrl)
  return data
}

export function loadTopicImage(
  query: string,
): Promise<TopicImageResult | TopicImageFailure> {
  const key = cacheKey(query)
  const existing = cache.get(key)

  if (existing?.status === 'ok' || existing?.status === 'error') {
    return Promise.resolve(existing.data)
  }

  if (existing?.status === 'pending') {
    return existing.promise.then(
      (data) => data,
      (error: unknown) => ({
        query,
        error: error instanceof Error ? error.message : 'Search failed',
      }),
    )
  }

  const promise = requestTopicImage(query)
  cache.set(key, { status: 'pending', promise })

  return promise.then(
    (data) => {
      cache.set(key, { status: 'ok', data })
      return data
    },
    (error: unknown) => {
      const failure: TopicImageFailure = {
        query,
        error: error instanceof Error ? error.message : 'Search failed',
      }
      cache.set(key, { status: 'error', data: failure })
      return failure
    },
  )
}

export function peekTopicImage(
  query: string,
): TopicImageResult | TopicImageFailure | null {
  const entry = cache.get(cacheKey(query))
  if (!entry || entry.status === 'pending') return null
  return entry.data
}

export function preloadTopicImages(queries: string[]) {
  for (const query of queries) {
    const trimmed = query.trim()
    if (!trimmed) continue
    void loadTopicImage(trimmed)
  }
}

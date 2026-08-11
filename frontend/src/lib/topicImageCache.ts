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

function illustrationHint(
  illustration: SlideContent['illustration'],
): string | undefined {
  switch (illustration) {
    case 'hardware':
      return 'computer hardware'
    case 'network':
    case 'protocol':
    case 'interface':
      return 'computer network'
    case 'terminal':
      return 'Windows PowerShell terminal'
    case 'files':
      return 'Windows File Explorer folders'
    case 'python':
    case 'code':
      return 'programming code'
    case 'cursor':
      return 'code editor IDE'
    case 'security':
      return 'computer security'
    case 'git':
      return 'git version control'
    case 'environment':
      return 'software development environment'
    default:
      return undefined
  }
}

export function getSlideImageQueries(
  slide: Pick<
    SlideContent,
    | 'titleEn'
    | 'imageQuery'
    | 'imageQueries'
    | 'keywords'
    | 'illustration'
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

  const keywordParts = (slide.keywords ?? [])
    .map((item) => item.en.trim())
    .filter(Boolean)
    .slice(0, 3)
  const hint = illustrationHint(slide.illustration)
  const chapterHint = context?.chapterTitleEn?.replace(/\s+/g, ' ').trim()

  const parts = [title, ...keywordParts]
  if (hint) parts.push(hint)
  else if (
    chapterHint &&
    chapterHint !== title &&
    !title.toLowerCase().includes(chapterHint.toLowerCase())
  ) {
    parts.push(chapterHint)
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

function topicImageApiRoot() {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.endsWith('/') ? base : `${base}/`}api`
}

async function requestTopicImage(query: string): Promise<TopicImageResult> {
  const res = await fetch(
    `${topicImageApiRoot()}/topic-image?q=${encodeURIComponent(query)}`,
  )
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

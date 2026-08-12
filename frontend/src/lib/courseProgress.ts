import { chapterPath, getBook } from '../data/books'
import { chapters, getAllSlides, getChapter } from '../data/chapters'

const LEGACY_COOKIE_NAME = 'courseProgress'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365
const VISITED_KEY = 'courseVisitedSlides'
const SIDEBAR_COLLAPSED_KEY = 'courseSidebarCollapsed'

export type CourseProgress = {
  chapterId: string
  slideId: string
}

export type CourseProgressStats = {
  visited: number
  total: number
  percent: number
}

function progressCookieName(bookId: string) {
  return `bookProgress_${bookId}`
}

function allSlideKeys(): string[] {
  return chapters.flatMap((chapter) =>
    getAllSlides(chapter).map((slide) => `${chapter.id}|${slide.id}`),
  )
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax`
}

function readCookie(name: string): string | undefined {
  const match = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))
  if (!match) return undefined
  return decodeURIComponent(match.slice(name.length + 1))
}

export function saveCourseProgress(
  bookId: string,
  chapterId: string,
  slideId: string,
) {
  const book = getBook(bookId)
  if (!book || book.kind !== 'course') return

  writeCookie(progressCookieName(bookId), `${chapterId}|${slideId}`)
  if (bookId === 'computer') {
    writeCookie(LEGACY_COOKIE_NAME, `${chapterId}|${slideId}`)
  }
  markSlideVisited(chapterId, slideId)
}

export function readCourseProgress(bookId: string): CourseProgress | undefined {
  const raw =
    readCookie(progressCookieName(bookId)) ||
    (bookId === 'computer' ? readCookie(LEGACY_COOKIE_NAME) : undefined)
  if (!raw) return undefined

  const [chapterId, slideId] = raw.split('|')
  if (!chapterId || !slideId) return undefined
  return { chapterId, slideId }
}

export function getValidCourseProgress(
  bookId: string,
): CourseProgress | undefined {
  const progress = readCourseProgress(bookId)
  if (!progress) return undefined

  const chapter = getChapter(progress.chapterId)
  if (!chapter) return undefined

  const slide = getAllSlides(chapter).find((item) => item.id === progress.slideId)
  if (!slide) return undefined

  return progress
}

export function getResumePath(bookId: string): string | undefined {
  const progress = getValidCourseProgress(bookId)
  if (!progress) return undefined
  return chapterPath(bookId, progress.chapterId, progress.slideId)
}

export function markSlideVisited(chapterId: string, slideId: string) {
  try {
    const key = `${chapterId}|${slideId}`
    const current = readVisitedSlides()
    if (current.has(key)) return
    current.add(key)
    localStorage.setItem(VISITED_KEY, JSON.stringify([...current]))
  } catch {
    return
  }
}

export function readVisitedSlides(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    if (!raw) return new Set()
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return new Set()
    return new Set(parsed.filter((item) => typeof item === 'string'))
  } catch {
    return new Set()
  }
}

export function getCourseProgressStats(): CourseProgressStats {
  const total = allSlideKeys().length
  if (total === 0) return { visited: 0, total: 0, percent: 0 }

  const visitedSet = readVisitedSlides()
  const validKeys = new Set(allSlideKeys())
  let visited = 0
  for (const key of visitedSet) {
    if (validKeys.has(key)) visited += 1
  }

  return {
    visited,
    total,
    percent: Math.round((visited / total) * 100),
  }
}

export function readSidebarCollapsed(): boolean {
  try {
    return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === '1'
  } catch {
    return false
  }
}

export function saveSidebarCollapsed(collapsed: boolean) {
  try {
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, collapsed ? '1' : '0')
  } catch {
    return
  }
}

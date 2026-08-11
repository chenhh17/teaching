import { chapters, getChapterMeta } from '../data/chapters'

const COOKIE_NAME = 'courseProgress'
const VISITED_KEY = 'courseVisitedSlides'
const SIDEBAR_COLLAPSED_KEY = 'courseSidebarCollapsed'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export type CourseProgress = {
  chapterId: string
  slideId: string
}

export type CourseProgressStats = {
  visited: number
  total: number
  percent: number
}

function allSlideKeys(): string[] {
  return chapters.flatMap((chapter) =>
    chapter.sections.flatMap((section) =>
      section.slideIds.map((slideId) => `${chapter.id}|${slideId}`),
    ),
  )
}

export function saveCourseProgress(chapterId: string, slideId: string) {
  const value = encodeURIComponent(`${chapterId}|${slideId}`)
  document.cookie = `${COOKIE_NAME}=${value}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax`
  markSlideVisited(chapterId, slideId)
}

export function readCourseProgress(): CourseProgress | undefined {
  const match = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${COOKIE_NAME}=`))
  if (!match) return undefined

  const raw = decodeURIComponent(match.slice(COOKIE_NAME.length + 1))
  const [chapterId, slideId] = raw.split('|')
  if (!chapterId || !slideId) return undefined
  return { chapterId, slideId }
}

export function getValidCourseProgress(): CourseProgress | undefined {
  const progress = readCourseProgress()
  if (!progress) return undefined

  const chapter = getChapterMeta(progress.chapterId)
  if (!chapter) return undefined

  const known = chapter.sections.some((section) =>
    section.slideIds.includes(progress.slideId),
  )
  if (!known) return undefined

  return progress
}

export function getResumePath(): string | undefined {
  const progress = getValidCourseProgress()
  if (!progress) return undefined
  return `/chapter/${progress.chapterId}/${progress.slideId}`
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

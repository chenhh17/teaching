import type { Chapter, Part } from '../../types/course'
import { parts } from '../parts'
import {
  chapterCatalog,
  chapterMetaById,
  type ChapterMeta,
} from '../chapterCatalog'
import { chapterLoaders } from '../chapterLoaders'

export { parts }
export type { ChapterMeta }
export { chapterCatalog, chapterMetaById }

export const chapters: ChapterMeta[] = parts.flatMap((part) =>
  part.chapterIds
    .map((id) => chapterMetaById[id])
    .filter((chapter): chapter is ChapterMeta => Boolean(chapter)),
)

const chapterCache = new Map<string, Chapter>()
const chapterPromises = new Map<string, Promise<Chapter | undefined>>()

export function getChapterMeta(chapterId: string): ChapterMeta | undefined {
  return chapterMetaById[chapterId]
}

export async function loadChapter(
  chapterId: string,
): Promise<Chapter | undefined> {
  const cached = chapterCache.get(chapterId)
  if (cached) return cached

  const pending = chapterPromises.get(chapterId)
  if (pending) return pending

  const loader = chapterLoaders[chapterId]
  if (!loader) return undefined

  const promise = loader()
    .then((chapter) => {
      chapterCache.set(chapterId, chapter)
      chapterPromises.delete(chapterId)
      return chapter
    })
    .catch((error) => {
      chapterPromises.delete(chapterId)
      throw error
    })

  chapterPromises.set(chapterId, promise)
  return promise
}

export function preloadChapter(chapterId: string) {
  void loadChapter(chapterId)
}

export function getAllSlides(chapter: Chapter) {
  return chapter.sections.flatMap((section) =>
    section.slides.map((slide) => ({
      ...slide,
      sectionId: section.id,
      sectionTitleEn: section.titleEn,
      sectionTitleZh: section.titleZh,
    })),
  )
}

export function getPartForChapter(chapterId: string): Part | undefined {
  return parts.find((part) => part.chapterIds.includes(chapterId))
}

export function getChaptersByPart(part: Part): ChapterMeta[] {
  return part.chapterIds
    .map((id) => getChapterMeta(id))
    .filter((chapter): chapter is ChapterMeta => Boolean(chapter))
}

export function getChapterCode(chapterId: string): string | undefined {
  const part = getPartForChapter(chapterId)
  if (!part) return undefined
  const partIndex = parts.findIndex((item) => item.id === part.id)
  const chapterIndex = part.chapterIds.indexOf(chapterId)
  if (partIndex < 0 || chapterIndex < 0) return undefined
  return `${String.fromCharCode(65 + partIndex)}${chapterIndex + 1}`
}

export function getAdjacentChapters(chapterId: string) {
  const index = chapters.findIndex((chapter) => chapter.id === chapterId)
  return {
    prev: index > 0 ? chapters[index - 1] : undefined,
    next:
      index >= 0 && index < chapters.length - 1
        ? chapters[index + 1]
        : undefined,
  }
}

export function getCourseStats() {
  const slideCount = chapters.reduce(
    (sum, chapter) => sum + chapter.slideCount,
    0,
  )
  return {
    partCount: parts.length,
    chapterCount: chapters.length,
    slideCount,
  }
}

export function findSectionIdForSlide(
  chapterId: string,
  slideId: string,
): string | undefined {
  const meta = getChapterMeta(chapterId)
  if (!meta) return undefined
  return meta.sections.find((section) => section.slideIds.includes(slideId))?.id
}

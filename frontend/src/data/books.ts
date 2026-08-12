import type { Book } from '../types/course'
import { parts } from './parts'
import {
  getAllSlides,
  getChaptersByPart,
  getCourseStats,
} from './chapters'

export const books: Book[] = [
  {
    id: 'computer',
    titleEn: 'Computer',
    titleZh: '计算机',
    summaryEn:
      'Programming, internet, and Windows computer foundations across ten parts.',
    summaryZh: '编程、互联网与 Windows 计算机入门，共十个大篇章。',
    theme: 'navy',
    kind: 'course',
    partIds: parts.map((part) => part.id),
    cover: 'books/computer.jpg',
    icon: 'computer',
    spineEn: 'Computer',
    spineZh: '计算机',
  },
  {
    id: 'video-editing',
    titleEn: 'Video Editing',
    titleZh: '视频剪辑',
    summaryEn: 'Coming soon. Content for this book is empty for now.',
    summaryZh: '即将推出。本书内容暂时为空。',
    theme: 'orange',
    kind: 'empty',
    cover: 'books/video-editing.jpg',
    icon: 'video',
    spineEn: 'Video',
    spineZh: '剪辑',
  },
]

const bookById: Record<string, Book> = Object.fromEntries(
  books.map((book) => [book.id, book]),
)

export function getBook(bookId: string): Book | undefined {
  return bookById[bookId]
}

export function getBookParts(book: Book) {
  if (book.kind !== 'course' || !book.partIds?.length) return []
  const partById = Object.fromEntries(parts.map((part) => [part.id, part]))
  return book.partIds
    .map((id) => partById[id])
    .filter((part): part is (typeof parts)[number] => Boolean(part))
}

export function getBookStats(book: Book) {
  if (book.kind !== 'course') {
    return { partCount: 0, chapterCount: 0, slideCount: 0 }
  }
  return getCourseStats()
}

export function getBookFirstChapterPath(bookId: string): string | undefined {
  const book = getBook(bookId)
  if (!book || book.kind !== 'course') return undefined

  const bookParts = getBookParts(book)
  const firstPart = bookParts[0]
  if (!firstPart) return undefined

  const firstChapter = getChaptersByPart(firstPart)[0]
  const firstSlide = firstChapter ? getAllSlides(firstChapter)[0] : undefined
  if (!firstChapter || !firstSlide) return undefined

  return chapterPath(bookId, firstChapter.id, firstSlide.id)
}

export function chapterPath(
  bookId: string,
  chapterId: string,
  slideId: string,
) {
  return `/book/${bookId}/chapter/${chapterId}/${slideId}`
}

export function bookOpenPath(bookId: string) {
  return `/book/${bookId}`
}

export function bookCoverUrl(cover: string) {
  const base = import.meta.env.BASE_URL || '/'
  const root = base.endsWith('/') ? base : `${base}/`
  return `${root}${cover.replace(/^\//, '')}`
}

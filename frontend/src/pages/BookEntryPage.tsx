import { Navigate, useParams } from 'react-router-dom'
import {
  getBook,
  getBookFirstChapterPath,
  bookOpenPath,
} from '../data/books'
import { getResumePath } from '../lib/courseProgress'
import { EmptyBookPage } from './EmptyBookPage'

export function BookEntryPage() {
  const { bookId = '' } = useParams()
  const book = getBook(bookId)

  if (!book) {
    return <Navigate to="/" replace />
  }

  if (book.kind === 'empty') {
    return <EmptyBookPage book={book} />
  }

  const target =
    getResumePath(book.id) ||
    getBookFirstChapterPath(book.id) ||
    bookOpenPath(book.id)

  if (target === bookOpenPath(book.id)) {
    return <Navigate to="/" replace />
  }

  return <Navigate to={target} replace />
}

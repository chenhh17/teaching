import { useEffect, type ReactNode } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { DashboardPage } from './pages/DashboardPage'
import { BookEntryPage } from './pages/BookEntryPage'
import { ChapterPage } from './pages/ChapterPage'
import { ChineseLocaleProvider } from './context/ChineseLocaleContext'
import { getBook } from './data/books'
import { getPartForChapter } from './data/chapters'
import { saveCourseProgress } from './lib/courseProgress'

function ProgressSync({
  bookId,
  chapterId,
  slideId,
}: {
  bookId?: string
  chapterId?: string
  slideId?: string
}) {
  useEffect(() => {
    if (bookId && chapterId && slideId) {
      saveCourseProgress(bookId, chapterId, slideId)
    }
  }, [bookId, chapterId, slideId])

  return null
}

function LegacyChapterRedirect() {
  const { chapterId = '', slideId } = useParams()
  const target = slideId
    ? `/book/computer/chapter/${chapterId}/${slideId}`
    : `/book/computer/chapter/${chapterId}`
  return <Navigate to={target} replace />
}

function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const match = location.pathname.match(
    /^\/book\/([^/]+)\/chapter\/([^/]+)(?:\/([^/]+))?/,
  )
  const bookId = match?.[1]
  const chapterId = match?.[2]
  const slideId = match?.[3]
  const book = bookId ? getBook(bookId) : undefined
  const part = chapterId ? getPartForChapter(chapterId) : undefined
  const partTheme = part?.theme ?? book?.theme ?? 'navy'
  const showSidebar = Boolean(book && book.kind === 'course' && chapterId)

  return (
    <div className={`app-shell ${showSidebar ? '' : 'no-sidebar'}`.trim()}>
      <ProgressSync bookId={bookId} chapterId={chapterId} slideId={slideId} />
      {showSidebar && (
        <Sidebar
          bookId={bookId!}
          activeChapterId={chapterId}
          activeSlideId={slideId}
        />
      )}
      <main className={`main-panel theme-${partTheme}`}>{children}</main>
    </div>
  )
}

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ChineseLocaleProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/book/:bookId" element={<BookEntryPage />} />
            <Route
              path="/book/:bookId/chapter/:chapterId/:slideId?"
              element={<ChapterPage />}
            />
            <Route
              path="/chapter/:chapterId/:slideId?"
              element={<LegacyChapterRedirect />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </ChineseLocaleProvider>
    </BrowserRouter>
  )
}

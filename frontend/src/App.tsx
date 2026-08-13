import { useEffect, type ReactNode } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { DashboardPage } from './pages/DashboardPage'
import { BookEntryPage } from './pages/BookEntryPage'
import { ChapterPage } from './pages/ChapterPage'
import { LoginPage } from './pages/LoginPage'
import { AnalysisPage } from './pages/AnalysisPage'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ChineseLocaleProvider } from './context/ChineseLocaleContext'
import { ReadHintsProvider, useReadHints } from './context/ReadHintsContext'
import { getBook } from './data/books'
import { getPartForChapter } from './data/chapters'
import { saveCourseProgress } from './lib/courseProgress'
import { useReadingTracker } from './hooks/useReadingTracker'

function ProgressSync({
  bookId,
  chapterId,
  slideId,
}: {
  bookId?: string
  chapterId?: string
  slideId?: string
}) {
  const { refresh } = useReadHints(bookId)

  useEffect(() => {
    if (bookId && chapterId && slideId) {
      saveCourseProgress(bookId, chapterId, slideId)
    }
  }, [bookId, chapterId, slideId])

  useReadingTracker({
    bookId,
    chapterId,
    slideId,
    onMarkedRead: () => {
      void refresh()
    },
  })

  return null
}

function LegacyChapterRedirect() {
  const { chapterId = '', slideId } = useParams()
  const target = slideId
    ? `/book/computer/chapter/${chapterId}/${slideId}`
    : `/book/computer/chapter/${chapterId}`
  return <Navigate to={target} replace />
}

function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <div className="auth-loading">Loading…</div>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

function AppLayout() {
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
    <ReadHintsProvider bookId={bookId}>
      <div className={`app-shell ${showSidebar ? '' : 'no-sidebar'}`.trim()}>
        <ProgressSync bookId={bookId} chapterId={chapterId} slideId={slideId} />
        {showSidebar && (
          <Sidebar
            bookId={bookId!}
            activeChapterId={chapterId}
            activeSlideId={slideId}
          />
        )}
        <main className={`main-panel theme-${partTheme}`}>
          <Outlet />
        </main>
      </div>
    </ReadHintsProvider>
  )
}

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AuthProvider>
        <ChineseLocaleProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              element={
                <RequireAuth>
                  <AppLayout />
                </RequireAuth>
              }
            >
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
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </ChineseLocaleProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

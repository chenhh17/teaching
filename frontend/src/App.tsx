import { useEffect, useRef, type ReactNode } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { HomePage } from './pages/HomePage'
import { ChapterPage } from './pages/ChapterPage'
import { ChineseLocaleProvider } from './context/ChineseLocaleContext'
import { getPartForChapter } from './data/chapters'
import {
  getResumePath,
  saveCourseProgress,
} from './lib/courseProgress'

function ProgressSync({
  chapterId,
  slideId,
}: {
  chapterId?: string
  slideId?: string
}) {
  const location = useLocation()
  const navigate = useNavigate()
  const didRestore = useRef(false)

  useEffect(() => {
    if (chapterId && slideId) {
      saveCourseProgress(chapterId, slideId)
    }
  }, [chapterId, slideId])

  useEffect(() => {
    if (didRestore.current) return
    didRestore.current = true

    if (location.pathname !== '/') return
    if (new URLSearchParams(location.search).get('browse') === '1') return

    const resumePath = getResumePath()
    if (resumePath) {
      navigate(resumePath, { replace: true })
    }
  }, [location.pathname, location.search, navigate])

  return null
}

function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const match = location.pathname.match(/^\/chapter\/([^/]+)(?:\/([^/]+))?/)
  const chapterId = match?.[1]
  const slideId = match?.[2]
  const part = chapterId ? getPartForChapter(chapterId) : undefined
  const partTheme = part?.theme ?? 'navy'

  return (
    <div className="app-shell">
      <ProgressSync chapterId={chapterId} slideId={slideId} />
      <Sidebar activeChapterId={chapterId} activeSlideId={slideId} />
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
            <Route path="/" element={<HomePage />} />
            <Route
              path="/chapter/:chapterId/:slideId?"
              element={<ChapterPage />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </ChineseLocaleProvider>
    </BrowserRouter>
  )
}

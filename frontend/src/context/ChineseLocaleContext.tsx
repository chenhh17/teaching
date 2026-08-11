import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useLocation } from 'react-router-dom'
import { readShowChinese, saveShowChinese } from '../lib/chineseLocale'

type ChineseLocaleContextValue = {
  showChinese: boolean
  globalChinese: boolean
  pageChinese: boolean
  setShowChinese: (show: boolean) => void
  togglePageChinese: () => void
}

const ChineseLocaleContext = createContext<ChineseLocaleContextValue | null>(
  null,
)

export function ChineseLocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const pageKey = `${location.pathname}${location.search}`
  const [globalChinese, setGlobalChinese] = useState(() => readShowChinese())
  const [pageOnceKey, setPageOnceKey] = useState<string | null>(null)

  const pageChinese = pageOnceKey === pageKey
  const showChinese = globalChinese || pageChinese

  useEffect(() => {
    saveShowChinese(globalChinese)
  }, [globalChinese])

  useEffect(() => {
    document.documentElement.classList.toggle('show-zh', showChinese)
  }, [showChinese])

  const value = useMemo(
    () => ({
      showChinese,
      globalChinese,
      pageChinese,
      setShowChinese: setGlobalChinese,
      togglePageChinese: () => {
        setPageOnceKey((current) => (current === pageKey ? null : pageKey))
      },
    }),
    [showChinese, globalChinese, pageChinese, pageKey],
  )

  return (
    <ChineseLocaleContext.Provider value={value}>
      {children}
    </ChineseLocaleContext.Provider>
  )
}

export function useChineseLocale() {
  const context = useContext(ChineseLocaleContext)
  if (!context) {
    throw new Error('useChineseLocale must be used within ChineseLocaleProvider')
  }
  return context
}

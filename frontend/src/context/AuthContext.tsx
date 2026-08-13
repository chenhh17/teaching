import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { apiFetch, apiJson } from '../lib/api'

export type AuthUser = {
  id: number | string
  username: string
  role: string
}

type AuthContextValue = {
  user: AuthUser | null
  loading: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

function normalizeUser(data: unknown): AuthUser | null {
  if (!data || typeof data !== 'object') return null
  const record = data as Record<string, unknown>
  const source =
    record.user && typeof record.user === 'object'
      ? (record.user as Record<string, unknown>)
      : record
  if (
    (typeof source.id !== 'number' && typeof source.id !== 'string') ||
    typeof source.username !== 'string'
  ) {
    return null
  }
  return {
    id: source.id,
    username: source.username,
    role: typeof source.role === 'string' ? source.role : 'user',
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshMe = useCallback(async () => {
    try {
      const data = await apiJson<unknown>('/auth/me')
      setUser(normalizeUser(data))
    } catch {
      setUser(null)
    }
  }, [])

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const data = await apiJson<unknown>('/auth/me')
        if (active) setUser(normalizeUser(data))
      } catch {
        if (active) setUser(null)
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  const login = useCallback(
    async (username: string, password: string) => {
      const data = await apiJson<unknown>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })
      const next = normalizeUser(data)
      if (next) {
        setUser(next)
        return
      }
      await refreshMe()
    },
    [refreshMe],
  )

  const register = useCallback(
    async (username: string, password: string) => {
      const data = await apiJson<unknown>('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })
      const next = normalizeUser(data)
      if (next) {
        setUser(next)
        return
      }
      await refreshMe()
    },
    [refreshMe],
  )

  const logout = useCallback(async () => {
    try {
      await apiFetch('/auth/logout', { method: 'POST', body: '{}' })
    } catch {
    } finally {
      setUser(null)
    }
  }, [])

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      register,
      logout,
      isAdmin: user?.role === 'admin',
    }),
    [user, loading, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

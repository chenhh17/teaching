import { useState, type FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useChineseLocale } from '../context/ChineseLocaleContext'
import { ApiError } from '../lib/api'

type Mode = 'login' | 'register'

export function LoginPage() {
  const { user, loading, login, register } = useAuth()
  const { showChinese } = useChineseLocale()
  const navigate = useNavigate()
  const location = useLocation()
  const [mode, setMode] = useState<Mode>('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const fromPath =
    (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ||
    '/'

  if (!loading && user) {
    return <Navigate to={fromPath} replace />
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    const name = username.trim()
    if (!name) {
      setError(showChinese ? 'Username is required / 请输入用户名' : 'Username is required')
      return
    }
    if (password.length < 8) {
      setError(
        showChinese
          ? 'Password must be at least 8 characters / 密码至少 8 位'
          : 'Password must be at least 8 characters',
      )
      return
    }

    setSubmitting(true)
    try {
      if (mode === 'login') {
        await login(name, password)
      } else {
        await register(name, password)
      }
      navigate(fromPath, { replace: true })
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : mode === 'login'
            ? 'Login failed'
            : 'Registration failed'
      setError(
        showChinese && message === 'Login failed'
          ? 'Login failed / 登录失败'
          : showChinese && message === 'Registration failed'
            ? 'Registration failed / 注册失败'
            : message,
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onSubmit}>
        <header className="login-form-header">
          <h1>Teaching</h1>
          {showChinese && <p className="login-form-zh">教学平台</p>}
          <p className="login-form-sub">
            {mode === 'login'
              ? showChinese
                ? 'Sign in to continue / 登录后继续学习'
                : 'Sign in to continue'
              : showChinese
                ? 'Create an account / 注册新账号'
                : 'Create an account'}
          </p>
        </header>

        <label className="login-field">
          <span>{showChinese ? 'Username / 用户名' : 'Username'}</span>
          <input
            type="text"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            disabled={submitting || loading}
          />
        </label>

        <label className="login-field">
          <span>{showChinese ? 'Password / 密码' : 'Password'}</span>
          <input
            type="password"
            name="password"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={submitting || loading}
            minLength={8}
          />
        </label>

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="login-submit" disabled={submitting || loading}>
          {submitting
            ? showChinese
              ? 'Please wait… / 请稍候…'
              : 'Please wait…'
            : mode === 'login'
              ? showChinese
                ? 'Sign in / 登录'
                : 'Sign in'
              : showChinese
                ? 'Register / 注册'
                : 'Register'}
        </button>

        <p className="login-switch">
          {mode === 'login' ? (
            <>
              {showChinese ? 'No account? / 没有账号？' : 'No account?'}{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('register')
                  setError('')
                }}
                disabled={submitting}
              >
                {showChinese ? 'Register / 注册' : 'Register'}
              </button>
            </>
          ) : (
            <>
              {showChinese ? 'Already registered? / 已有账号？' : 'Already registered?'}{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('login')
                  setError('')
                }}
                disabled={submitting}
              >
                {showChinese ? 'Sign in / 登录' : 'Sign in'}
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  )
}

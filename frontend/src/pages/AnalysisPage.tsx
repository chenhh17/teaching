import { useEffect, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnalysisDashboard, AdminUserProgress } from '../components/AnalysisDashboard'
import { useAuth } from '../context/AuthContext'
import { ApiError, apiJson } from '../lib/api'
import {
  formatRelativeTime,
  type AnalysisPayload,
  type AnalysisTotals,
} from '../lib/readingAnalysis'

type AdminUser = {
  id: number | string
  username: string
  role: string
  createdAt?: string
  totals: AnalysisTotals
}

export function AnalysisPage() {
  const { user, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const [mine, setMine] = useState<AnalysisPayload | null>(null)
  const [mineError, setMineError] = useState('')
  const [mineLoading, setMineLoading] = useState(true)

  const [users, setUsers] = useState<AdminUser[]>([])
  const [usersError, setUsersError] = useState('')
  const [usersLoading, setUsersLoading] = useState(false)

  const [selectedUserId, setSelectedUserId] = useState<number | string | null>(
    null,
  )
  const [selectedAnalysis, setSelectedAnalysis] =
    useState<AnalysisPayload | null>(null)
  const [selectedError, setSelectedError] = useState('')
  const [selectedLoading, setSelectedLoading] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordSaving, setPasswordSaving] = useState(false)

  useEffect(() => {
    let active = true
    ;(async () => {
      setMineLoading(true)
      setMineError('')
      try {
        const data = await apiJson<AnalysisPayload>('/progress/analysis')
        if (active) setMine(data)
      } catch (err) {
        if (active) {
          setMine(null)
          setMineError(
            err instanceof ApiError ? err.message : 'Failed to load analysis',
          )
        }
      } finally {
        if (active) setMineLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!isAdmin) return
    let active = true
    ;(async () => {
      setUsersLoading(true)
      setUsersError('')
      try {
        const data = await apiJson<{ users: AdminUser[] }>('/admin/users')
        if (active) setUsers(data.users ?? [])
      } catch (err) {
        if (active) {
          setUsers([])
          setUsersError(
            err instanceof ApiError ? err.message : 'Failed to load users',
          )
        }
      } finally {
        if (active) setUsersLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [isAdmin])

  useEffect(() => {
    if (!isAdmin || selectedUserId == null) {
      setSelectedAnalysis(null)
      setSelectedError('')
      return
    }

    let active = true
    ;(async () => {
      setSelectedLoading(true)
      setSelectedError('')
      setPassword('')
      setPasswordMsg('')
      setPasswordError('')
      try {
        const data = await apiJson<AnalysisPayload>(
          `/admin/users/${selectedUserId}/analysis`,
        )
        if (active) setSelectedAnalysis(data)
      } catch (err) {
        if (active) {
          setSelectedAnalysis(null)
          setSelectedError(
            err instanceof ApiError
              ? err.message
              : 'Failed to load user analysis',
          )
        }
      } finally {
        if (active) setSelectedLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [isAdmin, selectedUserId])

  const selectedUser =
    selectedUserId == null
      ? null
      : users.find((item) => String(item.id) === String(selectedUserId)) ?? null

  const onLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  const onPasswordSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (selectedUserId == null) return

    setPasswordMsg('')
    setPasswordError('')

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters')
      return
    }

    setPasswordSaving(true)
    try {
      await apiJson(`/admin/users/${selectedUserId}/password`, {
        method: 'POST',
        body: JSON.stringify({ password }),
      })
      setPassword('')
      setPasswordMsg('Password updated. Existing sessions for this user were cleared.')
    } catch (err) {
      setPasswordError(
        err instanceof ApiError ? err.message : 'Failed to update password',
      )
    } finally {
      setPasswordSaving(false)
    }
  }

  return (
    <div className="analysis-page">
      <header className="analysis-top">
        <div className="analysis-top-left">
          <Link to="/" className="analysis-back">
            ← Library
          </Link>
          <h1>Reading analysis</h1>
          <p className="analysis-user-line">
            Signed in as <strong>{user?.username ?? '—'}</strong>
            {isAdmin ? ' · admin' : ''}
          </p>
        </div>
        <button type="button" className="analysis-logout" onClick={onLogout}>
          Log out
        </button>
      </header>

      <section className="analysis-panel">
        <h2 className="analysis-panel-title">Your progress</h2>
        {mineLoading && <p className="analysis-status">Loading…</p>}
        {mineError && <p className="analysis-error">{mineError}</p>}
        {!mineLoading && !mineError && mine && <AnalysisDashboard data={mine} />}
      </section>

      {isAdmin && (
        <section className="analysis-panel analysis-admin" data-report="admin">
          <h2 className="analysis-panel-title">Admin · users</h2>
          {usersLoading && <p className="analysis-status">Loading users…</p>}
          {usersError && <p className="analysis-error">{usersError}</p>}
          {!usersLoading && !usersError && (
            <table className="analysis-table analysis-users-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Progress</th>
                  <th>Last active</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => {
                  const active =
                    selectedUserId != null &&
                    String(selectedUserId) === String(item.id)
                  return (
                    <tr
                      key={String(item.id)}
                      className={active ? 'is-selected' : undefined}
                    >
                      <td>
                        <button
                          type="button"
                          className="analysis-user-btn"
                          onClick={() => setSelectedUserId(item.id)}
                        >
                          {item.username}
                        </button>
                      </td>
                      <td>{item.role}</td>
                      <td>
                        <AdminUserProgress
                          readPages={item.totals.readPages}
                          minutes={item.totals.focusedMinutes}
                        />
                      </td>
                      <td>{formatRelativeTime(item.totals.lastActiveAt)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}

          {selectedUser && (
            <div className="analysis-admin-detail">
              <div className="analysis-admin-detail-head">
                <h3>
                  Analysis · {selectedUser.username}
                </h3>
                <button
                  type="button"
                  className="analysis-clear-selection"
                  onClick={() => setSelectedUserId(null)}
                >
                  Clear
                </button>
              </div>

              {selectedLoading && (
                <p className="analysis-status">Loading user analysis…</p>
              )}
              {selectedError && (
                <p className="analysis-error">{selectedError}</p>
              )}
              {!selectedLoading && !selectedError && selectedAnalysis && (
                <AnalysisDashboard data={selectedAnalysis} />
              )}

              <form className="analysis-password-form" onSubmit={onPasswordSubmit}>
                <h4>Change password</h4>
                <label className="analysis-password-field">
                  <span>New password (min 8)</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                </label>
                {passwordError && (
                  <p className="analysis-error">{passwordError}</p>
                )}
                {passwordMsg && (
                  <p className="analysis-success">{passwordMsg}</p>
                )}
                <button
                  type="submit"
                  className="analysis-password-submit"
                  disabled={passwordSaving}
                >
                  {passwordSaving ? 'Saving…' : 'Update password'}
                </button>
              </form>
            </div>
          )}
        </section>
      )}
    </div>
  )
}

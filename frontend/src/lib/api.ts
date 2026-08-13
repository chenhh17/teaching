export function apiRoot() {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.endsWith('/') ? base : `${base}/`}api`
}

export class ApiError extends Error {
  status: number
  body: unknown

  constructor(status: number, message: string, body?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.body = body
  }
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const headers = new Headers(options.headers)

  if (
    options.body != null &&
    typeof options.body === 'string' &&
    !headers.has('Content-Type')
  ) {
    headers.set('Content-Type', 'application/json')
  }

  const res = await fetch(`${apiRoot()}${normalized}`, {
    ...options,
    credentials: 'include',
    headers,
  })

  return res
}

export async function apiJson<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await apiFetch(path, options)
  const text = await res.text()
  let data: unknown = null
  if (text) {
    try {
      data = JSON.parse(text) as unknown
    } catch {
      data = text
    }
  }

  if (!res.ok) {
    const message =
      typeof data === 'object' &&
      data &&
      'error' in data &&
      typeof (data as { error: unknown }).error === 'string'
        ? (data as { error: string }).error
        : typeof data === 'object' &&
            data &&
            'message' in data &&
            typeof (data as { message: unknown }).message === 'string'
          ? (data as { message: string }).message
          : `Request failed (${res.status})`
    throw new ApiError(res.status, message, data)
  }

  return data as T
}

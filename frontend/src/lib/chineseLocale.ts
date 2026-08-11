const CHINESE_KEY = 'courseShowChinese'

export function readShowChinese(): boolean {
  try {
    const raw = localStorage.getItem(CHINESE_KEY)
    if (raw === null) return false
    return raw === '1'
  } catch {
    return false
  }
}

export function saveShowChinese(show: boolean) {
  try {
    localStorage.setItem(CHINESE_KEY, show ? '1' : '0')
  } catch {
    return
  }
}

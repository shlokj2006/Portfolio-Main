import { useEffect, useLayoutEffect, useState } from 'react'
import { ThemeContext } from './themeContext.js'

const THEME_STORAGE_KEY = 'portfolio-theme'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readThemePreference() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return { theme: savedTheme, isManual: true }
    }
  } catch {
    // Storage can be unavailable in restricted browsing contexts.
  }

  const bootstrappedTheme = document.documentElement.dataset.theme
  return {
    theme: bootstrappedTheme === 'dark' || bootstrappedTheme === 'light'
      ? bootstrappedTheme
      : getSystemTheme(),
    isManual: false,
  }
}

function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(readThemePreference)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    function syncSystemTheme(event) {
      setPreference((current) => current.isManual
        ? current
        : { theme: event.matches ? 'dark' : 'light', isManual: false })
    }

    mediaQuery.addEventListener('change', syncSystemTheme)
    return () => mediaQuery.removeEventListener('change', syncSystemTheme)
  }, [])

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = preference.theme
    const themeColor = preference.theme === 'dark' ? '#08171C' : '#FFFEF1'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor)
  }, [preference.theme])

  function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') return

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Keep the current-session selection even if it cannot be persisted.
    }
    setPreference({ theme, isManual: true })
  }

  return (
    <ThemeContext.Provider value={{ theme: preference.theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

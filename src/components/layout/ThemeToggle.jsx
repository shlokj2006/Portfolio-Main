import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../theme/useTheme.js'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-switch${isDark ? ' theme-switch--dark' : ''}`}
      type="button"
      role="switch"
      aria-label="Dark theme"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="theme-switch__thumb" aria-hidden="true">
        <Sun className="theme-switch__sun" />
        <Moon className="theme-switch__moon" />
      </span>
    </button>
  )
}

export default ThemeToggle

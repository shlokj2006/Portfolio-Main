import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../app/navigationItems.js'
import { useCommandPalette } from './CommandPaletteContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { openPalette } = useCommandPalette()

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        if (document.querySelector('.command-palette[open]')) return
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-brand" to="/" aria-label="Shlok Jaiswal, home" onClick={() => setMenuOpen(false)}>
          <span className="site-brand__mark" aria-hidden="true">SJ</span>
          <span>Shlok Jaiswal</span>
        </NavLink>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' primary-navigation--open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationItems.filter(({ inPrimaryNavigation }) => inPrimaryNavigation).map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `primary-navigation__link${isActive ? ' primary-navigation__link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <button
            className="primary-navigation__search"
            type="button"
            onClick={() => {
              setMenuOpen(false)
              openPalette(menuButtonRef.current)
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="m16 16 5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span>Search pages</span>
          </button>
        </nav>

        <div className="site-header__controls">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className={`mobile-menu-button${menuOpen ? ' mobile-menu-button--open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="mobile-menu-button__icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

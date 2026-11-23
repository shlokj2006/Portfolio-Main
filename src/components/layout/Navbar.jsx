import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
  { to: '/resume', label: 'Resume' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
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
          {navigation.map(({ to, label, end }) => (
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

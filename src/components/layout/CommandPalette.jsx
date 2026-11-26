import { useEffect, useId, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navigationItems } from '../../app/navigationItems.js'
import { useCommandPalette } from './CommandPaletteContext.jsx'

const commands = [
  ...navigationItems.map((item) => ({
    id: item.to,
    label: item.label,
    description: item.to === '/resume' ? 'View and download the existing resume' : `Go to ${item.label}`,
    keywords: item.keywords,
    to: item.to,
    type: 'Page',
  })),
  { id: 'open-terminal', label: 'Open Developer Terminal', description: 'Show the interactive terminal in the homepage hero', keywords: 'terminal command console', type: 'Action' },
]

function CommandPalette() {
  const { isOpen, closePalette, openTerminal } = useCommandPalette()
  const dialogRef = useRef(null)
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const listboxId = useId()
  const navigate = useNavigate()
  const location = useLocation()

  const normalizedQuery = query.trim().toLowerCase()
  const results = commands.filter((command) =>
    `${command.label} ${command.description} ${command.keywords}`.toLowerCase().includes(normalizedQuery),
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) {
      dialog.showModal()
      setQuery('')
      setSelectedIndex(0)
      window.requestAnimationFrame(() => searchRef.current?.focus())
    }
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  function execute(command) {
    if (!command) return
    if (command.id === 'open-terminal') {
      openTerminal()
      if (location.pathname !== '/') navigate('/')
    } else {
      navigate(command.to)
    }
    closePalette()
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') event.stopPropagation()
    if (event.key === 'ArrowDown' && results.length) {
      event.preventDefault()
      setSelectedIndex((current) => (current + 1) % results.length)
    }
    if (event.key === 'ArrowUp' && results.length) {
      event.preventDefault()
      setSelectedIndex((current) => (current - 1 + results.length) % results.length)
    }
    if (event.key === 'Enter' && results.length) {
      event.preventDefault()
      execute(results[selectedIndex])
    }
  }

  return (
    <dialog
      className="command-palette"
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="command-palette-title"
      onClose={() => {
        if (isOpen) closePalette()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <section className="command-palette__panel">
        <header className="command-palette__header">
          <h2 id="command-palette-title">Navigate anywhere</h2>
          <button className="command-palette__close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close command palette">×</button>
        </header>
        <div className="command-palette__search-wrap">
          <svg className="command-palette__search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="m16 16 5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            aria-activedescendant={results[selectedIndex] ? `${listboxId}-${selectedIndex}` : undefined}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-expanded="true"
            autoComplete="off"
            className="command-palette__search"
            onChange={(event) => {
              setQuery(event.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages and actions…"
            ref={searchRef}
            role="combobox"
            value={query}
          />
        </div>
        <div className="command-palette__results" id={listboxId} role="listbox" aria-label="Pages and actions">
          {results.length ? results.map((command, index) => (
            <div
              aria-selected={index === selectedIndex}
              className={`command-palette__option${index === selectedIndex ? ' command-palette__option--selected' : ''}`}
              id={`${listboxId}-${index}`}
              key={command.id}
              onClick={() => execute(command)}
              onMouseEnter={() => setSelectedIndex(index)}
              role="option"
            >
              <span className="command-palette__option-copy">
                <strong>{command.label}</strong>
                <span>{command.description}</span>
              </span>
              <span className="command-palette__type">{command.type}</span>
            </div>
          )) : (
            <p className="command-palette__empty">No matching pages or actions. Try another search.</p>
          )}
        </div>
        <footer className="command-palette__footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
          <span><kbd>Enter</kbd> to select</span>
          <span><kbd>Esc</kbd> to close</span>
        </footer>
      </section>
    </dialog>
  )
}

export default CommandPalette

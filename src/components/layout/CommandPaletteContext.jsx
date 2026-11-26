import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const CommandPaletteContext = createContext(null)

export function CommandPaletteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openerRef = useRef(null)
  const terminalOpenerRef = useRef(null)
  const pendingTerminalOpen = useRef(false)

  const openPalette = useCallback((opener = document.activeElement) => {
    openerRef.current = opener === document.body ? null : opener
    setIsOpen(true)
  }, [])

  const closePalette = useCallback(() => {
    setIsOpen(false)
    window.requestAnimationFrame(() => {
      const opener = openerRef.current
      if (opener?.isConnected && !opener.disabled && opener.getClientRects().length) {
        opener.focus()
      } else {
        document.getElementById('main-content')?.focus()
      }
    })
  }, [])

  const registerTerminalOpener = useCallback((openTerminal) => {
    terminalOpenerRef.current = openTerminal
    if (pendingTerminalOpen.current) {
      pendingTerminalOpen.current = false
      openTerminal()
    }
    return () => {
      if (terminalOpenerRef.current === openTerminal) terminalOpenerRef.current = null
    }
  }, [])

  const openTerminal = useCallback(() => {
    if (terminalOpenerRef.current) terminalOpenerRef.current()
    else pendingTerminalOpen.current = true
  }, [])

  useEffect(() => {
    function handleShortcut(event) {
      if (isOpen || event.defaultPrevented || event.altKey || !(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') return
      const target = event.target
      if (target instanceof Element && target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]')) return
      event.preventDefault()
      openPalette(target instanceof HTMLElement ? target : document.activeElement)
    }

    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [isOpen, openPalette])

  return (
    <CommandPaletteContext.Provider value={{ isOpen, openPalette, closePalette, registerTerminalOpener, openTerminal }}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPalette() {
  const context = useContext(CommandPaletteContext)
  if (!context) throw new Error('useCommandPalette must be used within CommandPaletteProvider')
  return context
}

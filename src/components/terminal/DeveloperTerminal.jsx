import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { commandNames, terminalCommands } from './terminalCommands.js'
import { useCommandPalette } from '../layout/CommandPaletteContext.jsx'

function DeveloperTerminal() {
  const [isOpen, setIsOpen] = useState(true)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(0)
  const reopenRef = useRef(null)
  const terminalRef = useRef(null)
  const [output, setOutput] = useState([
    { id: 0, kind: 'message', text: 'Welcome. Type help to see available commands.' },
  ])
  const nextId = useRef(1)
  const { registerTerminalOpener } = useCommandPalette()

  const showTerminal = useCallback(() => {
    setIsOpen(true)
    window.requestAnimationFrame(() => {
      terminalRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'center',
      })
    })
  }, [])

  useEffect(() => registerTerminalOpener(showTerminal), [registerTerminalOpener, showTerminal])

  function append(item) {
    setOutput((current) => [...current, { id: nextId.current++, ...item }])
  }

  function closeTerminal() {
    setIsOpen(false)
    requestAnimationFrame(() => reopenRef.current?.focus())
  }

  function runCommand(event) {
    event.preventDefault()
    const rawCommand = input.trim()
    if (!rawCommand) return
    const command = rawCommand.toLowerCase()
    setHistory((current) => [...current, rawCommand])
    setHistoryIndex(history.length + 1)
    setInput('')

    if (command === 'clear') {
      setOutput([])
      return
    }
    if (command === 'exit') {
      closeTerminal()
      return
    }

    append({ kind: 'command', text: rawCommand })
    const handler = terminalCommands[command]
    if (!handler) {
      append({ kind: 'error', text: `Command not found: ${rawCommand}. Type help for available commands.` })
      return
    }

    const result = handler()
    result.lines.forEach((text) => append({ kind: 'message', text }))
    result.links?.forEach((link) => append({ kind: 'link', ...link }))
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()
      const direction = event.key === 'ArrowUp' ? -1 : 1
      const nextIndex = Math.max(0, Math.min(history.length, historyIndex + direction))
      setHistoryIndex(nextIndex)
      setInput(history[nextIndex] ?? '')
    }
    if (event.key === 'Tab') {
      event.preventDefault()
      const inputParts = input.split(/\s+/)
      const partial = inputParts.at(-1).toLowerCase()
      const match = commandNames.find((name) => name.startsWith(partial))
      if (match) {
        inputParts[inputParts.length - 1] = match
        setInput(inputParts.join(' '))
      }
    }
  }

  if (!isOpen) {
    return (
      <div ref={terminalRef} className="developer-terminal-reopen">
        <button ref={reopenRef} className="developer-terminal__reopen-button" type="button" onClick={() => setIsOpen(true)}>
          Open interactive terminal
        </button>
      </div>
    )
  }

  return (
    <section ref={terminalRef} className="developer-terminal" aria-label="Interactive developer terminal">
      <header className="developer-terminal__titlebar">
        <span className="developer-terminal__lights" aria-hidden="true"><i /><i /><i /></span>
        <span>shlok@portfolio: ~</span>
        <button className="developer-terminal__close" type="button" onClick={closeTerminal} aria-label="Close terminal">×</button>
      </header>
      <div className="developer-terminal__body">
        <div className="developer-terminal__output" aria-live="polite" aria-relevant="additions text">
          {output.map((item) => (
            <p className={`developer-terminal__line developer-terminal__line--${item.kind}`} key={item.id}>
              {item.kind === 'command' && <span aria-hidden="true">$ </span>}
              {item.kind === 'link' ? <Link to={item.to}>{item.label}</Link> : item.text}
            </p>
          ))}
        </div>
        <form className="developer-terminal__form" onSubmit={runCommand}>
          <label className="developer-terminal__prompt" htmlFor="terminal-command">$</label>
          <input
            autoComplete="off"
            id="terminal-command"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            value={input}
            aria-describedby="terminal-hint"
          />
          <button type="submit">Run</button>
        </form>
        <p className="developer-terminal__hint" id="terminal-hint">Tab completes commands · ↑/↓ browses command history</p>
      </div>
    </section>
  )
}

export default DeveloperTerminal

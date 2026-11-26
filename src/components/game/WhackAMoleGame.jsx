import { useEffect, useRef, useState } from 'react'
import MoleArt from './MoleArt.jsx'
import useGameAudio from './useGameAudio.js'
import useWhackAMole from './useWhackAMole.js'

function WhackAMoleGame({ isOpen, onClose }) {
  const dialogRef = useRef(null)
  const [announcement, setAnnouncement] = useState('Game ready. Select Start Game when you are ready.')
  const [hitFeedback, setHitFeedback] = useState(null)
  const feedbackTimeout = useRef(null)
  const lastAudioEventId = useRef(0)
  const game = useWhackAMole()
  const audio = useGameAudio(isOpen)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  useEffect(() => {
    if (!game.isPlaying && game.secondsLeft === 0) setAnnouncement(`Time is up. Final score: ${game.score}.`)
  }, [game.isPlaying, game.score, game.secondsLeft])

  useEffect(() => {
    if (game.isPlaying && [20, 10, 5].includes(game.secondsLeft)) {
      setAnnouncement(`${game.secondsLeft} seconds remaining.`)
    }
  }, [game.isPlaying, game.secondsLeft])

  useEffect(() => {
    const pendingEvents = game.events.filter((item) => item.id > lastAudioEventId.current)
    pendingEvents.forEach((item) => {
      lastAudioEventId.current = item.id
      if (isOpen && item.type !== 'start') audio.play(item.type)
    })
  }, [audio.play, game.events, isOpen])

  useEffect(() => () => window.clearTimeout(feedbackTimeout.current), [])

  function handleHit(index) {
    const result = game.hitMole(index)
    if (!result) return
    setAnnouncement(result.type === 'golden'
      ? `Golden mole! Five bonus points. Score: ${game.score + result.points}.`
      : `Nice hit! Score: ${game.score + result.points}.`)
    setHitFeedback(index)
    window.clearTimeout(feedbackTimeout.current)
    feedbackTimeout.current = window.setTimeout(() => setHitFeedback(null), 260)
  }

  async function startGame() {
    if (!await audio.activate()) return
    game.startGame()
    audio.play('start')
    setAnnouncement('Game started. Find the mole and activate its hole.')
  }

  function handleDialogClose() {
    audio.deactivate()
    game.stopGame()
    onClose()
  }

  return (
    <dialog
      className="whack-dialog"
      ref={dialogRef}
      aria-labelledby="whack-game-title"
      onClose={handleDialogClose}
    >
      <div className="whack-dialog__inner">
        <header className="whack-dialog__header">
          <div>
            <p className="whack-dialog__eyebrow">ARCADE / 01</p>
            <h2 id="whack-game-title">Whack-a-Mole</h2>
          </div>
          <button className="whack-dialog__close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close game">×</button>
        </header>

        <div className="whack-game__stats" aria-label="Game statistics">
          <p><span>TIME</span><strong>{game.secondsLeft}s</strong></p>
          <p><span>SCORE</span><strong>{game.score}</strong></p>
          <p><span>BEST</span><strong>{game.highScore}</strong></p>
        </div>

        <button
          aria-pressed={audio.isSoundOn}
          className="whack-game__sound-toggle"
          onClick={audio.toggleSound}
          type="button"
        >
          Sound: {audio.isSoundOn ? 'On' : 'Off'}
        </button>

        <div className="whack-game__board" role="group" aria-label="Mole game board">
          {Array.from({ length: 9 }, (_, index) => {
            const isActive = game.activeHole === index && game.isPlaying
            const isHit = hitFeedback === index
            return (
              <button
                aria-label={`Hole ${index + 1}${isActive ? game.activeMoleType === 'golden' ? ', golden mole, worth five points' : ', mole is up' : ''}`}
                aria-pressed={isActive}
                className={`whack-game__hole${isActive ? ' whack-game__hole--active' : ''}${isHit ? ' whack-game__hole--hit' : ''}`}
                disabled={!game.isPlaying}
                key={index}
                onPointerDown={() => handleHit(index)}
                onClick={() => handleHit(index)}
                type="button"
              >
                <span className="whack-game__hole-number" aria-hidden="true">{index + 1}</span>
                {isActive && <MoleArt variant={game.activeMoleType} />}
                {isHit && <MoleArt variant="happy" />}
              </button>
            )
          })}
        </div>

        <p className="whack-game__message" aria-live="polite">{announcement}</p>
        {!game.isPlaying && game.secondsLeft > 0 && (
          <button className="whack-game__action" type="button" onClick={startGame}>START GAME</button>
        )}
        {!game.isPlaying && game.secondsLeft === 0 && (
          <div className="whack-game__results">
            <p>Round complete! You scored <strong>{game.score}</strong>.</p>
            <button className="whack-game__action" type="button" onClick={startGame}>PLAY AGAIN</button>
          </div>
        )}
      </div>
    </dialog>
  )
}

export default WhackAMoleGame

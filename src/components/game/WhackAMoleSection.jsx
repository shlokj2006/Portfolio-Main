import { useRef, useState } from 'react'
import MoleArt from './MoleArt.jsx'
import WhackAMoleGame from './WhackAMoleGame.jsx'

function WhackAMoleSection() {
  const [isOpen, setIsOpen] = useState(false)
  const playButtonRef = useRef(null)

  function closeGame() {
    setIsOpen(false)
    window.requestAnimationFrame(() => playButtonRef.current?.focus())
  }

  return (
    <section className="whack-teaser" aria-labelledby="whack-teaser-title">
      <div className="whack-teaser__copy">
        <p className="whack-teaser__eyebrow">A tiny arcade break</p>
        <h2 id="whack-teaser-title">Need a break?</h2>
        <p>Take a break from scrolling. Let's test your reflexes!</p>
        <button ref={playButtonRef} className="whack-teaser__cta" type="button" onClick={() => setIsOpen(true)}>
          LET'S PLAY
        </button>
      </div>
      <div className="whack-teaser__preview" aria-hidden="true">
        <div className="whack-teaser__preview-top"><span>ARCADE / 01</span><span>★ ★ ★</span></div>
        <div className="whack-teaser__preview-board">
          {Array.from({ length: 9 }, (_, index) => (
            <span className="whack-teaser__preview-hole" key={index}>
              {index === 4 && <MoleArt />}
            </span>
          ))}
        </div>
      </div>
      <WhackAMoleGame isOpen={isOpen} onClose={closeGame} />
    </section>
  )
}

export default WhackAMoleSection

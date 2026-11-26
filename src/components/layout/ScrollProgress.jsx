import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollProgress() {
  const progressRef = useRef(null)
  const fillRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    let frameId = null
    const progressBar = progressRef.current
    const progressFill = fillRef.current
    if (!progressBar || !progressFill) return undefined

    function updateProgress() {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(() => {
        frameId = null
        const scrollRange = document.documentElement.scrollHeight - window.innerHeight

        if (scrollRange <= 0) {
          progressBar.hidden = true
          progressFill.style.transform = 'scaleX(0)'
          return
        }

        const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange))
        progressBar.hidden = false
        progressFill.style.transform = `scaleX(${progress})`
      })
    }

    const resizeObserver = new ResizeObserver(updateProgress)
    resizeObserver.observe(document.documentElement)
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      resizeObserver.disconnect()
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [pathname])

  return (
    <div className="scroll-progress" ref={progressRef} aria-hidden="true" hidden>
      <span className="scroll-progress__fill" ref={fillRef} />
    </div>
  )
}

export default ScrollProgress

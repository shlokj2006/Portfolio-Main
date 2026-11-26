import { useCallback, useEffect, useRef, useState } from 'react'

const SOUND_KEY = 'portfolio-whack-a-mole-sound'
const SOUND_NOTES = {
  start: { frequencies: [440, 660], duration: 0.12, wave: 'square' },
  hit: { frequencies: [740], duration: 0.09, wave: 'triangle' },
  goldenAppearance: { frequencies: [880, 1174], duration: 0.14, wave: 'sine' },
  goldenHit: { frequencies: [523, 784, 1046], duration: 0.2, wave: 'triangle' },
  miss: { frequencies: [180], duration: 0.16, wave: 'sawtooth' },
  gameOver: { frequencies: [392, 330, 262], duration: 0.18, wave: 'triangle' },
}

function readSoundPreference() {
  try {
    return window.localStorage.getItem(SOUND_KEY) === 'true'
  } catch {
    return false
  }
}

function useGameAudio(isOpen) {
  const [isSoundOn, setIsSoundOn] = useState(readSoundPreference)
  const contextRef = useRef(null)
  const activeRef = useRef(isOpen)

  useEffect(() => {
    activeRef.current = isOpen
    if (!isOpen) closeContext()
  }, [isOpen])

  const closeContext = useCallback(() => {
    const context = contextRef.current
    contextRef.current = null
    try {
      if (context && context.state !== 'closed') context.close().catch(() => {})
    } catch {
      // Closing audio is best-effort and must not affect gameplay.
    }
  }, [])

  const initializeContext = useCallback(async () => {
    try {
      const AudioContextConstructor = window.AudioContext || window.webkitAudioContext
      if (!AudioContextConstructor) return true
      if (!contextRef.current || contextRef.current.state === 'closed') {
        contextRef.current = new AudioContextConstructor()
      }
      if (contextRef.current.state === 'suspended') await contextRef.current.resume()
      if (!activeRef.current) {
        closeContext()
        return false
      }
      return true
    } catch {
      closeContext()
      return true
    }
  }, [closeContext])

  const activate = useCallback(() => {
    if (!activeRef.current) return Promise.resolve(false)
    if (!isSoundOn) return Promise.resolve(true)
    return initializeContext()
  }, [initializeContext, isSoundOn])

  const play = useCallback((soundName) => {
    if (!isSoundOn || !activeRef.current) return
    const context = contextRef.current
    const sound = SOUND_NOTES[soundName]
    if (!context || context.state !== 'running' || !sound) return

    try {
      const now = context.currentTime
      sound.frequencies.forEach((frequency, index) => {
        const startAt = now + index * 0.065
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        oscillator.type = sound.wave
        oscillator.frequency.setValueAtTime(frequency, startAt)
        gain.gain.setValueAtTime(0.0001, startAt)
        gain.gain.exponentialRampToValueAtTime(0.12, startAt + 0.012)
        gain.gain.exponentialRampToValueAtTime(0.0001, startAt + sound.duration)
        oscillator.connect(gain)
        gain.connect(context.destination)
        oscillator.start(startAt)
        oscillator.stop(startAt + sound.duration)
      })
    } catch {
      // Audio failures should never interrupt a round.
    }
  }, [isSoundOn])

  const toggleSound = useCallback(() => {
    const nextValue = !isSoundOn
    setIsSoundOn(nextValue)
    try {
      window.localStorage.setItem(SOUND_KEY, String(nextValue))
    } catch {
      // Keep the selected preference for this session.
    }
    if (nextValue && activeRef.current) initializeContext()
    else closeContext()
  }, [closeContext, initializeContext, isSoundOn])

  const deactivate = useCallback(() => {
    activeRef.current = false
    closeContext()
  }, [closeContext])

  return { isSoundOn, activate, play, toggleSound, closeContext, deactivate }
}

export default useGameAudio

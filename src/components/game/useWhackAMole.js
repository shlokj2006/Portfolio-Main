import { useEffect, useRef, useState } from 'react'

const HIGH_SCORE_KEY = 'portfolio-whack-a-mole-high-score'
const ROUND_SECONDS = 30

function readHighScore() {
  try {
    const storedScore = Number(window.localStorage.getItem(HIGH_SCORE_KEY))
    return Number.isFinite(storedScore) && storedScore > 0 ? storedScore : 0
  } catch {
    return 0
  }
}

function useWhackAMole() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(readHighScore)
  const [secondsLeft, setSecondsLeft] = useState(ROUND_SECONDS)
  const [activeHole, setActiveHole] = useState(null)
  const [activeMoleType, setActiveMoleType] = useState(null)
  const [appearance, setAppearance] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [events, setEvents] = useState([])
  const lastHitAppearance = useRef(-1)
  const goldenSpawned = useRef(false)
  const goldenSpawnAt = useRef(0)
  const activeMole = useRef(null)
  const nextEventId = useRef(0)
  const elapsedSeconds = useRef(0)
  const firstMolePending = useRef(true)
  const speedStage = Math.min(6, Math.floor(score / 3))
  const spawnInterval = Math.max(640, 1300 - speedStage * 110)

  function emit(type) {
    setEvents((current) => [...current, { id: ++nextEventId.current, type }].slice(-20))
  }

  useEffect(() => {
    if (!isPlaying) return undefined
    const timer = window.setInterval(() => {
      elapsedSeconds.current += 1
      setSecondsLeft((current) => Math.max(0, current - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [isPlaying])

  useEffect(() => {
    if (isPlaying && secondsLeft === 0) {
      setIsPlaying(false)
      setActiveHole(null)
      setActiveMoleType(null)
      activeMole.current = null
      emit('gameOver')
    }
  }, [isPlaying, secondsLeft])

  useEffect(() => {
    if (!isPlaying) return undefined
    const delay = firstMolePending.current ? 650 : spawnInterval
    const timeout = window.setTimeout(() => {
      const previousMole = activeMole.current
      if (previousMole && lastHitAppearance.current !== previousMole.appearance) emit('miss')

      const isGolden = !goldenSpawned.current && elapsedSeconds.current >= goldenSpawnAt.current
      const type = isGolden ? 'golden' : 'normal'
      if (isGolden) {
        goldenSpawned.current = true
        emit('goldenAppearance')
      }
      const nextAppearance = appearance + 1
      firstMolePending.current = false
      const hole = Math.floor(Math.random() * 9)
      const mole = { hole, type, appearance: nextAppearance }
      activeMole.current = mole
      setActiveHole(hole)
      setActiveMoleType(type)
      setAppearance(nextAppearance)
    }, delay)
    return () => window.clearTimeout(timeout)
  }, [appearance, isPlaying, spawnInterval])

  useEffect(() => {
    if (!isPlaying || activeMoleType !== 'golden' || activeHole === null) return undefined
    const currentAppearance = appearance
    const timeout = window.setTimeout(() => {
      if (lastHitAppearance.current === currentAppearance) return
      if (activeMole.current?.appearance !== currentAppearance) return
      activeMole.current = null
      setActiveHole(null)
      setActiveMoleType(null)
      emit('miss')
    }, 360)
    return () => window.clearTimeout(timeout)
  }, [activeHole, activeMoleType, appearance, isPlaying])

  function startGame() {
    setScore(0)
    setSecondsLeft(ROUND_SECONDS)
    setActiveHole(null)
    setActiveMoleType(null)
    setAppearance(0)
    elapsedSeconds.current = 0
    firstMolePending.current = true
    activeMole.current = null
    lastHitAppearance.current = -1
    goldenSpawned.current = false
    goldenSpawnAt.current = 5 + Math.floor(Math.random() * 19)
    setIsPlaying(true)
    emit('start')
  }

  function stopGame() {
    setIsPlaying(false)
    setActiveHole(null)
    setActiveMoleType(null)
    activeMole.current = null
  }

  function hitMole(hole) {
    const mole = activeMole.current
    if (!isPlaying || !mole || hole !== mole.hole || lastHitAppearance.current === mole.appearance) return null
    lastHitAppearance.current = mole.appearance
    activeMole.current = null
    setActiveHole(null)
    setActiveMoleType(null)
    const points = mole.type === 'golden' ? 5 : 1
    setScore((current) => {
      const nextScore = current + points
      setHighScore((best) => {
        if (nextScore <= best) return best
        try {
          window.localStorage.setItem(HIGH_SCORE_KEY, String(nextScore))
        } catch {
          // Keep scoring when browser storage is unavailable.
        }
        return nextScore
      })
      return nextScore
    })
    emit(mole.type === 'golden' ? 'goldenHit' : 'hit')
    return { type: mole.type, points }
  }

  return {
    score,
    highScore,
    secondsLeft,
    activeHole,
    activeMoleType,
    appearance,
    isPlaying,
    events,
    startGame,
    stopGame,
    hitMole,
  }
}

export default useWhackAMole

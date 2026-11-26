function MoleArt({ variant = 'normal' }) {
  const isGolden = variant === 'golden'
  const isHappy = variant === 'happy'
  const bodyColor = isGolden ? '#f4bd42' : '#f17869'
  const cheekColor = isGolden ? '#fff0cf' : '#ffc1a8'

  return (
    <svg className={`whack-mole-art whack-mole-art--${variant}`} viewBox="0 0 64 64" role="presentation" focusable="false" shapeRendering="crispEdges">
      {isGolden && (
        <g className="whack-mole-art__sparkles" fill="#f4bd42">
          <path d="M8 10h4v6h-4zM6 12h8v3H6zM49 4h4v6h-4zM47 6h8v3h-8zM51 27h4v6h-4zM49 29h8v3h-8z" />
        </g>
      )}
      <path d="M12 28 8 13l16 8M52 28l4-15-16 8" fill={bodyColor} stroke="#252b4a" strokeWidth="3" strokeLinejoin="round" />
      <path d="M11 60V40c0-15 9-24 21-24s21 9 21 24v20z" fill={bodyColor} stroke="#252b4a" strokeWidth="3" strokeLinejoin="round" />
      <path d="M20 36h5v7h-5zM39 36h5v7h-5z" fill="#252b4a" />
      <path d="M16 45h7v4h-7zM41 45h7v4h-7z" fill={cheekColor} />
      <path d="M28 46h8v6h-8z" fill="#252b4a" />
      {isHappy
        ? <path d="M26 53h4v3h4v-3h4v5H26z" fill="#fff0cf" />
        : <path d="M28 54h8v3h-8z" fill="#fff0cf" />}
      {isGolden && <path d="M27 12h10v3H27zM30 8h4v4h-4z" fill="#fff0cf" />}
    </svg>
  )
}

export default MoleArt

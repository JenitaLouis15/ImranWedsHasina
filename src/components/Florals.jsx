/* Corner floral spray: blush blossoms, buds and gold leaves (pure SVG) */

const PETAL = 'M0 0 C -15 -10 -16 -36 0 -46 C 16 -36 15 -10 0 0 Z'
const LEAF = 'M0 0 C 7 -11 28 -13 44 0 C 28 13 7 11 0 0 Z'

function Leaf({ x, y, r, s = 1, o = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} opacity={o}>
      <path d={LEAF} fill="url(#fl-leaf)" stroke="#b58a2e" strokeWidth=".6" />
      <path d="M2 0 L 38 0" stroke="#f6e7ac" strokeWidth=".7" opacity=".8" />
      <path d="M14 0 L 24 -5 M14 0 L 24 5 M24 0 L 32 -3.5 M24 0 L 32 3.5" stroke="#f6e7ac" strokeWidth=".45" opacity=".6" fill="none" />
    </g>
  )
}

function Flower({ x, y, s = 1, r = 0 }) {
  const outer = [0, 72, 144, 216, 288]
  const inner = [36, 108, 180, 252, 324]
  const stamens = [0, 40, 80, 120, 160, 200, 240, 280, 320]
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      {outer.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d={PETAL} fill="url(#fl-petal)" stroke="#dcb997" strokeWidth=".7" />
          <path d="M0 -4 L 0 -30" stroke="#e5b9a2" strokeWidth=".5" opacity=".7" />
        </g>
      ))}
      {inner.map((a) => (
        <g key={a} transform={`rotate(${a}) scale(.68)`}>
          <path d={PETAL} fill="url(#fl-petal-in)" stroke="#dcb997" strokeWidth=".7" />
          <path d="M0 -4 L 0 -30" stroke="#e0ab92" strokeWidth=".6" opacity=".7" />
        </g>
      ))}
      <circle r="9" fill="#e9b89c" opacity=".55" />
      {stamens.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d="M0 0 L 0 -13" stroke="#c99a35" strokeWidth=".6" />
          <circle cy="-14" r="1.5" fill="#D4AF37" />
        </g>
      ))}
      <circle r="4" fill="#D4AF37" stroke="#a97c22" strokeWidth=".6" />
    </g>
  )
}

function Bud({ x, y, r = 0, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 0 C -9 -6 -10 -22 0 -32 C 10 -22 9 -6 0 0 Z" fill="url(#fl-petal)" stroke="#d3ab8c" strokeWidth=".7" />
      <path d="M0 -3 C -3 -10 -3 -20 0 -27" stroke="#e5b9a2" strokeWidth=".6" fill="none" />
      <path d="M0 2 C -10 0 -13 -8 -12 -14 C -6 -10 -2 -5 0 2 Z" fill="url(#fl-leaf)" />
      <path d="M0 2 C 10 0 13 -8 12 -14 C 6 -10 2 -5 0 2 Z" fill="url(#fl-leaf)" />
    </g>
  )
}

function Berry({ x, y, r = 3 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="url(#fl-leaf)" stroke="#b58a2e" strokeWidth=".5" />
      <circle cx={x - r / 3} cy={y - r / 3} r={r / 3.2} fill="#fff6cf" opacity=".85" />
    </g>
  )
}

function Spray() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="fl-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e08e" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#a67a22" />
        </linearGradient>
        <radialGradient id="fl-petal" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#e6b39b" />
          <stop offset="45%" stopColor="#f7e0d2" />
          <stop offset="100%" stopColor="#fffaf4" />
        </radialGradient>
        <radialGradient id="fl-petal-in" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#d99a83" />
          <stop offset="60%" stopColor="#f3d3c2" />
          <stop offset="100%" stopColor="#fdf0e6" />
        </radialGradient>
      </defs>

      {/* stems */}
      <g fill="none" stroke="#b98d2f" strokeLinecap="round">
        <path d="M-15 24 C 60 30, 120 80, 195 195" strokeWidth="1.8" />
        <path d="M-15 96 C 40 104, 84 150, 104 262" strokeWidth="1.5" />
        <path d="M70 -15 C 92 34, 150 40, 248 30" strokeWidth="1.3" />
        <path d="M120 96 C 150 112, 170 140, 176 168" strokeWidth="1" />
      </g>

      {/* leaves along the stems */}
      <Leaf x={22} y={26} r={-38} s={1.05} />
      <Leaf x={48} y={40} r={42} s={1.1} />
      <Leaf x={150} y={110} r={-28} s={1.15} />
      <Leaf x={168} y={150} r={52} s={1.1} />
      <Leaf x={186} y={182} r={-20} s={1} />
      <Leaf x={8} y={102} r={40} s={1} o={0.9} />
      <Leaf x={40} y={134} r={-42} s={1.05} o={0.95} />
      <Leaf x={78} y={176} r={40} s={1.05} o={0.95} />
      <Leaf x={92} y={222} r={-38} s={1} o={0.9} />
      <Leaf x={100} y={12} r={-14} s={0.95} />
      <Leaf x={150} y={40} r={20} s={0.95} />
      <Leaf x={196} y={36} r={-16} s={0.9} />

      {/* blossoms */}
      <Flower x={112} y={92} s={1.02} r={8} />
      <Flower x={52} y={168} s={0.76} r={-14} />
      <Flower x={202} y={52} s={0.56} r={20} />

      {/* buds + berries */}
      <Bud x={198} y={206} r={160} s={0.95} />
      <Bud x={106} y={266} r={175} s={0.9} />
      <Bud x={250} y={32} r={95} s={0.8} />
      <Berry x={226} y={112} r={3.4} />
      <Berry x={236} y={124} r={2.6} />
      <Berry x={20} y={200} r={3.2} />
      <Berry x={30} y={214} r={2.4} />
    </svg>
  )
}

export default function Florals({ className = '', flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ transform: flip ? 'scale(-1,-1)' : undefined }}
    >
      <Spray />
    </div>
  )
}
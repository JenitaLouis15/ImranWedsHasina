import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '../lib/motion.js'

/*
  Every size inside a circle is measured from the circle's own width (cqw),
  so numbers and labels always stay inside the border on any screen.
*/
const NUM_SIZE = 'clamp(18px, 29cqw, 48px)'
const LABELS = {
  days: ['Days', 'Days'],
  hours: ['Hrs', 'Hours'],
  minutes: ['Mins', 'Minutes'],
  seconds: ['Secs', 'Seconds'],
}
const LABEL_SIZE = 'clamp(7px, 10cqw, 12px)'

function Tick({ value }) {
  const text = String(value).padStart(2, '0')
  return (
    <span className="relative block overflow-hidden" style={{ height: '1.1em' }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="block text-center font-display font-semibold tabular-nums text-espresso"
          style={{ lineHeight: '1.1em' }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function CountdownTimer({ targetDate }) {
  const calc = () => {
    const d = +new Date(targetDate) - +new Date()
    if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor((d / 3600000) % 24),
      minutes: Math.floor((d / 60000) % 60),
      seconds: Math.floor((d / 1000) % 60),
    }
  }
  const [t, setT] = useState(calc())
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 justify-items-center gap-1.5 min-[400px]:gap-2.5 sm:gap-6">
      {Object.entries(t).map(([label, value], i) => (
        <motion.div
          key={label}
          data-ring
          {...anim('flip', i * 0.14, 0.8)}
          style={{ transformPerspective: 700, containerType: 'inline-size' }}
          className="aspect-square w-full max-w-[9.5rem] rounded-full border-2 border-[#8b5a3c] sm:border-[3px] bg-white/90 shadow-[0_10px_30px_rgba(110,70,35,0.15)] ring-2 ring-[#8b5a3c]/10 sm:ring-4"
        >
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div style={{ fontSize: NUM_SIZE }}>
              <Tick value={value} />
            </div>
            <span
              data-label
              className="mt-[2cqw] block text-center uppercase text-mocha"
              style={{ fontSize: LABEL_SIZE, letterSpacing: '0.12em', paddingLeft: '0.12em', lineHeight: 1.2 }}
            >
              <span className="min-[400px]:hidden">{LABELS[label][0]}</span>
              <span className="hidden min-[400px]:inline">{LABELS[label][1]}</span>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { GOLD } from '../config/couple.js'

export default function GoldenHearts() {
  const items = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: i % 2 ? Math.random() * 6 + 90 : Math.random() * 6 + 1,
        size: Math.random() * 10 + 12,
        duration: Math.random() * 10 + 14,
        delay: Math.random() * 12,
        drift: (Math.random() - 0.5) * 30,
        opacity: Math.random() * 0.3 + 0.55,
      })),
    []
  )
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {items.map((p) => (
        <motion.svg
          key={p.id}
          viewBox="0 0 24 24"
          width={p.size}
          height={p.size}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: '-110vh',
            x: [0, p.drift, -p.drift / 2, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: `${p.left}%`, bottom: -30, willChange: 'transform, opacity' }}
        >
          <path
            d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.4 3 5 6.4 5c2 0 3.6 1.1 5.6 3.2C14 6.1 15.6 5 17.6 5 21 5 22.8 8.4 21.5 11.8 19.5 16.4 12 21 12 21z"
            fill="rgba(212,175,55,0.12)"
            stroke={GOLD}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
    </div>
  )
}

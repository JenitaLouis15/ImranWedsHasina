import { motion } from 'framer-motion'
import Divider from './Divider.jsx'
import { anim, stagger, popV, inView } from '../lib/motion.js'

export default function Person({ c, i }) {
  return (
    <motion.div
      {...anim(i === 0 ? 'left' : 'right', 0, 1)}
      className="rounded-3xl border border-gold/30 bg-white/90 px-5 py-8 text-center shadow-[0_20px_60px_rgba(90,60,20,0.07)] sm:px-8 sm:py-10"
    >
      <div className="relative mx-auto flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
        <motion.span
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-dashed border-gold/60"
        />
        <span className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border-2 border-gold/60 bg-[#fbf8f2] font-display text-3xl italic text-gold-deep sm:h-20 sm:w-20 sm:text-4xl">
          {c.initial}
        </span>
      </div>

      <p className="mt-4 font-script text-2xl text-gold-deep">{c.role}</p>
      <h3 className="mt-1 font-display text-4xl text-espresso sm:text-5xl">{c.name}</h3>
      <p className="mt-3 text-[11px] tracking-[0.12em] text-mocha uppercase">{c.family}</p>

      <div className="my-5">
        <Divider />
      </div>

      <p className="font-display text-base italic leading-relaxed text-espresso/75 sm:text-lg">{c.about}</p>

      <motion.div
        variants={stagger(0.15, 0.6)}
        {...inView}
        className="mt-5 flex flex-wrap justify-center gap-2"
      >
        {c.traits.map((tr) => (
          <motion.span
            key={tr}
            variants={popV}
            className="rounded-full border border-gold/40 bg-[#fbf8f2] px-3.5 py-1.5 text-[11px] tracking-[0.12em] text-mocha uppercase"
          >
            {tr}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

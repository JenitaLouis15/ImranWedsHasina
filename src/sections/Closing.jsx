import { motion } from 'framer-motion'
import { wedding } from '../data/wedding.js'
import { GROOM_NAME, BRIDE_NAME } from '../config/couple.js'
import { stagger, rise, popV } from '../lib/motion.js'

/* Background photo: public/closing.jpg */
const BG = '/closing.jpeg'

const d = new Date(wedding.dateIso || '2026-10-15T10:00:00')
const pad = (n) => String(n).padStart(2, '0')
const DATE_TEXT = `${pad(d.getDate())} · ${pad(d.getMonth() + 1)} · ${d.getFullYear()}`

export default function Closing() {
  return (
    <section id="thanks" className="relative z-2 bg-[#1f140b]">
      {/* ---------- Photo section ---------- */}
      <div className="relative flex min-h-[88svh] items-center justify-center overflow-hidden px-6 py-24 text-center">
        {/* background photo with slow zoom */}
        <motion.img
          aria-hidden="true"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '35% center' }}
          src={BG}
          loading="lazy"
        />
        {/* dark warm overlay so text is always readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#1f140b]/80 via-[#1f140b]/62 to-[#1f140b]/90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,20,11,0.5)_0%,transparent_70%)]"
        />
        {/* thin gold line on top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <motion.div
          variants={stagger(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 mx-auto max-w-2xl"
        >
          <motion.img
            variants={popV}
            src="/logo-light.png"
            alt=""
            className="mx-auto h-16 w-auto select-none sm:h-20"
            draggable="false"
          />

          <motion.p variants={rise} className="mt-12 font-display text-2xl italic text-gold sm:text-4xl">
            Thank You
          </motion.p>

          <motion.h2
            variants={rise}
            className="mt-4 font-display text-[2rem] leading-[1.18] text-ivory drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl"
          >
            We eagerly await your presence on our most cherished day.
          </motion.h2>

          <motion.div variants={popV} className="mx-auto mt-8 flex max-w-[12rem] items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
          </motion.div>

          <motion.p variants={rise} className="mt-6 font-arabic text-lg text-[#f0d77a] sm:text-2xl">
            شُكْرًا لَكُمْ عَلَى دَعْمِكُمْ وَحُضُورِكُمْ
          </motion.p>

        
        </motion.div>
      </div>

      {/* ---------- Footer band ---------- */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-gold/20 px-6 py-10 text-center"
      >
        <p className="font-display text-xl italic text-ivory/90 sm:text-2xl">
          With love from <span className="text-gold">{GROOM_NAME}</span>
          <span className="mx-1.5 font-script text-gold">&amp;</span>
          <span className="text-gold">{BRIDE_NAME}</span>
        </p>
        <p className="mt-3 text-[10px] tracking-[0.3em] text-ivory/60 uppercase">
          Nikkah <span className="mx-1 text-gold">♥</span> {DATE_TEXT}
        </p>
      </motion.footer>
    </section>
  )
}
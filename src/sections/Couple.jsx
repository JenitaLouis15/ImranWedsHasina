import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import Divider from '../components/Divider.jsx'
import { stagger, rise, popV, inView } from '../lib/motion.js'

/* gold shimmer text */
const GOLD_TEXT = {
  backgroundImage: 'linear-gradient(100deg,#9a6f1f 0%,#D4AF37 30%,#f6e08e 50%,#D4AF37 70%,#9a6f1f 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
}

export default function Couple() {
  return (
    <Section id="couple" label="Blessings" tone="b" className="py-12! sm:py-16!">
      <div className="mx-auto w-full max-w-xl sm:max-w-2xl">
        {/* Container with running golden border */}
        <div className="relative overflow-hidden rounded-3xl bg-gold/25 p-[2px]">
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="aspect-square w-[260%] shrink-0"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, transparent 62%, rgba(212,175,55,0.2) 72%, #D4AF37 88%, #fff3c4 94%, transparent 100%)',
              }}
            />
          </div>

          {/* Inner card */}
          <motion.div
            variants={stagger(0.15)}
            {...inView}
            className="relative rounded-[calc(1.5rem-2px)] bg-[#fdfaf4] px-5 py-9 text-center sm:px-10 sm:py-12"
          >
            <motion.p variants={rise} className="text-[10px] tracking-[0.35em] text-gold-deep uppercase sm:text-[11px]">
              The Invitation
            </motion.p>

            <motion.div variants={popV} className="mt-3">
              <Divider />
            </motion.div>

            <motion.h2
              variants={rise}
              className="mt-6 font-display text-[1.7rem] leading-[1.2] text-espresso sm:text-4xl md:text-[2.6rem]"
            >
              “Your presence will make our special day
              <motion.span
                className="block italic"
                style={GOLD_TEXT}
                animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                truly unforgettable.”
              </motion.span>
            </motion.h2>

            <motion.p
              variants={rise}
              className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-espresso/80 sm:text-base"
            >
              With the blessings of our beloved parents, we invite you to celebrate this sacred beginning.
            </motion.p>

            <motion.p variants={rise} className="mt-5 font-display text-base italic text-gold-deep sm:text-xl">
              We welcome you with all our hearts
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Section>  
  )
} 
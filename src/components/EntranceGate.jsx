import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from '../data/wedding.js'
import { GROOM_NAME, BRIDE_NAME } from '../config/couple.js'

const EASE = [0.22, 1, 0.36, 1]

/* 15 · 10 · 2026 */
const d = new Date(wedding.dateIso || '2026-10-15T10:00:00')
const pad = (n) => String(n).padStart(2, '0')
const DATE_TEXT = `${pad(d.getDate())} · ${pad(d.getMonth() + 1)} · ${d.getFullYear()}`

/* Curtain folds in the espresso / gold theme */
const CURTAIN_BG = `
  linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 100%),
  repeating-linear-gradient(90deg, #2b1c11 0px, #4b3421 26px, #6a4a2e 38px, #4b3421 50px, #2b1c11 76px)
`

function Curtain({ side }) {
  const left = side === 'left'

  return (
    <motion.div
      initial={{ x: 0 }}
      exit={{
        x: left ? '-102%' : '102%',
        transition: {
          duration: 1.5,
          ease: EASE,
        },
      }}
      className={`absolute top-0 h-full w-1/2 ${left ? 'left-0' : 'right-0'}`}
      style={{
        background: CURTAIN_BG,
        boxShadow: left
          ? '8px 0 30px rgba(0,0,0,0.45)'
          : '-8px 0 30px rgba(0,0,0,0.45)',
        willChange: 'transform',
      }}
    />
  )
}

function Seal({ onClick }) {
  return (
    <div className="absolute -bottom-10 left-1/2 z-20 -translate-x-1/2">
      {/* soft pulsing ring */}
      <motion.span
        aria-hidden="true"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        className="absolute inset-0 rounded-full border border-gold"
      />

      <motion.button
        type="button"
        onClick={onClick}
        aria-label="Open the invitation"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -3, 0] }}
        transition={{
          y: {
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full 
          xs:h-[5rem] xs:w-[5rem] 
          sm:h-24 sm:w-24"
        style={{
          background:
            'radial-gradient(circle at 32% 28%, #f0d77a 0%, #D4AF37 38%, #AA7D2D 72%, #7d5a1e 100%)',
          boxShadow:
            '0 14px 30px rgba(59,42,26,0.45), inset 0 2px 4px rgba(255,255,255,0.35), inset 0 -4px 8px rgba(80,50,10,0.45)',
          willChange: 'transform',
        }}
      >
        <span className="absolute inset-[6px] rounded-full border border-[#fbf6ec]/50" />

        <img
          src="/logo-light.png"
          alt=""
          className="relative w-[58%] select-none"
          draggable="false"
        />
      </motion.button>
    </div>
  )
}

export default function EntranceGate({ onOpen, opened, startMusic }) {
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  const open = () => {
    startMusic()
    onOpen()
  }

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              delay: 1.5,
              duration: 0.3,
            },
          }}
          className="fixed inset-0 z-[9999] overflow-hidden"
        >
          {/* dark backing, fades as soon as the curtains start to open */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            className="absolute inset-0 bg-[#1f140b]"
          />

          <Curtain side="left" />
          <Curtain side="right" />

          {/* gold rod on top */}
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                duration: 0.6,
              },
            }}
            className="absolute inset-x-0 top-0 z-10 h-2.5"
            style={{
              background:
                'linear-gradient(180deg,#f0d77a,#D4AF37 50%,#7d5a1e)',
            }}
          />

          {/* invitation card */}
          <div
            className="relative z-10 flex h-full min-h-0 items-center justify-center 
            px-3 pb-12 pt-6 
            xs:px-4 
            sm:px-10 sm:pb-14 sm:pt-8"
          >
            <motion.div
              /* Smooth initial entrance — only this animation was changed */
              initial={{
                opacity: 0,
                y: 12,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: -20,
                transition: {
                  duration: 0.6,
                  ease: 'easeIn',
                },
              }}
              transition={{
                duration: 1.4,
                ease: EASE,
              }}
              className="relative flex max-h-[calc(100dvh-3rem)] w-full max-w-[22rem] 
                flex-col items-center justify-center 
                overflow-visible 
                bg-[#fbf6ec] 
                px-4 pb-14 pt-7 
                text-center 
                shadow-[0_30px_80px_rgba(0,0,0,0.55)] 
                xs:px-5 xs:pb-15 xs:pt-8 
                sm:max-h-[calc(100%-2rem)] sm:max-w-md sm:px-10 sm:pb-16 sm:pt-10"
              style={{ minHeight: 'min(34rem, 100%)', willChange: 'transform, opacity' }}
            >
              {/* double gold frame */}
              <span className="pointer-events-none absolute inset-2.5 border border-gold/40" />

              <span className="pointer-events-none absolute inset-[14px] border border-gold/20" />

              <p
                lang="ar"
                dir="rtl"
                className="font-arabic text-lg leading-[1.7] text-gold-deep 
                  xs:text-xl 
                  sm:text-2xl sm:leading-[1.8]"
              >
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>

              <p
                className="mt-3 text-[9px] font-medium tracking-[0.24em] text-gold-deep uppercase 
                xs:mt-4 xs:text-[10px] xs:tracking-[0.28em] 
                sm:text-[11px]"
              >
                Together with our families
              </p>

              <motion.img
                src="/logo.png"
                alt="Imran and Hasina monogram"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: EASE,
                }}
                className="mt-4 h-16 w-auto select-none 
                  xs:mt-5 xs:h-20 
                  sm:h-24"
                draggable="false"
              />

              <h1
                className="mt-4 font-display text-[2.15rem] leading-[1.02] text-espresso 
                xs:mt-5 xs:text-[2.4rem] 
                sm:mt-6 sm:text-5xl"
              >
                {GROOM_NAME}

                <span
                  className="my-1 block font-script text-xl text-gold 
                  xs:text-2xl 
                  sm:text-3xl"
                >
                  &
                </span>

                {BRIDE_NAME}
              </h1>

              <p
                className="mt-4 text-[10px] tracking-[0.28em] text-mocha 
                xs:mt-5 xs:text-xs xs:tracking-[0.32em] 
                sm:mt-6 sm:text-sm"
              >
                {DATE_TEXT}
              </p>

              <p
                className="mt-3 text-[10px] font-medium tracking-[0.17em] text-espresso uppercase 
                xs:mt-4 xs:text-[11px] xs:tracking-[0.2em] 
                sm:text-xs"
              >
                we INVITE YOU
              </p>

              {wedding.venue.address && (
                <p
                  className="mt-1 max-w-[14rem] text-[8px] tracking-[0.15em] text-gold-deep uppercase 
                  xs:max-w-[16rem] xs:text-[9px] xs:tracking-[0.18em] 
                  sm:text-[10px]"
                >
                  To be a part of our beautiful journey
                </p>
              )}

              <motion.span
                aria-hidden="true"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mt-4 text-base leading-none text-mocha/70 
                  xs:mt-5 xs:text-lg"
              >
                ↓
              </motion.span>

              <p
                className="mt-1 text-[9px] font-medium tracking-[0.18em] text-mocha uppercase 
                xs:mt-2 xs:text-[10px] xs:tracking-[0.22em]"
              >
                Tap the seal to open
              </p>

              <Seal onClick={open} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
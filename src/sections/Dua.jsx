import { motion, useReducedMotion } from 'framer-motion'
import Section from '../components/Section.jsx'

/* One gentle easing used everywhere so the whole section feels calm and consistent */
const EASE = [0.22, 1, 0.36, 1]
const VIEW = { once: true, amount: 0.2 }

/* ---------- shared animation variants (all triggered by the one parent) ---------- */
const makeV = (reduce) => {
  const t = (delay, duration) => ({
    duration: reduce ? 0.01 : duration,
    delay: reduce ? 0 : delay,
    ease: EASE,
  })

  return {
    /* soft fade-up with a hint of blur (HTML elements only) */
    fade: (delay = 0, y = 14) => ({
      hidden: {
        opacity: 0,
        y: reduce ? 0 : y,
        filter: reduce ? 'blur(0px)' : 'blur(6px)',
      },
      show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: t(delay, 1.1),
      },
    }),

    /* thin line drawing outward from the centre */
    line: (delay = 0) => ({
      hidden: {
        scaleX: reduce ? 1 : 0,
        opacity: 0,
      },
      show: {
        scaleX: 1,
        opacity: 1,
        transition: t(delay, 1.2),
      },
    }),

    /* SVG stroke that draws itself */
    draw: (delay = 0, dur = 1.8) => ({
      hidden: {
        pathLength: reduce ? 1 : 0,
        opacity: 0,
      },
      show: {
        pathLength: 1,
        opacity: 1,
        transition: t(delay, dur),
      },
    }),

    /* leaf / sprig slides gently outward from the ring while fading in */
    grow: (delay = 0, y = 10) => ({
      hidden: {
        opacity: 0,
        y: reduce ? 0 : y,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: t(delay, 0.9),
      },
    }),
  }
}

/* ---------- wreath geometry ---------- */
const LEAF =
  'M0,-216 C-24,-230 -28,-254 0,-272 C28,-254 24,-230 0,-216 Z'

const LEAF_BIG =
  'M0,-216 C-30,-234 -34,-262 0,-280 C34,-262 30,-234 0,-216 Z'

const TINY =
  'M0,0 C-5,-3.5 -5,-13 0,-18 C5,-13 5,-3.5 0,0 Z'

const STEP = 22.5

function Sprig({ angle, V, delay }) {
  return (
    <g transform={`rotate(${angle})`}>
      <motion.g variants={V.grow(delay, 8)}>
        <path
          d="M0,-216 C-2,-232 2,-244 0,-256"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.1"
        />

        {[-228, -240, -250].map((h) => (
          <g key={h}>
            <path
              d={TINY}
              transform={`translate(0 ${h}) rotate(-42)`}
              fill="currentColor"
              fillOpacity="0.4"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="0.8"
            />

            <path
              d={TINY}
              transform={`translate(0 ${h}) rotate(42)`}
              fill="currentColor"
              fillOpacity="0.4"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="0.8"
            />
          </g>
        ))}

        <path
          d={TINY}
          transform="translate(0 -254)"
          fill="currentColor"
          fillOpacity="0.4"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="0.8"
        />
      </motion.g>
    </g>
  )
}

function Wreath({ V }) {
  return (
    <svg
      viewBox="-300 -300 600 600"
      className="absolute inset-0 h-full w-full text-gold-deep"
      fill="none"
      aria-hidden="true"
    >
      {/* double ring */}
      <motion.circle
        r="215"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        variants={V.draw(0.2, 2)}
      />

      <motion.circle
        r="207"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1"
        variants={V.draw(0.45, 2)}
      />

      {Array.from({ length: 16 }).map((_, i) => {
        const big = i % 4 === 0
        const delay = 0.7 + i * 0.07

        return (
          <g key={i}>
            {/* leaf */}
            <g transform={`rotate(${i * STEP})`}>
              <motion.g variants={V.grow(delay, 10)}>
                <path
                  d={big ? LEAF_BIG : LEAF}
                  fill="currentColor"
                  fillOpacity="0.13"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth="1.2"
                />

                <path
                  d={
                    big
                      ? 'M0,-222 L0,-252'
                      : 'M0,-222 L0,-246'
                  }
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </motion.g>
            </g>

            {/* sprig between this leaf and the next */}
            <Sprig
              angle={i * STEP + STEP / 2}
              V={V}
              delay={delay + 0.12}
            />
          </g>
        )
      })}

      {/* four small dots at the compass points */}
      {[0, 90, 180, 270].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <motion.circle
            cy="-293"
            r="2.8"
            fill="currentColor"
            fillOpacity="0.7"
            variants={V.grow(2, 0)}
          />
        </g>
      ))}
    </svg>
  )
}

/* line — diamond — line */
function Ornament({ V, delay, wide = '38cqw' }) {
  return (
    <motion.div
      variants={V.line(delay)}
      className="flex items-center justify-center gap-[1.6cqw]"
      style={{ width: wide }}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/80" />

      <span className="h-[1.2cqw] w-[1.2cqw] shrink-0 rotate-45 bg-gold" />

      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/80" />
    </motion.div>
  )
}

export default function Dua() {
  const reduce = useReducedMotion()
  const V = makeV(reduce)

  return (
    <Section
      id="dua"
      label="Du'a"
      tone="b"
      className="text-center"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={VIEW}
        className="relative mx-auto max-w-[640px] px-1 py-2"
      >

        {/* wreath container */}
        <div
          className="relative mx-auto mt-3 aspect-square w-full max-w-[760px] sm:mt-4"
          style={{ containerType: 'inline-size' }}
        >
          <Wreath V={V} />

          <div className="absolute inset-0 flex items-center justify-center">

            {/* Main text area */}
            <div className="flex w-[58%] flex-col items-center">

              {/* Arabic Dua */}
              <motion.p
                lang="ar"
                dir="rtl"
                variants={V.fade(1.2)}
                className="font-arabic text-gold-deep"
                style={{
                  fontSize: 'clamp(15px, 4.4cqw, 32px)',
                  lineHeight: 1.65,
                  fontWeight: 500,
                }}
              >
                <span className="block">
                  بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
                </span>

                <span className="block">
                  وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
                </span>
              </motion.p>

              {/* English meaning */}
              <motion.p
                variants={V.fade(1.8)}
                className="mt-[3.5cqw] w-full font-display italic text-espresso"
                style={{
                  fontSize: 'clamp(15px, 2.35cqw, 23px)',
                  lineHeight: 1.65,
                  fontWeight: 800,
                }}
              >
                &ldquo;May Allah bless you, and shower His blessings upon you,
                and join you together in goodness.&rdquo;
              </motion.p>

              {/* Bottom ornament */}
              <div className="mt-[4cqw]">
                <Ornament
                  V={V}
                  delay={2.2}
                  wide="26cqw"
                />
              </div>

              {/* Ameen */}
              <motion.div
                variants={V.fade(2.5, 8)}
                className="mt-[2.5cqw]"
              >
                <p
                  lang="ar"
                  className="font-arabic text-gold-deep"
                  style={{
                    fontSize: 'clamp(18px, 4.8cqw, 32px)',
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  آمين
                </p>

                <p
                  className="tracking-[0.3em] text-mocha"
                  style={{
                    fontSize: 'clamp(8px, 1.8cqw, 11px)',
                    fontWeight: 600,
                  }}
                >
                  AMEEN
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
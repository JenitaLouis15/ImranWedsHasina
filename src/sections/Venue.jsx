import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import Head from '../components/Head.jsx'
import Divider from '../components/Divider.jsx'
import { stagger, rise, popV } from '../lib/motion.js'
import { EVENTS, VERSE } from '../data/events.js'

const VIEW = { once: true, amount: 0.1 }

/* tiny gold line icons */
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)
const CAL = <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>
const CLOCK = <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>
const PIN = <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>

function Row({ icon, children }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <Icon d={icon} />
      <div>{children}</div>
    </div>
  )
}

function EventCard({ e }) {
  const hasInfo = e.date || e.time || e.venue || e.mapUrl
  const mapSrc = e.embedQuery
    ? `https://maps.google.com/maps?q=${encodeURIComponent(e.embedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    : ''

  return (
    <motion.article
      variants={rise}
      className="flex flex-col rounded-3xl border border-gold/30 bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(90,60,20,0.07)] sm:p-8"
    >
      <p className="text-[10px] tracking-[0.35em] text-gold-deep uppercase sm:text-[11px]">{e.tag}</p>
      <h3 className="mt-2 font-display text-3xl italic text-espresso sm:text-4xl">{e.title}</h3>
      <div className="mt-4">
        <Divider />
      </div>

      {hasInfo ? (
        <div className="mt-6 space-y-5">
          {e.date && (
            <Row icon={CAL}>
              <p className="font-display text-lg text-espresso sm:text-xl">{e.date}</p>
            </Row>
          )}
          {e.time && (
            <Row icon={CLOCK}>
              <p className="text-sm tracking-wide text-mocha">{e.time}</p>
            </Row>
          )}
          {e.venue && (
            <Row icon={PIN}>
              <p className="font-display text-lg leading-snug text-espresso sm:text-xl">{e.venue}</p>
              {e.address && <p className="mt-1 text-xs leading-relaxed text-mocha sm:text-[13px]">{e.address}</p>}
            </Row>
          )}
        </div>
      ) : (
        <p className="mt-8 font-display text-lg italic text-mocha/80">Date &amp; venue will be shared soon</p>
      )}

      {/* embedded map: tapping it opens Google Maps */}
      {mapSrc && (
        <div className="relative mt-7 overflow-hidden rounded-2xl border border-gold/30 shadow-sm">
          <iframe
            title={`${e.title} location map`}
            src={mapSrc}
            className="pointer-events-none block h-[200px] w-full border-0 sm:h-[240px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {e.mapUrl && (
            <a
              href={e.mapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${e.venue || e.title} in Google Maps`}
              className="absolute inset-0 z-10"
            />
          )}
        </div>
      )}

      {/* map link: always shown when a link exists */}
      {e.mapUrl &&
        (mapSrc ? (
          <a
            href={e.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 text-[11px] tracking-[0.12em] text-mocha/70 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-deep"
          >
            Tap the map to open in Google Maps
          </a>
        ) : (
          <a
            href={e.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-[11px] tracking-[0.2em] text-gold-deep uppercase transition-colors hover:bg-gold/10"
          >
            <Icon d={PIN} />
            View on Google Maps
          </a>
        ))}
    </motion.article>
  )
}

export default function Venue() {
  return (
    <Section id="venue" label="Venue" tone="b">
      <div className="mx-auto max-w-5xl">
        <Head script="With the blessings of Allah" title="Marriage & Reception" />

        {/* Islamic blessing */}
        <motion.div
          variants={stagger(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="mx-auto mt-10 max-w-2xl text-center sm:mt-12"
        >
          <motion.p
            variants={rise}
            lang="ar"
            dir="rtl"
            className="font-arabic text-xl leading-[2.1] text-gold-deep sm:text-3xl"
          >
            {VERSE.arabic}
          </motion.p>
          <motion.p
            variants={rise}
            className="mx-auto mt-4 max-w-xl font-display text-base italic leading-relaxed text-espresso/75 sm:text-xl"
          >
            “{VERSE.english}”
          </motion.p>
          <motion.p variants={rise} className="mt-3 text-[11px] tracking-[0.2em] text-mocha/70 uppercase">
            — {VERSE.ref}
          </motion.p>
          <motion.div variants={popV} className="mt-7">
            <Divider />
          </motion.div>
        </motion.div>

        {/* Events */}
        <motion.div
          variants={stagger(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-8"
        >
          {EVENTS.map((e) => (
            <EventCard key={e.key} e={e} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
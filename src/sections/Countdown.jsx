import { motion } from 'framer-motion' 
import Section from '../components/Section.jsx' 
import Divider from '../components/Divider.jsx' 
import CountdownTimer from '../components/CountdownTimer.jsx' 
import { Words } from '../components/Reveal.jsx' 
import { anim } from '../lib/motion.js' 
import { SCRIPT } from '../lib/styles.js' 
 
export default function Countdown({ target }) { 
  return ( 
    <Section id="countdown" label="Countdown" tone="a"> 
      <div className="mx-auto max-w-3xl text-center"> 
        <motion.p {...anim('track', 0, 1.2)} className={SCRIPT}> 
          Counting down to the sacred moment 
        </motion.p> 
        <Words text="Days Until Nikkah" className="mt-2 font-display text-3xl italic text-espresso sm:text-5xl" /> 
        <div className="my-7"> 
          <Divider /> 
        </div> 
        <CountdownTimer targetDate="2026-10-25T10:30:00" /> 
      </div> 
    </Section> 
  ) 
}
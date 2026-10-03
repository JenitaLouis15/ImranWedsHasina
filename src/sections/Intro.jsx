import { motion } from 'framer-motion'
import Divider from '../components/Divider.jsx'
import Florals from '../components/Florals.jsx'
import { stagger, rise, popV, inView } from '../lib/motion.js'
import { FAMILIES } from '../config/couple.js'

/* soft paper grain (no image file needed) */
const PAPER = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55  0 0 0 0 0.42  0 0 0 0 0.25  0 0 0 0.22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`
 
function Family({ role, son, data }) { 
  return ( 
    <motion.div variants={rise} className="mx-auto max-w-2xl"> 
      <p className="text-[11px] tracking-[0.3em] text-gold-deep uppercase sm:text-xs">{role}</p> 
      <h3 className="mt-4 font-display text-3xl leading-[1.1] text-espresso sm:text-6xl md:text-7xl"> 
        {data.fullName} 
      </h3> 
      <p className="mt-6 font-display text-lg italic text-mocha/70 sm:text-xl"> 
        {son ? 'Beloved son of' : 'Beloved daughter of'} 
      </p> 
      <p className="mt-3 text-sm tracking-wide text-espresso sm:text-base"> 
        {data.parents[0]} 
        <span className="mx-3 font-script text-2xl text-gold">&</span> 
        {data.parents[1]} 
      </p> 
    </motion.div> 
  ) 
} 
 
export default function Intro() { 
  return ( 
    <section 
      id="introduction" 
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,#fffaf0_0%,#f6eedd_70%)] px-5 pb-20 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-24" 
    > 
      {/* paper texture */} 
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: PAPER }} /> 
 
      {/* gold branches */} 
      <Florals className="-left-3 -top-3 h-32 w-32 sm:h-56 sm:w-56" /> 
      <Florals className="-bottom-3 -right-3 h-28 w-28 opacity-60 sm:h-44 sm:w-44" flip /> 
 
      <motion.div variants={stagger(0.16)} {...inView} className="relative z-10 mx-auto max-w-3xl"> 
        <motion.p variants={rise} className="text-[11px] tracking-[0.3em] text-gold-deep uppercase sm:text-xs"> 
          Two Families 
        </motion.p> 
 
        <motion.div variants={popV} className="mt-4"> 
          <Divider /> 
        </motion.div> 
 
        <motion.h2 
          variants={rise} 
          className="mt-6 font-display text-4xl leading-tight text-espresso sm:text-6xl md:text-7xl" 
        > 
          One Beautiful 
          <span className="block italic text-gold-deep">Beginning</span> 
        </motion.h2> 
 
        <motion.p 
          variants={rise} 
          className="mx-auto mt-6 max-w-md font-display text-lg italic leading-relaxed text-mocha sm:text-2xl" 
        > 
          With the love and blessings of our families, two lives become one beautiful journey. 
        </motion.p> 
 
        <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-24"> 
          <Family role="The Groom" son data={FAMILIES.groom} /> 
          <Family role="The Bride" data={FAMILIES.bride} /> 
        </div> 
      </motion.div> 
    </section> 
  ) 
}
import { motion } from 'framer-motion'
import { anim } from '../lib/motion.js'
import { SCRIPT, TITLE } from '../lib/styles.js'

export default function Head({ script, title, kind = 'down' }) {
  return (
    <motion.div {...anim(kind)} className="text-center">
      <p className={SCRIPT}>{script}</p>
      <h2 className={`mt-2 ${TITLE}`}>{title}</h2>
    </motion.div>
  )
}

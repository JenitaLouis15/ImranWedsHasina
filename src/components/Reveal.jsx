import { motion } from 'framer-motion'

export function Words({ text, className = '' }) {
  return (
    <h2 className={className}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em] inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </h2>
  )
}
export const EASE = [0.22, 1, 0.36, 1]
export const VP = { once: true, amount: 0.25 }

export const A = {
  up: [{ opacity: 0, y: 30 }, { opacity: 1, y: 0 }],
  down: [{ opacity: 0, y: -24 }, { opacity: 1, y: 0 }],
  left: [{ opacity: 0, x: -60 }, { opacity: 1, x: 0 }],
  right: [{ opacity: 0, x: 60 }, { opacity: 1, x: 0 }],
  zoom: [{ opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }],
  blur: [{ opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)' }],
  curtain: [{ opacity: 0, clipPath: 'inset(0 50% 0 50%)' }, { opacity: 1, clipPath: 'inset(0 0% 0 0%)' }],
  wipe: [{ clipPath: 'inset(50% 0 50% 0 round 16px)' }, { clipPath: 'inset(0% 0 0% 0 round 16px)' }],
  tilt: [{ opacity: 0, rotateX: 25, scale: 0.94 }, { opacity: 1, rotateX: 0, scale: 1 }],
  flip: [{ opacity: 0, rotateY: -90, scale: 0.7 }, { opacity: 1, rotateY: 0, scale: 1 }],
  track: [{ opacity: 0, letterSpacing: '0.3em' }, { opacity: 1, letterSpacing: '0.02em' }],
}

export const anim = (k, delay = 0, dur = 0.9) => ({
  initial: A[k][0],
  whileInView: A[k][1],
  viewport: VP,
  transition: { duration: dur, delay, ease: EASE },
})

export const pop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: VP,
  transition: { type: 'spring', stiffness: 140, damping: 10, delay },
})

export const stagger = (gap = 0.15, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export const popV = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 14 } },
}

export const inView = { initial: 'hidden', whileInView: 'show', viewport: VP }

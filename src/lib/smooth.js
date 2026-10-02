import Lenis from 'lenis'

export function initSmooth() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
  let id
  const raf = (t) => {
    lenis.raf(t)
    id = requestAnimationFrame(raf)
  }
  id = requestAnimationFrame(raf)
  return () => {
    cancelAnimationFrame(id)
    lenis.destroy()
  }
}
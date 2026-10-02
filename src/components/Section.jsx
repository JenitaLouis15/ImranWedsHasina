/* Section shell: clear separation between sections */
export default function Section({ id, label, tone = 'a', className = '', children }) {
  const bg = tone === 'a' ? 'bg-transparent' : 'bg-[#f5eddd]/70'
  return (
    <section id={id} className={`relative px-5 py-16 sm:px-8 sm:py-24 md:py-28 ${bg} ${className}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/30 bg-white/70 px-4 py-1 text-[10px] tracking-[0.3em] text-gold-deep uppercase">
        {label}
      </span>
      <div className="relative z-10 pt-4">{children}</div>
    </section>
  )
}

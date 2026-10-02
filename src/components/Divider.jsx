export default function Divider() {
  return (
    <div className="mx-auto flex w-full max-w-[220px] items-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-gold/50" />
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute h-2 w-2 rotate-45 border border-gold/70" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/20 to-gold/50" />
    </div>
  )
}

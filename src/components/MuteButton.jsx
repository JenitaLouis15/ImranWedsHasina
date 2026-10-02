export default function MuteButton({ isMuted, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      className="fixed bottom-6 right-5 z-10000 flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-ivory shadow-lg transition-transform active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 9v6h4l5 4V5L8 9H4z" />
        {isMuted ? (
          <>
            <path d="M17 9l4 6" />
            <path d="M21 9l-4 6" />
          </>
        ) : (
          <>
            <path d="M16.5 8.5a5 5 0 010 7" />
            <path d="M19 6a8.5 8.5 0 010 12" />
          </>
        )}
      </svg>
    </button>
  )
}
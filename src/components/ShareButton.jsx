export default function ShareButton() {
  const share = async () => {
    const data = {
      title: 'Nikkah Invitation',
      text: 'You are warmly invited to the Nikkah of Imran & Hasina.',
      url: window.location.href,
    }
    try {
      if (navigator.share) await navigator.share(data)
      else {
        await navigator.clipboard.writeText(data.url)
        alert('Link copied!')
      }
    } catch {
      /* cancelled */
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="block w-full rounded-full border border-gold/50 bg-white/80 px-7 py-3.5 text-center text-xs tracking-[0.18em] text-espresso uppercase transition-all hover:-translate-y-0.5 hover:bg-white sm:w-auto"
    >
      Share Invitation
    </button>
  )
}
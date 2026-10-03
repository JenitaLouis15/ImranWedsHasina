import { useState } from 'react'
import { wedding } from '../data/wedding.js'
import useMusic from '../hooks/useMusic.js'
import MuteButton from '../components/MuteButton.jsx'
import EntranceGate from '../components/EntranceGate.jsx'
import GoldenHearts from '../components/GoldenHearts.jsx'
import Intro from '../sections/Intro.jsx'
import Couple from '../sections/Couple.jsx'
import Countdown from '../sections/Countdown.jsx'
import Dua from '../sections/Dua.jsx'
import Venue from '../sections/Venue.jsx'
import Closing from '../sections/Closing.jsx'

export default function Home() {
  const { isMuted, startMusic, toggleMute } = useMusic()
  const [opened, setOpened] = useState(false)
  const [showHearts, setShowHearts] = useState(false)

  const handleOpen = () => {
    if (opened) return
    setOpened(true)
    setTimeout(() => setShowHearts(true), 1200)
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }))
  }

  const target = wedding.dateIso || '2026-10-25T10:00:00'

  return (
    <>
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
      <EntranceGate opened={opened} onOpen={handleOpen} startMusic={startMusic} />

      <div className="relative w-full overflow-hidden bg-[#fbf8f2] text-espresso">
        {showHearts && <GoldenHearts />}
        <Intro />
        <Couple />
        <Countdown target={target} />
        <Dua />
        <Venue />
        <Closing />
      </div>
    </>
  )
}
import { useRef, useState } from 'react'

export default function useMusic(src = '/music/wedding.mp3') {
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)

  const startMusic = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
    }
    try {
      audioRef.current.currentTime = 0
      await audioRef.current.play()
      setIsMuted(false)
    } catch (error) {
      console.error('Music error:', error)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !audioRef.current.muted
    setIsMuted(audioRef.current.muted)
  }

  return { isMuted, startMusic, toggleMute }
}

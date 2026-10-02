import { useEffect } from 'react'
import Backdrop from './components/Backdrop.jsx'
import Home from './pages/Home.jsx'
import { initSmooth } from './lib/smooth.js'

export default function App() {
  useEffect(() => {
    return initSmooth()
  }, [])

  return (
    <>
      <Backdrop />
      <div className="grain" aria-hidden="true" />
      <Home />
    </>
  )
}

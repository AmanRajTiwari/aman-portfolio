import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useLenis } from './hooks'
import { Navbar } from './layouts'
import { Hero, About, Work, Skills, Contact } from './sections'
import { AmbientBackground, CursorGlow } from './components/ui'
import { LoadingScreen } from './components/LoadingScreen'

// ─────────────────────────────────────────────
// App
// ─────────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true)

  // Smooth scroll via Lenis
  useLenis()

  // Dismiss loading screen after assets settle
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ── Fixed ambient layer ─────────────────── */}
      <AmbientBackground />

      {/* ── Cursor glow (desktop only) ──────────── */}
      <CursorGlow />

      {/* ── Loading screen ──────────────────────── */}
      <LoadingScreen isVisible={loading} />

      {/* ── Site shell ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Fixed navigation */}
        <Navbar />

        {/* Page content */}
        <main>
          <Hero />
          <About />
          <Work />
          <Skills />
          <Contact />
        </main>
      </motion.div>
    </>
  )
}

export default App

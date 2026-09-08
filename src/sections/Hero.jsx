/**
 * Hero — refined, cinematic, full-viewport section.
 *
 * Features:
 *  - Exact 100vh height, vertically centred
 *  - Staggered Framer Motion entrance (eyebrow → name → description → CTAs)
 *  - Subtle mouse-parallax on the content block
 *  - Soft radial ambient glow behind content
 *  - Premium CTA buttons with glow hover
 *  - Fixed scroll indicator at viewport bottom (no overlap)
 *  - Fully responsive: 1440 → 1024 → 768 → 390
 */
import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { owner } from '../data'

/* ── Animation variants ──────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1]

const eyebrowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}
const nameVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE, delay: 0.12 } },
}
const descVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.26 } },
}
const ctaVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: 0.42 } },
}
const scrollVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.72 } },
}

/* ── Hero ──────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef(null)

  /* Mouse parallax — raw values */
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  /* Smoothed spring output — very subtle parallax */
  const springConfig = { stiffness: 60, damping: 22, mass: 0.8 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  /* Clamp to +-12px max shift */
  const translateX = useTransform(x, [-1, 1], [-12, 12])
  const translateY = useTransform(y, [-1, 1], [-10, 10])

  /* Cursor-following glow position */
  const [glowPos, setGlowPos] = useState({ x: '50%', y: '40%' })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const handleMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const nx = (e.clientX - left) / width  // 0-1
      const ny = (e.clientY - top)  / height // 0-1
      rawX.set(nx * 2 - 1)  // -1 to 1
      rawY.set(ny * 2 - 1)

      /* Glow follows cursor within hero */
      setGlowPos({ x: `${nx * 100}%`, y: `${ny * 100}%` })
    }

    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [rawX, rawY])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section"
    >
      {/* Cursor-following radial glow */}
      <div
        aria-hidden="true"
        className="hero-cursor-glow"
        style={{
          left: glowPos.x,
          top:  glowPos.y,
        }}
      />

      {/* Soft radial ambient behind text */}
      <div aria-hidden="true" className="hero-ambient-glow" />

      {/* Main content — parallax wrapper */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="hero-content"
      >
        {/* Eyebrow */}
        <motion.p
          variants={eyebrowVariant}
          initial="hidden"
          animate="visible"
          className="hero-eyebrow"
        >
          <span className="hero-eyebrow-rule" aria-hidden="true" />
          <span>// FULL-STACK DEVELOPER &middot; MERN &middot; SAAS &middot; AI</span>
          <span className="hero-eyebrow-rule" aria-hidden="true" />
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className="hero-name"
        >
          {owner.name}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={descVariant}
          initial="hidden"
          animate="visible"
          className="hero-description"
        >
          {owner.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={ctaVariant}
          initial="hidden"
          animate="visible"
          className="hero-cta-row"
        >
          <a href="#projects" className="hero-btn-primary">
            <span>View My Work</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#contact" className="hero-btn-ghost">
            Let&apos;s Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator pinned to viewport bottom */}
      <motion.div
        variants={scrollVariant}
        initial="hidden"
        animate="visible"
        className="hero-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="hero-scroll-chevron"
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </motion.div>
        <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  )
}

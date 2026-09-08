/**
 * Navbar / site header
 *
 * Architecture:
 *  - Fixed full-width strip at z-50
 *  - Transparent at top → glass + border on scroll (smooth CSS transition)
 *  - IntersectionObserver drives active-section highlight
 *  - Desktop: logo · nav links · "Hire Me" CTA
 *  - Mobile: logo · hamburger → full-screen cinematic overlay
 *  - No external UI library — Framer Motion + Lucide only
 *
 * CSS lives in index.css under the "/* ── Navbar *\/" section
 * so this file stays logic-only.
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, owner } from '../data'

/* ── Scroll offset so fixed nav doesn't cover section tops ── */
const NAV_OFFSET = 80   // px — must match .navbar height

/* ── Smooth scroll helper ────────────────────────────────────*/
function scrollToSection(href, done) {
  const target = document.querySelector(href)
  if (!target) { done?.(); return }
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
  done?.()
}

/* ── Mobile-menu animation variants ─────────────────────────*/
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
}

const menuPanelVariants = {
  hidden:  { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
}

const menuItemVariants = {
  hidden:  { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, x: 12, transition: { duration: 0.15 } },
}

/* ────────────────────────────────────────────────────────────
   Navbar
   ────────────────────────────────────────────────────────────*/
export function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeSection,  setActiveSection]  = useState('hero')
  const mobileMenuRef                       = useRef(null)

  /* ── Scroll detection ──────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section via IntersectionObserver ───────────── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`,
        threshold: 0,
      },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* ── Lock body scroll when mobile menu is open ─────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* ── Close mobile menu on ESC ──────────────────────────── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* ── Close mobile menu on desktop resize ───────────────── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* ── Nav click handler ──────────────────────────────────── */
  const handleNavClick = useCallback((href) => {
    setMobileOpen(false)
    // Tiny delay lets menu close animation start first
    setTimeout(() => scrollToSection(href), mobileOpen ? 260 : 0)
  }, [mobileOpen])

  const handleLogoClick = useCallback((e) => {
    e.preventDefault()
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const isActive = (href) => activeSection === href.replace('#', '')

  return (
    <>
      {/* ════════════════════════════════════════
          Primary navigation bar
          ════════════════════════════════════════ */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="navbar"
        data-scrolled={scrolled}
        role="banner"
      >
        <div className="navbar-inner">

          {/* ── Logo ──────────────────────────── */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="navbar-logo"
            aria-label={`${owner.name} — back to top`}
          >
            {/* Monogram badge */}
            <span className="navbar-logo-badge" aria-hidden="true">
              <span className="navbar-logo-letter">A</span>
            </span>

            {/* Wordmark */}
            <span className="navbar-logo-text">
              ART
            </span>
          </a>

          {/* ── Desktop navigation ────────────── */}
          <nav
            className="navbar-desktop-nav"
            aria-label="Main navigation"
          >
            {nav.map(({ label, href }) => (
              <NavLink
                key={href}
                label={label}
                href={href}
                active={isActive(href)}
                onClick={() => handleNavClick(href)}
              />
            ))}

            {/* Hire Me CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="navbar-cta"
              aria-label="Hire Me — scroll to contact"
            >
              <span>Hire Me</span>
            </button>
          </nav>

          {/* ── Mobile hamburger ──────────────── */}
          <motion.button
            className="navbar-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.span>
                )
                : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90,  opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )
              }
            </AnimatePresence>
          </motion.button>

        </div>
      </motion.header>

      {/* ════════════════════════════════════════
          Mobile menu — full-screen overlay
          ════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mobile-menu-backdrop"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              key="mobile-panel"
              id="mobile-menu"
              ref={mobileMenuRef}
              variants={menuPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Panel header */}
              <div className="mobile-menu-header">
                <span className="navbar-logo-text" aria-hidden="true">ART</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="mobile-menu-close"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav items */}
              <nav
                className="mobile-menu-nav"
                aria-label="Mobile navigation"
              >
                {nav.map(({ label, href }, i) => (
                  <motion.button
                    key={href}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => handleNavClick(href)}
                    className={`mobile-menu-item ${isActive(href) ? 'mobile-menu-item--active' : ''}`}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {/* Index number */}
                    <span className="mobile-menu-index" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {label}
                    {/* Active dot */}
                    {isActive(href) && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="mobile-active-dot"
                        aria-hidden="true"
                      />
                    )}
                  </motion.button>
                ))}

                {/* Hire Me */}
                <motion.div
                  custom={nav.length}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mobile-menu-cta-wrap"
                >
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="mobile-menu-cta"
                  >
                    <span>Hire Me</span>
                  </button>
                </motion.div>
              </nav>

              {/* Subtle footer line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mobile-menu-footer"
              >
                {owner.name} · {new Date().getFullYear()}
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/* ────────────────────────────────────────────────────────────
   NavLink — desktop nav item with animated underline indicator
   ────────────────────────────────────────────────────────────*/
function NavLink({ label, href, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`navbar-link ${active ? 'navbar-link--active' : ''}`}
      aria-current={active ? 'page' : undefined}
    >
      {label}

      {/* Animated active indicator */}
      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="navbar-link-indicator"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          aria-hidden="true"
        />
      )}
    </button>
  )
}

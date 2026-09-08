/**
 * Footer.jsx — The final frame of the portfolio.
 *
 * Reuses existing data from site.js and contact.js.
 * Three-column layout: brand · navigation · social.
 * Bottom bar: copyright · attribution · back-to-top.
 * Collapses to stacked layout on mobile.
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUp, ArrowUpRight } from 'lucide-react'
import { owner, nav } from '../data/site'
import { contact } from '../data/contact'

/* ── Shared easing ───────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1]

/* ── Inline SVG icons (lucide-react lacks Github/Linkedin) ─ */
function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

/* ── Social links config — only render when data exists ──── */
function useSocialLinks() {
  return [
    contact.github && {
      name: 'GitHub',
      href: contact.github,
      icon: <GithubIcon size={15} />,
    },
    contact.linkedin && {
      name: 'LinkedIn',
      href: contact.linkedin,
      icon: <LinkedinIcon size={15} />,
    },
    contact.email && {
      name: 'Email',
      href: `mailto:${contact.email}`,
      icon: <Mail size={15} aria-hidden="true" />,
    },
  ].filter(Boolean)
}

/* ── Back to top handler ─────────────────────────────────── */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/* ── Footer ──────────────────────────────────────────────── */
export function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const socialLinks = useSocialLinks()

  return (
    <footer ref={ref} className="ft-footer" aria-label="Site footer">

      {/* ── Top border ── */}
      <div className="ft-border-top" aria-hidden="true" />

      <div className="ft-container">

        {/* ═══ Main Row: 3 columns ═══ */}
        <div className="ft-main">

          {/* Column 1 — Brand */}
          <motion.div
            className="ft-brand"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <a href="#" className="ft-logo" aria-label="Back to top">
              {owner.initials}
            </a>
            <p className="ft-desc">
              Full-Stack Developer building modern web experiences, SaaS products
              and AI-powered applications.
            </p>
          </motion.div>

          {/* Column 2 — Navigation */}
          <motion.nav
            className="ft-nav"
            aria-label="Footer navigation"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          >
            <span className="ft-col-label">Navigation</span>
            <ul className="ft-nav-list" role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="ft-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Column 3 — Social */}
          <motion.div
            className="ft-social"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
          >
            <span className="ft-col-label">Connect</span>
            <ul className="ft-social-list" role="list">
              {socialLinks.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.2 + i * 0.06 }}
                >
                  <a
                    href={item.href}
                    className="ft-social-link"
                    aria-label={item.name}
                    {...(item.href.startsWith('mailto')
                      ? {}
                      : { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <span className="ft-social-icon">{item.icon}</span>
                    <span>{item.name}</span>
                    <ArrowUpRight size={12} className="ft-social-arrow" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom divider ── */}
        <div className="ft-divider" aria-hidden="true" />

        {/* ═══ Bottom Row ═══ */}
        <motion.div
          className="ft-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
        >
          <span className="ft-copyright">
            &copy; {new Date().getFullYear()} {owner.name}
          </span>

          <span className="ft-built">
            Built with React &amp; passion.
          </span>

          <button
            type="button"
            className="ft-back-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="ft-back-top-arrow" aria-hidden="true" />
          </button>
        </motion.div>

      </div>
    </footer>
  )
}

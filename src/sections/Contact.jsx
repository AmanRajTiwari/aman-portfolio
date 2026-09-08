/**
 * Contact.jsx — Emotional and visual climax of the portfolio.
 *
 * Section ID: #contact
 * Features:
 *   - Section eyebrow (04 — CONTACT) + pulsing "OPEN TO OPPORTUNITIES" badge
 *   - Bold cinematic headline + large supporting statement
 *   - Editorial conversational copy
 *   - High-impact "Let's Talk" mailto CTA with directional arrow and glow
 *   - Refined social/professional links (GitHub, LinkedIn, Email) with external indicators
 *   - Ambient radial purple glow
 *   - Framer Motion entry animations ([0.22, 1, 0.36, 1])
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight, ArrowRight } from 'lucide-react'
import { contact } from '../data'

/* ── Shared cubic-bezier easing ──────────────────────────── */
const EASE = [0.22, 1, 0.36, 1]

/* ── Brand SVGs for GitHub & LinkedIn ─────────────────────── */
function GithubIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Contact() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  // Social links configuration with valid URLs only
  const socialLinks = [
    contact.email && {
      name: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail size={17} aria-hidden="true" />,
      external: false,
    },
    contact.github && {
      name: 'GitHub',
      value: contact.github.replace('https://github.com/', '@'),
      href: contact.github,
      icon: <GithubIcon size={17} />,
      external: true,
    },
    contact.linkedin && {
      name: 'LinkedIn',
      value: 'in/amanrajtiwari',
      href: contact.linkedin,
      icon: <LinkedinIcon size={17} />,
      external: true,
    },
  ].filter(Boolean)

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="ct-section"
      aria-labelledby="contact-heading"
    >
      {/* Subtle purple radial glow focused behind the headline & CTA */}
      <div className="ct-ambient" aria-hidden="true" />

      <div className="ct-container">

        {/* ── 1. Top Meta: Eyebrow + Availability Badge ── */}
        <motion.div
          className="ct-meta"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="ct-eyebrow-row">
            <span className="ct-eyebrow">{contact.eyebrow}</span>
            <span className="ct-eyebrow-rule" aria-hidden="true" />
          </div>

          {contact.status && (
            <div className="ct-status-badge" aria-label={`Status: ${contact.status}`}>
              <span className="ct-status-dot-wrap" aria-hidden="true">
                <span className="ct-status-dot-ping" />
                <span className="ct-status-dot" />
              </span>
              <span className="ct-status-text">{contact.status}</span>
            </div>
          )}
        </motion.div>

        {/* ── 2. Headline Group ── */}
        <div className="ct-headline-group">
          <motion.h2
            id="contact-heading"
            className="ct-headline"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
          >
            {contact.headline}
          </motion.h2>

          <motion.p
            className="ct-subheadline"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
          >
            {contact.subheadline}
          </motion.p>
        </div>

        {/* ── 3. Conversational Copy ── */}
        <motion.p
          className="ct-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
        >
          {contact.copy}
        </motion.p>

        {/* ── 4. Primary CTA Button ── */}
        {contact.email && (
          <motion.div
            className="ct-cta-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="ct-cta"
              aria-label={`${contact.ctaText} — send an email to ${contact.email}`}
            >
              <span className="ct-cta-glow" aria-hidden="true" />
              <span className="ct-cta-text">{contact.ctaText}</span>
              <span className="ct-cta-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </span>
            </a>
          </motion.div>
        )}

        {/* ── 5. Social & Professional Links ── */}
        {socialLinks.length > 0 && (
          <motion.div
            className="ct-links-wrap"
            role="list"
            aria-label="Social and professional links"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.52 }}
          >
            {socialLinks.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="ct-link-item"
                role="listitem"
                aria-label={item.name}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: EASE, delay: 0.55 + i * 0.08 }}
              >
                <span className="ct-link-icon">{item.icon}</span>
                <span className="ct-link-name">{item.name}</span>
                <span className="ct-link-arrow" aria-hidden="true">
                  <ArrowUpRight size={14} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}

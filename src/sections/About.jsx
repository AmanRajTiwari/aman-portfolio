/**
 * About — editorial introduction section.
 *
 * Layout:
 *  ┌─────────────────────────────────────────┐
 *  │  01 — ABOUT                             │  ← section label
 *  │                                         │
 *  │  "I build digital products              │  ← large headline
 *  │   that solve real problems."            │
 *  │                                         │
 *  │  [Left col: bio copy]  [Right col: tag] │  ← two-column body
 *  │                                         │
 *  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │  ← capability grid
 *  │  │  01  │ │  02  │ │  03  │ │  04  │  │
 *  │  └──────┘ └──────┘ └──────┘ └──────┘  │
 *  │                                         │
 *  │  "Curious by nature. Product-minded…"  │  ← personal statement
 *  └─────────────────────────────────────────┘
 *
 * Animations fire once when the section enters the viewport.
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { capabilities, statement } from '../data'

/* ── Shared easing ──────────────────────────────────────────*/
const EASE = [0.22, 1, 0.36, 1]

/* ── Reusable viewport-triggered wrapper ────────────────────*/
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ── Capability card ────────────────────────────────────────*/
function CapabilityCard({ index, title, sub, description, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className="about-cap-card"
      aria-label={`Capability: ${title}`}
    >
      {/* Index */}
      <span className="about-cap-index" aria-hidden="true">{index}</span>

      {/* Title row */}
      <h3 className="about-cap-title">{title}</h3>

      {/* Sub-label */}
      <p className="about-cap-sub">{sub}</p>

      {/* Description */}
      <p className="about-cap-desc">{description}</p>
    </motion.article>
  )
}

/* ── About section ──────────────────────────────────────────*/
export function About() {
  const sectionRef = useRef(null)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
      aria-label="About Aman Raj Tiwari"
    >
      {/* Ambient glow — sits behind all content */}
      <div className="about-ambient" aria-hidden="true" />

      <div className="about-container">

        {/* ── Section label ─────────────────────────────── */}
        <Reveal delay={0}>
          <header className="about-label-row">
            <span className="about-label" aria-label="Section 01 — About">
              01 — ABOUT
            </span>
            <span className="about-label-rule" aria-hidden="true" />
          </header>
        </Reveal>

        {/* ── Large headline ────────────────────────────── */}
        <Reveal delay={0.1}>
          <h2 className="about-headline">
            I build digital products<br />
            <em className="about-headline-em">that solve real problems.</em>
          </h2>
        </Reveal>

        {/* ── Two-column body ───────────────────────────── */}
        <div className="about-body-grid">

          {/* Left — Primary bio */}
          <Reveal delay={0.18} className="about-bio-left">
            <p className="about-bio-p">
              I&rsquo;m Aman Raj Tiwari, a Full-Stack Developer focused on building
              scalable web applications, SaaS products and AI-powered experiences.
              I enjoy turning ideas into clean, functional products — from frontend
              interfaces to backend systems and deployment.
            </p>
            <p className="about-bio-p about-bio-p--spaced">
              Fresh out of a Computer Science Engineering degree in 2026, I work
              primarily with the MERN stack and have been deeply interested in
              SaaS product architecture and AI-assisted development workflows.
              I like building things that actually work — complete, deployed and
              useful — not just demos.
            </p>
          </Reveal>

          {/* Right — Status / identity tags */}
          <Reveal delay={0.26} className="about-bio-right">
            <div className="about-meta-block">
              <div className="about-meta-item">
                <span className="about-meta-key">Status</span>
                <span className="about-meta-val about-meta-val--accent">
                  <span className="about-status-dot" aria-hidden="true" />
                  Open to opportunities
                </span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Focus</span>
                <span className="about-meta-val">MERN · SaaS · AI</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Base</span>
                <span className="about-meta-val">India</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-key">Education</span>
                <span className="about-meta-val">B.Tech CSE — 2026</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Capability grid ────────────────────────────── */}
        <div className="about-cap-grid" role="list" aria-label="Core capabilities">
          {capabilities.map((cap, i) => (
            <CapabilityCard
              key={cap.index}
              {...cap}
              delay={0.08 + i * 0.09}
            />
          ))}
        </div>

        {/* ── Personal statement ────────────────────────── */}
        <Reveal delay={0.1}>
          <blockquote className="about-statement" aria-label="Personal statement">
            <span className="about-statement-quote" aria-hidden="true">&ldquo;</span>
            {statement}
            <span className="about-statement-quote" aria-hidden="true">&rdquo;</span>
          </blockquote>
        </Reveal>

      </div>
    </section>
  )
}

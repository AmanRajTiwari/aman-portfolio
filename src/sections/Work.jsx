/**
 * Work — premium project showcase section.
 *
 * Layout (desktop):
 *   Project 01 (featured):  text left  / visual right  — large block
 *   Project 02:             visual left / text right
 *   Project 03:             text left  / visual right
 *
 * Visual placeholders: abstract CSS UI compositions — no fake stats,
 * no stock images, no fabricated screenshots.
 *
 * All copy comes from src/data/projects.js.
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import { projects } from '../data'

/* ── Shared easing ──────────────────────────────────────────*/
const EASE = [0.22, 1, 0.36, 1]

/* ── Viewport-triggered fade-up wrapper ─────────────────────*/
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ── Abstract project visual placeholder ────────────────────
   Creates an art-directed UI composition per project.
   No fake numbers, no fake charts, no stock images.
──────────────────────────────────────────────────────────── */
function ProjectVisual({ project, flip }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  /* Pick a unique visual pattern per project index */
  const patternMap = {
    'vorko':         <VorkoPattern />,
    'aqpulse':       <AQPulsePattern />,
    'day-foundation':<DayFoundationPattern />,
  }

  return (
    <motion.div
      ref={ref}
      className="work-visual-wrap"
      initial={{ opacity: 0, x: flip ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
    >
      <div
        className="work-visual"
        style={{ '--accent': project.accentColor }}
        aria-label={`${project.name} — abstract project preview`}
        role="img"
      >
        {/* Subtle project-specific ambient */}
        <div className="work-visual-ambient" />

        {/* Pattern */}
        <div className="work-visual-content">
          {patternMap[project.slug] ?? <DefaultPattern />}
        </div>

        {/* Corner label */}
        <span className="work-visual-label" aria-hidden="true">
          {project.name}
        </span>
      </div>
    </motion.div>
  )
}

/* ── VORKO — SaaS UI chrome pattern ────────────────────────*/
function VorkoPattern() {
  return (
    <div className="wvp-saas">
      {/* Top bar */}
      <div className="wvp-bar">
        <span className="wvp-dot" style={{ background: '#ef4444' }} />
        <span className="wvp-dot" style={{ background: '#f59e0b' }} />
        <span className="wvp-dot" style={{ background: '#22c55e' }} />
        <div className="wvp-bar-label">vorko.app</div>
      </div>
      {/* Sidebar + main */}
      <div className="wvp-body">
        <div className="wvp-sidebar">
          {[70, 55, 80, 45, 60].map((w, i) => (
            <div key={i} className="wvp-nav-item" style={{ width: `${w}%`, opacity: i === 1 ? 1 : 0.35, background: i === 1 ? 'rgba(99,102,241,0.5)' : undefined }} />
          ))}
        </div>
        <div className="wvp-main">
          {/* Header row */}
          <div className="wvp-row wvp-row--header">
            <div className="wvp-pill" style={{ width: '40%' }} />
            <div className="wvp-pill wvp-pill--accent" style={{ width: '22%' }} />
          </div>
          {/* Cards */}
          <div className="wvp-cards">
            {[0,1,2].map(i => (
              <div key={i} className="wvp-card" style={{ opacity: 1 - i * 0.15 }}>
                <div className="wvp-card-top" />
                <div className="wvp-card-line" style={{ width: '75%' }} />
                <div className="wvp-card-line" style={{ width: '50%' }} />
              </div>
            ))}
          </div>
          {/* Table rows */}
          {[90, 65, 80, 55].map((w, i) => (
            <div key={i} className="wvp-table-row" style={{ opacity: 0.5 + i * 0.1 }}>
              <div className="wvp-table-cell" style={{ width: `${w}%` }} />
              <div className="wvp-table-cell" style={{ width: '20%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── AQPulse — IoT dashboard / chart pattern ───────────────*/
function AQPulsePattern() {
  const points = [42, 58, 38, 72, 55, 80, 45, 65, 50, 70, 38, 60]
  const h = 80
  const w = 280
  const pts = points.map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / 100) * h}`).join(' ')
  const area = `M0,${h} L${pts.split(' ').map((_, i, a) => i === 0 ? a[i] : a[i]).join(' L')} L${w},${h} Z`.replace('M0,80 L', 'M')

  return (
    <div className="wvp-iot">
      {/* Status bar */}
      <div className="wvp-iot-header">
        <span className="wvp-iot-live">
          <span className="wvp-live-dot" />LIVE
        </span>
        <span className="wvp-iot-title">AQPulse Monitor</span>
      </div>
      {/* Metric pills */}
      <div className="wvp-iot-metrics">
        {['AQI', 'PM2.5', 'CO₂', 'Temp'].map((label, i) => (
          <div key={label} className="wvp-metric-pill">
            <span className="wvp-metric-label">{label}</span>
            <span className="wvp-metric-bar" style={{ width: `${40 + i * 15}%` }} />
          </div>
        ))}
      </div>
      {/* SVG line chart */}
      <div className="wvp-iot-chart">
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="wvp-svg">
          {/* Area fill */}
          <defs>
            <linearGradient id="aqGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(6,182,212,0.35)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
            </linearGradient>
          </defs>
          <polyline
            points={pts}
            fill="none"
            stroke="rgba(6,182,212,0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ── Day Foundation — web/editorial pattern ─────────────────*/
function DayFoundationPattern() {
  return (
    <div className="wvp-web">
      {/* Nav bar */}
      <div className="wvp-web-nav">
        <div className="wvp-web-logo" />
        <div className="wvp-web-links">
          {[55, 45, 60, 40].map((w, i) => <div key={i} className="wvp-web-link" style={{ width: `${w}%`, opacity: i === 2 ? 0.85 : 0.35 }} />)}
        </div>
      </div>
      {/* Hero area */}
      <div className="wvp-web-hero">
        <div className="wvp-web-h1" />
        <div className="wvp-web-h2" style={{ width: '65%' }} />
        <div className="wvp-web-h2" style={{ width: '45%' }} />
        <div className="wvp-web-btn" />
      </div>
      {/* Cards row */}
      <div className="wvp-web-cards">
        {[0,1,2].map(i => (
          <div key={i} className="wvp-web-card">
            <div className="wvp-web-card-icon" />
            <div className="wvp-web-card-line" style={{ width: '70%' }} />
            <div className="wvp-web-card-line" style={{ width: '50%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function DefaultPattern() {
  return <div className="wvp-default" />
}

/* ── Project info block ─────────────────────────────────────*/
function ProjectInfo({ project, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="work-info"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {/* Number + category */}
      <div className="work-eyebrow">
        <span className="work-number">{project.number}</span>
        <span className="work-category">{project.category}</span>
        {project.featured && (
          <span className="work-featured-badge" aria-label="Featured project">
            FEATURED
          </span>
        )}
      </div>

      {/* Project name */}
      <h3 className="work-name">{project.name}</h3>

      {/* Tagline */}
      <p className="work-tagline">{project.tagline}</p>

      {/* Description */}
      <p className="work-description">{project.description}</p>

      {/* Tech stack tags */}
      <div className="work-tech-row" aria-label="Technologies used">
        {project.tech.map((t) => (
          <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.65rem' }}>
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="work-actions">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="work-btn-primary"
            aria-label={`View ${project.name} live`}
          >
            <ArrowUpRight size={15} aria-hidden="true" />
            <span>View Live</span>
          </a>
        ) : (
          <span className="work-btn-unavailable" aria-label="Live link coming soon">
            <ArrowUpRight size={15} aria-hidden="true" />
            <span>Coming Soon</span>
          </span>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="work-btn-ghost"
            aria-label={`View ${project.name} on GitHub`}
          >
            <GitBranch size={15} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        )}
      </div>

      {/* Year */}
      <span className="work-year" aria-label={`Year: ${project.year}`}>
        {project.year}
      </span>
    </motion.div>
  )
}

/* ── Single project row ─────────────────────────────────────*/
function ProjectRow({ project, index }) {
  /* Alternate: even index → text-left / visual-right
                odd index  → visual-left / text-right  */
  const flip = index % 2 === 1

  return (
    <article
      className={`work-row ${flip ? 'work-row--flip' : ''} ${project.featured ? 'work-row--featured' : ''}`}
      aria-label={`Project: ${project.name}`}
    >
      {/* Divider line above (except first) */}
      {index > 0 && <div className="work-divider" aria-hidden="true" />}

      <div className="work-row-inner">
        {/* On desktop: text comes first unless flipped */}
        <ProjectInfo project={project} delay={0.05} />
        <ProjectVisual project={project} flip={flip} />
      </div>
    </article>
  )
}

/* ── Work section ───────────────────────────────────────────*/
export function Work() {
  return (
    <section
      id="work"
      className="work-section"
      aria-labelledby="work-heading"
    >
      {/* Subtle ambient glow — bottom-left to balance About's top-right */}
      <div className="work-ambient" aria-hidden="true" />

      <div className="work-container">

        {/* ── Section header ──────────────────────────── */}
        <header className="work-header">
          <Reveal delay={0}>
            <div className="work-label-row">
              <span className="work-label">02 — WORK</span>
              <span className="work-label-rule" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 id="work-heading" className="work-headline">
              Things I&apos;ve built.
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="work-subhead">
              Selected projects where product thinking meets engineering.
            </p>
          </Reveal>
        </header>

        {/* ── Project list ─────────────────────────────── */}
        <div className="work-list" role="list" aria-label="Projects">
          {projects.map((project, i) => (
            <div key={project.id} role="listitem">
              <ProjectRow project={project} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

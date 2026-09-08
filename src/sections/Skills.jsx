/**
 * Skills — editorial technical capabilities section.
 *
 * Desktop layout:
 *   Left  (sticky intro):  03 — SKILLS heading + intro + MERN sequence
 *   Right (scrollable):    five stacked category blocks
 *
 * Collapses to single-column at ≤768px.
 * AI category gets a distinct editorial treatment.
 * No fake percentages, no fake expertise levels.
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { categories, mernStack } from '../data'

/* ── Shared easing — matches Hero / About / Work ────────────*/
const EASE = [0.22, 1, 0.36, 1]

/* ── Reusable reveal wrapper ─────────────────────────────── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ── Single skill tag ────────────────────────────────────── */
function SkillTag({ label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.span
      ref={ref}
      className="sk-tag"
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: EASE, delay }}
      aria-label={label}
    >
      {label}
    </motion.span>
  )
}

/* ── Skill category block ────────────────────────────────── */
function CategoryBlock({ cat, blockDelay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  if (cat.isAI) {
    /* ── AI category: distinct editorial treatment ─────────*/
    return (
      <motion.div
        ref={ref}
        className="sk-cat sk-cat--ai"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: blockDelay }}
        aria-label={`Category: ${cat.title}`}
      >
        <div className="sk-cat-eyebrow">
          <span className="sk-cat-index">{cat.index}</span>
          <span className="sk-cat-rule" aria-hidden="true" />
        </div>

        <h3 className="sk-cat-title sk-cat-title--ai">{cat.description}</h3>

        <p className="sk-cat-ai-copy">{cat.aiCopy}</p>

        <div className="sk-tag-row" role="list" aria-label="AI development skills">
          {cat.skills.map((s, i) => (
            <SkillTag key={s} label={s} delay={blockDelay + 0.06 + i * 0.05} />
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className="sk-cat"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: blockDelay }}
      aria-label={`Category: ${cat.title}`}
    >
      <div className="sk-cat-eyebrow">
        <span className="sk-cat-index">{cat.index}</span>
        <span className="sk-cat-rule" aria-hidden="true" />
      </div>

      <div className="sk-cat-header">
        <h3 className="sk-cat-title">{cat.title.toUpperCase()}</h3>
        <p className="sk-cat-desc">{cat.description}</p>
      </div>

      <div className="sk-tag-row" role="list" aria-label={`${cat.title} skills`}>
        {cat.skills.map((s, i) => (
          <SkillTag key={s} label={s} delay={blockDelay + 0.05 + i * 0.045} />
        ))}
      </div>
    </motion.div>
  )
}

/* ── MERN connected sequence ─────────────────────────────── */
function MernSequence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className="sk-mern"
      role="list"
      aria-label="Primary stack: MERN"
    >
      <p className="sk-mern-label">Primary Stack</p>

      <div className="sk-mern-track">
        {mernStack.map((item, i) => (
          <div key={item.letter} className="sk-mern-item-wrap" role="listitem">
            <motion.div
              className="sk-mern-item"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.1 }}
            >
              <span className="sk-mern-letter" aria-hidden="true">{item.letter}</span>
              <span className="sk-mern-name">{item.label}</span>
              <span className="sk-mern-role">{item.role}</span>
            </motion.div>

            {/* Connector arrow between items */}
            {i < mernStack.length - 1 && (
              <motion.span
                className="sk-mern-arrow"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, ease: EASE, delay: 0.22 + i * 0.1 }}
                aria-hidden="true"
              >
                →
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Skills section ──────────────────────────────────────── */
export function Skills() {
  return (
    <section
      id="skills"
      className="sk-section"
      aria-labelledby="skills-heading"
    >
      {/* Ambient glow — top-right to alternate from Work's bottom-left */}
      <div className="sk-ambient" aria-hidden="true" />

      <div className="sk-container">

        {/* ═══ Left column — sticky intro ═══════════════════*/}
        <div className="sk-left">
          <div className="sk-left-inner">

            <Reveal delay={0}>
              <div className="sk-label-row">
                <span className="sk-label">03 — SKILLS</span>
                <span className="sk-label-rule" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 id="skills-heading" className="sk-headline">
                Tools I use to turn ideas into&nbsp;products.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="sk-intro">
                From interfaces and APIs to databases, cloud infrastructure
                and AI-assisted development.
              </p>
            </Reveal>

            {/* MERN sequence */}
            <Reveal delay={0.3}>
              <MernSequence />
            </Reveal>

          </div>
        </div>

        {/* ═══ Right column — skill categories ══════════════*/}
        <div className="sk-right" role="list" aria-label="Skill categories">
          {categories.map((cat, i) => (
            <div key={cat.id} role="listitem">
              <CategoryBlock
                cat={cat}
                blockDelay={0.05 + i * 0.08}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'

const roles = ['Full Stack Developer', 'AI/ML Engineer', 'Product Builder', 'Open Source Contributor']

function TypewriterText({ texts }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId

    const type = () => {
      const currentText = texts[textIndex]
      if (!ref.current) return

      if (!isDeleting) {
        ref.current.textContent = currentText.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === currentText.length) {
          isDeleting = true
          timeoutId = setTimeout(type, 2000)
          return
        }
      } else {
        ref.current.textContent = currentText.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length
        }
      }
      timeoutId = setTimeout(type, isDeleting ? 40 : 70)
    }

    timeoutId = setTimeout(type, 1000)
    return () => clearTimeout(timeoutId)
  }, [texts])

  return (
    <span ref={ref} />
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollToAbout = () => {
    const el = document.querySelector('#about')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // GSAP staggered word animation
  const headingRef = useRef(null)
  useEffect(() => {
    if (!headingRef.current) return
    const words = headingRef.current.querySelectorAll('.word')
    gsap.fromTo(words,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
        delay: 2.4,
      }
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 2.6 } },
  }
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial gradient focal point */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute animate-float"
        style={{ top: '20%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <motion.div
        className="absolute animate-float-delayed"
        style={{ bottom: '20%', right: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <motion.div
        className="absolute animate-float"
        style={{ top: '60%', left: '60%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)', filter: 'blur(30px)', animationDelay: '3s' }}
      />

      {/* Decorative corner brackets */}
      {[
        { style: { top: 96, left: 32 }, border: 'borderTop borderLeft' },
        { style: { top: 96, right: 32 }, border: 'borderTop borderRight' },
      ].map((item, i) => (
        <div key={i} className="absolute hidden lg:block opacity-20" style={item.style}>
          <div style={{ width: 32, height: 32, borderTop: '1px solid #6366f1', [i === 0 ? 'borderLeft' : 'borderRight']: '1px solid #6366f1' }} />
        </div>
      ))}

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Status badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass gradient-border">
            <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.1em' }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        {/* Main heading — GSAP split text */}
        <div ref={headingRef} className="text-display mb-6 overflow-hidden" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <div className="overflow-hidden">
            <span className="word inline-block gradient-text">Building</span>
            {' '}
            <span className="word inline-block gradient-text">the</span>
          </div>
          <div className="overflow-hidden">
            <span className="word inline-block" style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Future</span>
            {' '}
            <span className="word inline-block gradient-text">with</span>
          </div>
          <div className="overflow-hidden">
            <span className="word inline-block gradient-text">Code</span>
            {' '}
            <span className="word inline-block" style={{ color: 'rgba(255,255,255,0.2)' }}>&amp;</span>
            {' '}
            <span className="word inline-block gradient-text">Craft</span>
          </div>
        </div>

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 flex items-center justify-center gap-2"
          style={{ height: '2rem' }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', color: '#6366f1' }}>{'>'}</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', color: '#94a3b8' }}>
            <TypewriterText texts={roles} />
          </span>
          <span className="animate-blink" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', color: '#6366f1' }}>|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-subhead mb-10 mx-auto"
          style={{ maxWidth: '560px', color: '#64748b', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}
        >
          I craft <strong style={{ color: '#94a3b8', fontWeight: 500 }}>scalable systems</strong>, beautiful interfaces, and intelligent products
          — from first principles to production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#projects')}
            className="btn-primary"
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} />
              View My Work
            </span>
          </motion.button>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download
            className="btn-ghost"
          >
            <FileText size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: <Github size={18} />, href: 'https://github.com/amanrajtiwari', label: 'GitHub' },
            { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/amanrajtiwari', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:amanrajtiwari@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-xl glass glass-hover"
              style={{ color: '#64748b', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#6366f1' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#64748b' }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '20+', label: 'Projects Built' },
            { value: '10+', label: 'Certifications' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, background: 'linear-gradient(135deg, #f8fafc, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll to about section"
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.15em' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} color="#6366f1" />
        </motion.div>
      </motion.button>
    </section>
  )
}

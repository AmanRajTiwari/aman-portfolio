import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Brain, Layers, Zap } from 'lucide-react'

const traits = [
  { icon: <Code2 size={20} />, title: 'Engineer First', desc: 'I write clean, scalable, and maintainable code backed by solid architecture.' },
  { icon: <Brain size={20} />, title: 'AI/ML Enthusiast', desc: 'Passionate about building intelligent systems that learn and adapt.' },
  { icon: <Layers size={20} />, title: 'Product Thinker', desc: 'I connect dots between user needs, business goals, and technical solutions.' },
  { icon: <Zap size={20} />, title: 'Fast Learner', desc: 'I embrace new technologies and adapt rapidly to evolving ecosystems.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 px-6"
      aria-labelledby="about-title"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 60%, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="section-label">01 — About</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)', maxWidth: '120px' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              variants={itemVariants}
              id="about-title"
              className="text-hero mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="gradient-text">Crafting digital</span>
              <br />
              <span style={{ color: '#f8fafc' }}>experiences that</span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>matter.</span>
            </motion.h2>

            <motion.p variants={itemVariants} style={{ color: '#64748b', lineHeight: 1.8, fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', marginBottom: '1.25rem' }}>
              I'm <strong style={{ color: '#94a3b8', fontWeight: 500 }}>Aman Raj Tiwari</strong> — a Full Stack Developer and AI/ML Engineer
              based in India. I specialize in building high-performance web applications,
              intelligent systems, and developer tools.
            </motion.p>

            <motion.p variants={itemVariants} style={{ color: '#64748b', lineHeight: 1.8, fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', marginBottom: '2rem' }}>
              With a deep curiosity for how things work and a bias for action, I transform
              complex problems into elegant, intuitive solutions. Currently pursuing my degree
              while building real-world products that make a difference.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="pl-4 py-2"
              style={{ borderLeft: '2px solid #6366f1' }}
            >
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontStyle: 'italic', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7 }}>
                "I don't just write code — I build products that people love to use."
              </p>
            </motion.blockquote>

            {/* Location / Info */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              {[
                { label: 'Location', value: 'India 🇮🇳' },
                { label: 'Status', value: '✅ Open to Work' },
                { label: 'Focus', value: 'Full Stack + AI/ML' },
              ].map(item => (
                <div key={item.label} className="flex flex-col">
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</span>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500, marginTop: '0.2rem' }}>{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Trait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-2xl glass glass-hover gradient-border"
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))', color: '#818cf8' }}
                >
                  {trait.icon}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.5rem' }}>{trait.title}</h3>
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

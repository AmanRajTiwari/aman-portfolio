import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialId: 'AWS-SAA-C03-XXXX',
    color: '#f59e0b',
    category: 'Cloud',
    link: '#',
  },
  {
    title: 'Google Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'Mar 2024',
    credentialId: 'GCP-PDE-XXXX',
    color: '#6366f1',
    category: 'Cloud',
    link: '#',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Nov 2023',
    credentialId: 'TF-DEV-XXXX',
    color: '#ff6f00',
    category: 'AI/ML',
    link: '#',
  },
  {
    title: 'Meta React Developer Certificate',
    issuer: 'Meta',
    date: 'Aug 2023',
    credentialId: 'META-REACT-XXXX',
    color: '#0668E1',
    category: 'Frontend',
    link: '#',
  },
  {
    title: 'MongoDB Developer Path',
    issuer: 'MongoDB University',
    date: 'May 2023',
    credentialId: 'MDB-DEV-XXXX',
    color: '#22c55e',
    category: 'Database',
    link: '#',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    date: 'Feb 2024',
    credentialId: 'DL-SPEC-XXXX',
    color: '#06b6d4',
    category: 'AI/ML',
    link: '#',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF / Linux Foundation',
    date: 'Apr 2024',
    credentialId: 'CKA-XXXX',
    color: '#8b5cf6',
    category: 'DevOps',
    link: '#',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: 'Jun 2023',
    credentialId: 'FCC-FSWD-XXXX',
    color: '#ec4899',
    category: 'Frontend',
    link: '#',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const categoryColors = {
  'Cloud': '#f59e0b',
  'AI/ML': '#06b6d4',
  'Frontend': '#6366f1',
  'Database': '#22c55e',
  'DevOps': '#8b5cf6',
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-28 md:py-36 px-6"
      aria-labelledby="certifications-title"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="section-label">05 — Certifications</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)', maxWidth: '120px' }} />
        </motion.div>

        <motion.h2 variants={itemVariants} id="certifications-title" className="text-hero mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span className="gradient-text">Credentials &amp;</span>
          <br />
          <span style={{ color: '#f8fafc' }}>achievements.</span>
        </motion.h2>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: '8+', label: 'Certifications', color: '#6366f1' },
            { value: '4', label: 'Cloud Platforms', color: '#8b5cf6' },
            { value: '2024', label: 'Latest Cert', color: '#06b6d4' },
            { value: '100%', label: 'Pass Rate', color: '#22c55e' },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl glass text-center">
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.75rem', color: stat.color, letterSpacing: '-0.02em' }}>{stat.value}</p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{stat.label.toUpperCase()}</p>
            </div>
          ))}
        </motion.div>

        {/* Cert Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group p-5 rounded-2xl glass glass-hover relative overflow-hidden"
              style={{ border: `1px solid rgba(255,255,255,0.06)` }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <Award size={18} color={cert.color} />
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <ExternalLink size={14} color="#475569" />
                </a>
              </div>

              {/* Category badge */}
              <span
                className="tag mb-3 inline-block"
                style={{ background: `${cert.color}15`, borderColor: `${cert.color}30`, color: cert.color, fontSize: '0.6rem' }}
              >
                {cert.category}
              </span>

              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#f8fafc', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                {cert.title}
              </h3>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>{cert.issuer}</p>

              <div className="flex items-center justify-between mt-auto">
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569' }}>{cert.date}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: '#333', letterSpacing: '0.05em' }}>{cert.credentialId}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

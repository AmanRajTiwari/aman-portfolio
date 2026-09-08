import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tech Startup',
    location: 'Remote',
    period: 'Jun 2024 – Present',
    type: 'Internship',
    description: 'Building scalable web applications using React, Node.js, and cloud infrastructure. Led the development of a real-time dashboard serving 1000+ daily active users.',
    achievements: [
      'Reduced API response times by 40% through query optimization and Redis caching',
      'Built CI/CD pipeline reducing deployment time from 45 min to 8 min',
      'Implemented real-time features using WebSockets and Socket.io',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    color: '#6366f1',
  },
  {
    role: 'AI/ML Research Intern',
    company: 'Research Lab',
    location: 'Hybrid',
    period: 'Jan 2024 – May 2024',
    type: 'Research',
    description: 'Worked on computer vision and NLP models. Contributed to research papers on image segmentation and sentiment analysis pipelines.',
    achievements: [
      'Improved model accuracy by 12% using ensemble techniques and data augmentation',
      'Published research findings and co-authored a conference paper',
      'Built an NLP pipeline processing 50k+ documents daily',
    ],
    tags: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'scikit-learn', 'BERT'],
    color: '#8b5cf6',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2023 – Present',
    type: 'Freelance',
    description: 'Delivered end-to-end digital products for startups and entrepreneurs. From concept to deployment across diverse domains.',
    achievements: [
      'Delivered 10+ projects across e-commerce, SaaS, and portfolio domains',
      'Maintained 100% client satisfaction rating',
      'Developed custom CMS solutions saving clients $10k+ annually',
    ],
    tags: ['React', 'Next.js', 'Tailwind', 'Firebase', 'Stripe', 'Figma'],
    color: '#06b6d4',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 md:py-36 px-6"
      aria-labelledby="experience-title"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 40%, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="section-label">02 — Experience</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)', maxWidth: '120px' }} />
        </motion.div>

        <motion.h2 variants={itemVariants} id="experience-title" className="text-hero mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span className="gradient-text">Where I've</span>
          <br />
          <span style={{ color: '#f8fafc' }}>made an impact.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden md:block"
            style={{ left: '1.5rem', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute hidden md:flex items-center justify-center"
                  style={{ left: '0.5rem', top: '1.5rem', width: '2rem', height: '2rem', borderRadius: '50%', background: `${exp.color}20`, border: `2px solid ${exp.color}50`, zIndex: 1 }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: exp.color }} />
                </div>

                {/* Card */}
                <div className="p-6 md:p-8 rounded-2xl glass glass-hover gradient-border">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.1rem', color: '#f8fafc' }}>{exp.role}</h3>
                        <span
                          className="tag"
                          style={{ background: `${exp.color}15`, borderColor: `${exp.color}30`, color: exp.color, fontSize: '0.65rem' }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: exp.color }}>{exp.company}</p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} color="#475569" />
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#475569' }}>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} color="#475569" />
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#475569' }}>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.description}</p>

                  {/* Achievements */}
                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span style={{ color: exp.color, fontSize: '0.8rem', marginTop: '0.2rem', flexShrink: 0 }}>◆</span>
                        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

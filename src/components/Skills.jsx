import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    color: '#6366f1',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Three.js / R3F', level: 70 },
    ],
  },
  {
    category: 'Backend',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'AI / ML',
    color: '#06b6d4',
    skills: [
      { name: 'PyTorch', level: 78 },
      { name: 'TensorFlow', level: 72 },
      { name: 'scikit-learn', level: 85 },
      { name: 'Hugging Face', level: 80 },
      { name: 'LangChain', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#f59e0b',
    skills: [
      { name: 'Docker / K8s', level: 75 },
      { name: 'AWS / GCP', level: 70 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'Linux / Shell', level: 80 },
    ],
  },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'GCP',
  'PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face',
  'Three.js', 'GSAP', 'Framer Motion', 'Tailwind CSS',
  'GraphQL', 'REST APIs', 'WebSockets', 'Git', 'Linux', 'Figma',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 md:py-36 px-6"
      aria-labelledby="skills-title"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="section-label">04 — Skills</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)', maxWidth: '120px' }} />
        </motion.div>

        <motion.h2 variants={itemVariants} id="skills-title" className="text-hero mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span className="gradient-text">My technical</span>
          <br />
          <span style={{ color: '#f8fafc' }}>arsenal.</span>
        </motion.h2>

        {/* Category tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: activeCategory === i ? `${cat.color}20` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCategory === i ? `${cat.color}40` : 'rgba(255,255,255,0.06)'}`,
                color: activeCategory === i ? cat.color : '#64748b',
              }}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Skill bars */}
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-2xl glass gradient-border">
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#f8fafc', marginBottom: '1.5rem' }}>
                {skillCategories[activeCategory].category} Proficiency
              </h3>
              {skillCategories[activeCategory].skills.map(skill => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skillCategories[activeCategory].color}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>

          {/* All categories overview */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                whileHover={{ x: 4 }}
                onClick={() => setActiveCategory(i)}
                className="p-5 rounded-2xl glass glass-hover cursor-pointer"
                style={{
                  border: `1px solid ${activeCategory === i ? `${cat.color}30` : 'rgba(255,255,255,0.06)'}`,
                  background: activeCategory === i ? `${cat.color}08` : 'rgba(255,255,255,0.02)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: activeCategory === i ? '#f8fafc' : '#94a3b8' }}>{cat.category}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: cat.color }}>{cat.skills.length} skills</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: `linear-gradient(90deg, ${cat.color}, ${cat.color}60)`, borderRadius: '2px', width: `${Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%` }}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech cloud */}
        <motion.div variants={itemVariants}>
          <p className="section-label mb-6 text-center">Full Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

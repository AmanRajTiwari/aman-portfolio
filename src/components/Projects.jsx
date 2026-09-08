import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI Resume Analyzer',
    subtitle: 'SaaS Platform',
    description: 'A full-stack SaaS platform that uses GPT-4 and NLP to parse, score, and provide actionable feedback on resumes. Helps job seekers optimize their applications for ATS systems.',
    longDesc: 'Built with a microservices architecture, this platform processes thousands of resumes daily. Features include real-time PDF parsing, semantic similarity scoring against job descriptions, and personalized improvement suggestions powered by large language models.',
    tags: ['Next.js', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Redis', 'Stripe'],
    color: '#6366f1',
    status: 'Live',
    stars: 124,
    github: 'https://github.com/amanrajtiwari',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'DevCollab',
    subtitle: 'Real-time Collaboration Tool',
    description: 'GitHub-integrated project management tool with real-time collaboration features, code review workflows, and AI-powered task estimation for distributed teams.',
    longDesc: 'Inspired by Linear and GitHub Projects, DevCollab bridges the gap between code and project management. Features live cursor presence, conflict-free document editing (CRDT), and ML-powered sprint planning.',
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Docker', 'AWS'],
    color: '#8b5cf6',
    status: 'Beta',
    stars: 89,
    github: 'https://github.com/amanrajtiwari',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'NeuralSearch',
    subtitle: 'Semantic Search Engine',
    description: 'Vector-based semantic search engine built with FAISS and sentence transformers. Enables natural language queries over large document collections with sub-100ms latency.',
    longDesc: 'Implements dense retrieval using bi-encoder models with approximate nearest neighbor search. Supports hybrid search combining BM25 and semantic vectors for superior recall. Built with a FastAPI backend and React frontend.',
    tags: ['Python', 'FastAPI', 'FAISS', 'React', 'Docker', 'Hugging Face'],
    color: '#06b6d4',
    status: 'Open Source',
    stars: 203,
    github: 'https://github.com/amanrajtiwari',
    demo: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'CryptoTrack Dashboard',
    subtitle: 'Analytics Platform',
    description: 'Real-time cryptocurrency analytics dashboard with portfolio tracking, price alerts, and ML-driven trend prediction.',
    tags: ['React', 'D3.js', 'Python', 'WebSockets', 'TensorFlow'],
    color: '#f59e0b',
    status: 'Live',
    stars: 67,
    github: 'https://github.com/amanrajtiwari',
    demo: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Open Source CLI Toolkit',
    subtitle: 'Developer Tooling',
    description: 'A collection of productivity CLI tools for developers — project scaffolding, git workflow automation, and environment setup.',
    tags: ['Node.js', 'TypeScript', 'Shell', 'npm'],
    color: '#22c55e',
    status: 'Open Source',
    stars: 145,
    github: 'https://github.com/amanrajtiwari',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'EduPath LMS',
    subtitle: 'EdTech Platform',
    description: 'Learning Management System with adaptive quiz engine, video streaming, progress analytics, and certification generation.',
    tags: ['React', 'Django', 'PostgreSQL', 'Celery', 'FFmpeg'],
    color: '#ec4899',
    status: 'Live',
    stars: 52,
    github: 'https://github.com/amanrajtiwari',
    demo: '#',
    featured: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false)

  if (featured) {
    return (
      <motion.div
        variants={cardVariants}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative p-8 rounded-2xl glass glass-hover gradient-border overflow-hidden group"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Accent glow on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${project.color}10 0%, transparent 70%)` }}
            />
          )}
        </AnimatePresence>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: project.color, letterSpacing: '0.1em' }}>
                  {project.subtitle.toUpperCase()}
                </span>
                <span
                  className="tag"
                  style={{ background: `${project.color}15`, borderColor: `${project.color}30`, color: project.color, fontSize: '0.6rem' }}
                >
                  {project.status}
                </span>
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#f8fafc', letterSpacing: '-0.01em' }}>{project.title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star size={12} color="#f59e0b" fill="#f59e0b" />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#94a3b8' }}>{project.stars}</span>
              </div>
            </div>
          </div>

          <p style={{ color: '#64748b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {hovered ? project.longDesc : project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2"
              style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={14} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              aria-label={`View ${project.title} live demo`}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ExternalLink size={14} />
                Live Demo
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative p-6 rounded-2xl glass glass-hover group"
      style={{ border: `1px solid rgba(255,255,255,0.06)` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
        >
          <span style={{ fontSize: '0.75rem', color: project.color, fontWeight: 700 }}>{project.title[0]}</span>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={16} color="#475569" className="hover:text-white transition-colors" />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
            <ArrowUpRight size={16} color="#475569" className="hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.4rem' }}>{project.title}</h3>
      <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map(tag => <span key={tag} className="tag" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>{tag}</span>)}
        {project.tags.length > 3 && (
          <span className="tag" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', color: '#475569' }}>+{project.tags.length - 3}</span>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 md:py-36 px-6"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={cardVariants} className="flex items-center gap-4 mb-4">
          <span className="section-label">03 — Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)', maxWidth: '120px' }} />
        </motion.div>

        <div className="flex items-end justify-between mb-16">
          <motion.h2 variants={cardVariants} id="projects-title" className="text-hero" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="gradient-text">Selected</span>
            <br />
            <span style={{ color: '#f8fafc' }}>works.</span>
          </motion.h2>

          <motion.a
            variants={cardVariants}
            href="https://github.com/amanrajtiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hidden md:flex"
            style={{ fontSize: '0.85rem' }}
          >
            <Github size={16} />
            All Projects
          </motion.a>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Rest grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile all projects link */}
        <motion.div variants={cardVariants} className="mt-8 flex md:hidden justify-center">
          <a href="https://github.com/amanrajtiwari" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

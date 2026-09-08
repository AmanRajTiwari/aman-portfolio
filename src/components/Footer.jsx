import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(5,5,8,0.8)' }} role="contentinfo">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))', border: '1px solid rgba(99,102,241,0.3)' }}>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', background: 'linear-gradient(135deg, #818cf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A</span>
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#f8fafc' }}>Aman Raj Tiwari</span>
            </div>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, maxWidth: '260px' }}>
              Full Stack Developer &amp; AI/ML Engineer building products that matter.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: <Github size={16} />, href: 'https://github.com/amanrajtiwari', label: 'GitHub' },
                { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/amanrajtiwari', label: 'LinkedIn' },
                { icon: <Mail size={16} />, href: 'mailto:amanrajtiwari@gmail.com', label: 'Email' },
              ].map(social => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#6366f1' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#475569' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={e => {
                        e.preventDefault()
                        const el = document.querySelector(link.href)
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - 80
                          window.scrollTo({ top, behavior: 'smooth' })
                        }
                      }}
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#475569', transition: 'color 0.2s' }}
                      className="animated-underline"
                      onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#475569' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</p>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Available for freelance projects, full-time roles, and research collaborations.
            </p>
            <a
              href="mailto:amanrajtiwari@gmail.com"
              className="btn-primary inline-flex"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} />
                Send an Email
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', color: '#333' }}>
            © {new Date().getFullYear()} Aman Raj Tiwari. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', color: '#333' }}>
              Built with
            </span>
            <Heart size={12} color="#ef4444" fill="#ef4444" />
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', color: '#333' }}>
              using React &amp; Framer Motion
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg"
            style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} color="#6366f1" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, AlertCircle } from 'lucide-react'

const socials = [
  { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/amanrajtiwari', username: '@amanrajtiwari' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/amanrajtiwari', username: '/in/amanrajtiwari' },
  { icon: <Twitter size={20} />, label: 'Twitter', href: 'https://twitter.com/amanrajtiwari', username: '@amanrajtiwari' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-36 px-6"
      aria-labelledby="contact-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 60%)' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="section-label">06 — Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)', maxWidth: '120px' }} />
        </motion.div>

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} id="contact-title" className="text-hero mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="gradient-text">Let's build</span>
            <br />
            <span style={{ color: '#f8fafc' }}>something great.</span>
          </motion.h2>
          <motion.p variants={itemVariants} style={{ color: '#64748b', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Have a project in mind, a job opportunity, or just want to say hi?
            I'm always open to interesting conversations and collaborations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Info panel */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-5">
            {/* Contact info cards */}
            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'amanrajtiwari@gmail.com', href: 'mailto:amanrajtiwari@gmail.com', color: '#6366f1' },
              { icon: <MapPin size={18} />, label: 'Location', value: 'India 🇮🇳', href: null, color: '#8b5cf6' },
            ].map(item => (
              <div key={item.label} className="p-5 rounded-2xl glass gradient-border flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{item.label.toUpperCase()}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }} className="animated-underline">
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability indicator */}
            <div className="p-5 rounded-2xl glass" style={{ border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#22c55e' }}>Available for Work</span>
              </div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>
                Open to full-time roles, freelance projects, and research collaborations.
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl glass glass-hover group"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  aria-label={`${social.label}: ${social.username}`}
                >
                  <div style={{ color: '#64748b', transition: 'color 0.2s' }} className="group-hover:[color:#6366f1]">{social.icon}</div>
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, fontSize: '0.85rem', color: '#94a3b8' }}>{social.label}</p>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#475569' }}>{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass gradient-border" aria-label="Contact form">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      style={{ display: 'block', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#64748b', marginBottom: '0.5rem' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={form[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px',
                        color: '#f8fafc',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(99,102,241,0.5)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label htmlFor="subject" style={{ display: 'block', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#64748b', marginBottom: '0.5rem' }}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration, job opportunity..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: '#f8fafc',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(99,102,241,0.5)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" style={{ display: 'block', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#64748b', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or how I can help..."
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: '#f8fafc',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    minHeight: '120px',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(99,102,241,0.5)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === 'loading' ? 0.7 : 1 }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {/* Status message */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-2 p-3 rounded-xl"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    <CheckCircle2 size={16} color="#22c55e" />
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#22c55e' }}>Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-2 p-3 rounded-xl"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    <AlertCircle size={16} color="#ef4444" />
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', color: '#ef4444' }}>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

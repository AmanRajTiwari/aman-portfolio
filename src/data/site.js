/**
 * site.js — Global site metadata
 *
 * Single source of truth for the owner's identity, contact links,
 * and nav items. Update here and it propagates everywhere.
 */

export const owner = {
  name: 'Aman Raj Tiwari',
  initials: 'ART',
  role: 'Full-Stack Developer',
  tagline: 'Building scalable products at the intersection of MERN, SaaS & AI.',
  focus: ['MERN Stack', 'SaaS Development', 'AI-assisted / Vibe Coding', 'Cloud & IoT'],
  location: 'India',
  email: 'amanrajtiwari@gmail.com',
  availability: 'Open to opportunities',
}

export const links = {
  site: 'https://amanrajtiwari.in',
  github: 'https://github.com/AmanRajTiwari',
  linkedin: 'https://www.linkedin.com/in/amanrajtiwari01/',
  twitter: 'https://twitter.com/amanrajtiwari',
  resume: '/resume.pdf',
}

export const nav = [
  { label: 'About',   href: '#about'   },
  { label: 'Work',    href: '#work'    },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Contact', href: '#contact' },
]

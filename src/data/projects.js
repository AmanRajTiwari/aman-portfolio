/**
 * projects.js — Work section data
 *
 * Edit project details here. The Work component reads this file directly.
 *
 * Fields:
 *   id         unique key
 *   slug       url-safe identifier
 *   number     display number string e.g. "01"
 *   featured   true = large hero treatment (first project)
 *   name       project title
 *   category   short type label shown in eyebrow
 *   tagline    single sentence that describes the core value
 *   description  one paragraph, neutral & concise
 *   tech       array of technology / stack strings
 *   year       string year of build
 *   liveUrl    live URL — null if not available
 *   githubUrl  GitHub URL — null if not available
 *   accentColor  subtle CSS colour string for visual accent (keep restrained)
 */

export const projects = [
  {
    id: 1,
    slug: 'vorko',
    number: '01',
    featured: true,
    name: 'VORKO',
    category: 'SaaS · Full-Stack Web Application',
    tagline: 'A full-stack SaaS platform built for scale.',
    description:
      'VORKO is a full-stack SaaS web application built with the MERN stack. It focuses on delivering a complete product experience — from authentication and user management to a functional, deployable web application with a clean interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    year: '2026',
    liveUrl: null,
    githubUrl: null,
    accentColor: 'rgba(99, 102, 241, 0.12)',
  },
  {
    id: 2,
    slug: 'aqpulse',
    number: '02',
    featured: false,
    name: 'AQPulse',
    category: 'IoT · Dashboard · Data Platform',
    tagline: 'Real-time air quality monitoring and visualisation platform.',
    description:
      'AQPulse is an IoT data platform that collects, processes, and visualises air quality sensor data in real time. It provides an interactive dashboard for monitoring environmental metrics, making complex sensor data readable and actionable.',
    tech: ['React', 'Node.js', 'MongoDB', 'IoT', 'Charts', 'REST API'],
    year: '2025',
    liveUrl: null,
    githubUrl: null,
    accentColor: 'rgba(6, 182, 212, 0.10)',
  },
  {
    id: 3,
    slug: 'day-foundation',
    number: '03',
    featured: false,
    name: 'Day Foundation',
    category: 'Website · Web Development',
    tagline: 'A clean, professional web presence for an organisation.',
    description:
      'Day Foundation is a fully responsive website built for an organisation. It focuses on a clear information architecture, clean visual design, and a smooth user experience across all screen sizes.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    year: '2025',
    liveUrl: null,
    githubUrl: null,
    accentColor: 'rgba(139, 92, 246, 0.10)',
  },
]

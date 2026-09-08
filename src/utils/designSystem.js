/**
 * Design System — single source of truth.
 *
 * All design tokens are defined here. Import this file instead of
 * hardcoding values. The CSS custom properties in index.css mirror
 * these values and are used by utility classes defined there.
 */

// ─────────────────────────────────────────────
// Color Palette
// ─────────────────────────────────────────────
export const colors = {
  bg: {
    primary: '#050508',
    secondary: '#0a0a12',
    card: 'rgba(255, 255, 255, 0.03)',
    cardHover: 'rgba(255, 255, 255, 0.06)',
  },
  accent: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    tertiary: '#06b6d4',
    glow: 'rgba(99, 102, 241, 0.15)',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#94a3b8',
    muted: '#475569',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.06)',
    accent: 'rgba(99, 102, 241, 0.3)',
  },
}

// ─────────────────────────────────────────────
// Typography
// ─────────────────────────────────────────────
export const typography = {
  fontSans: "'Space Grotesk', 'Inter', sans-serif",
  fontDisplay: "'Inter', sans-serif",
  fontMono: "'JetBrains Mono', monospace",

  // Fluid type scale (use via CSS class or inline)
  scale: {
    display: 'clamp(3rem, 8vw, 7rem)',     // .text-display
    hero: 'clamp(2rem, 5vw, 4.5rem)',       // .text-hero
    headline: 'clamp(1.5rem, 3vw, 2.5rem)',// .text-headline
    subhead: 'clamp(1.1rem, 2vw, 1.5rem)', // .text-subhead
    body: '1rem',
    small: '0.875rem',
    micro: '0.75rem',
  },
}

// ─────────────────────────────────────────────
// Spacing
// ─────────────────────────────────────────────
export const spacing = {
  section: {
    y: 'py-24 md:py-32 lg:py-40',
    x: 'px-6 md:px-12 lg:px-24',
  },
  container: 'max-w-7xl mx-auto',
}

// ─────────────────────────────────────────────
// Border Radius
// ─────────────────────────────────────────────
export const radius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  full: '9999px',
}

// ─────────────────────────────────────────────
// Shadows
// ─────────────────────────────────────────────
export const shadows = {
  glow: '0 0 40px rgba(99, 102, 241, 0.15), 0 0 80px rgba(99, 102, 241, 0.05)',
  card: '0 4px 24px rgba(0, 0, 0, 0.4)',
  elevate: '0 10px 40px rgba(0, 0, 0, 0.6)',
}

// ─────────────────────────────────────────────
// Framer Motion — shared animation variants
// ─────────────────────────────────────────────
export const motion = {
  /** Fade up — standard section entry */
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  },

  /** Fade in — simple opacity reveal */
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  /** Stagger container — wraps a list of children */
  stagger: (staggerChildren = 0.1, delayChildren = 0.1) => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  }),

  /** Slide in from left */
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  },

  /** Slide in from right */
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  },

  /** Scale up from slightly smaller */
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
}

// ─────────────────────────────────────────────
// Lenis scroll config
// ─────────────────────────────────────────────
export const lenisConfig = {
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
}

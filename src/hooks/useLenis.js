import { useEffect } from 'react'
import { lenisConfig } from '../utils/designSystem'

/**
 * useLenis
 *
 * Initialises Lenis smooth scroll and wires it into the
 * browser's requestAnimationFrame loop.
 *
 * Returns the lenis instance so callers can call
 * lenis.scrollTo(...) if needed.
 */
export function useLenis() {
  useEffect(() => {
    // Respect user's reduced-motion preference for accessibility
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let lenis
    let rafId

    const init = async () => {
      try {
        const { default: Lenis } = await import('lenis')
        lenis = new Lenis(lenisConfig)

        const raf = (time) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch (err) {
        // Lenis failed silently — native scroll takes over
        console.warn('[useLenis] Lenis initialisation failed:', err)
      }
    }

    init()

    return () => {
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])
}

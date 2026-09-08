import { useEffect, useRef } from 'react'

/**
 * useInView
 *
 * Observes an element and calls `onEnter` when it first enters
 * the viewport. Useful for triggering entry animations without
 * a full library.
 *
 * @param {Function} onEnter  - called once when element enters viewport
 * @param {Object}   options  - IntersectionObserver options
 * @returns React ref — attach to the element you want to observe
 */
export function useInView(onEnter, options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onEnter?.()
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [onEnter, options])

  return ref
}

import { useEffect, useRef } from 'react'

/**
 * CursorGlow
 *
 * Follows the cursor with a soft radial glow halo.
 * Rendered at pointer-events:none so it never blocks interaction.
 * Uses a direct DOM ref + CSS transform for smooth 60fps tracking.
 */
export function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return

    const move = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow"
    />
  )
}

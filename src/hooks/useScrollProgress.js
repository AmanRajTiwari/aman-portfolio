import { useEffect, useState } from 'react'

/**
 * useScrollProgress
 *
 * Returns a normalised [0, 1] value representing how far the user
 * has scrolled down the page. Useful for progress bars or parallax.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

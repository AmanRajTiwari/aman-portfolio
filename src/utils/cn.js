/**
 * Utility: Merge class names conditionally.
 * Lightweight alternative to clsx — no extra dependency needed.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

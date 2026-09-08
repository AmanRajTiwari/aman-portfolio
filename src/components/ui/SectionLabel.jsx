import { cn } from '../../utils'

/**
 * SectionLabel
 *
 * Small mono-spaced uppercase label used above section headings.
 * e.g. "// 01 — About"
 *
 * @prop {string} children
 * @prop {string} className
 */
export function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        'section-label mb-3',
        className,
      )}
    >
      {children}
    </p>
  )
}

import { cn } from '../../utils'

/**
 * Tag / Badge
 *
 * Mono-spaced pill label for tech stack tags, categories, etc.
 *
 * @prop {string} children
 * @prop {string} className
 */
export function Tag({ children, className }) {
  return (
    <span className={cn('tag', className)}>
      {children}
    </span>
  )
}

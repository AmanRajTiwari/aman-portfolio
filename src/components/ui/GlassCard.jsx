import { cn } from '../../utils'

/**
 * GlassCard
 *
 * A glassmorphism card with subtle border, backdrop blur, and
 * optional hover lift effect.
 *
 * @prop {string}  className
 * @prop {boolean} hoverable  - Adds hover lift + border accent (default: true)
 * @prop {React.ReactNode} children
 */
export function GlassCard({ className, hoverable = true, children, ...rest }) {
  return (
    <div
      className={cn(
        'glass rounded-xl',
        hoverable && 'glass-hover cursor-pointer',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

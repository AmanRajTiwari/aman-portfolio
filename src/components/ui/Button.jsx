import { cn } from '../../utils'

/**
 * Button
 *
 * Two variants: "primary" (gradient fill) and "ghost" (outline).
 *
 * @prop {'primary'|'ghost'} variant
 * @prop {string}  className
 * @prop {React.ReactNode} children
 */
export function Button({ variant = 'primary', className, children, ...rest }) {
  return (
    <button
      className={cn(
        variant === 'primary' ? 'btn-primary' : 'btn-ghost',
        className,
      )}
      {...rest}
    >
      {variant === 'primary'
        ? <span>{children}</span>
        : children}
    </button>
  )
}

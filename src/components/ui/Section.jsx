import { motion } from 'framer-motion'
import { cn } from '../../utils'
import { motion as designMotion, spacing } from '../../utils/designSystem'

/**
 * Section
 *
 * Reusable full-width section wrapper with:
 * - Consistent vertical padding
 * - Optional max-width container
 * - Viewport-triggered fade-up animation
 *
 * @prop {string}  id          - Anchor ID for nav links
 * @prop {string}  className   - Extra classes for the outer section
 * @prop {boolean} contained   - Wrap content in centred container (default: true)
 * @prop {React.ReactNode} children
 */
export function Section({ id, className, contained = true, children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={designMotion.fadeUp}
      className={cn(
        'relative',
        spacing.section.y,
        spacing.section.x,
        className,
      )}
    >
      {contained ? (
        <div className={spacing.container}>{children}</div>
      ) : (
        children
      )}
    </motion.section>
  )
}

import { motion, AnimatePresence } from 'framer-motion'

/**
 * LoadingScreen
 *
 * Full-screen cinematic loader shown while the app initialises.
 * Animates out once `isVisible` is false.
 *
 * @prop {boolean} isVisible
 */
export function LoadingScreen({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg-primary)' }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8 flex items-center gap-3"
          >
            <span
              className="text-2xl font-bold tracking-widest"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-primary)',
              }}
            >
              ART
            </span>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Loading
            </span>
          </motion.div>

          {/* Progress bar */}
          <div
            className="w-48 h-px overflow-hidden rounded-full"
            style={{ background: 'var(--border-subtle)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
              }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

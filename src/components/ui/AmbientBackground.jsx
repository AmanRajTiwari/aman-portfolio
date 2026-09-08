/**
 * AmbientBackground
 *
 * Full-screen fixed layer that renders:
 *  - deep dark base
 *  - subtle radial gradient orbs (top-left, bottom-right)
 *  - a fine dot/grid texture
 *
 * Sits at z-index 0 behind all content.
 * Pure CSS — no JS, zero performance cost.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Top-left accent orb */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Bottom-right accent orb */}
      <div
        className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full opacity-20 blur-[140px] animate-float-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Centre subtle haze */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-10 blur-[180px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Fine grid texture overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  )
}

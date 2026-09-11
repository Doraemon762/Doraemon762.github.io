/**
 * Background texture stack: dot grid + optional noise + optional vignette.
 * Purely decorative — always aria-hidden and non-interactive.
 *
 * Hero uses vignette; other sections can reuse it without.
 */
export default function DotGrid({ noise = true, vignette = false, className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`.trim()} aria-hidden="true">
      <div className="absolute inset-0 dot-grid" />
      {noise && <div className="absolute inset-0 noise" />}
      {vignette && <div className="absolute inset-0 hero-vignette" />}
    </div>
  )
}

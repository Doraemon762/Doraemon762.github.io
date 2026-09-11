/**
 * The small mono kicker above a section title, e.g. "— 02 / Value Proposition".
 * Not used by Hero, but every later section starts with one.
 */
export default function SectionLabel({ index, children, className = '' }) {
  return (
    <div className={`text-xs font-mono text-mute uppercase tracking-[0.3em] ${className}`.trim()}>
      — {index} / {children}
    </div>
  )
}

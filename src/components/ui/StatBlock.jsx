/**
 * One headline statistic: big number + accent unit + mono label.
 * Used by the Hero grid; reusable by any later section.
 */
export default function StatBlock({ value, unit = '', label }) {
  return (
    <div className="bg-ink p-6 md:p-8">
      <div className="num-big text-3xl md:text-5xl font-light">
        {value}
        {unit && <span className="text-accent">{unit}</span>}
      </div>
      <div className="text-xs font-mono text-mute mt-2 uppercase tracking-wider">{label}</div>
    </div>
  )
}

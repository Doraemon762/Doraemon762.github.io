/**
 * One headline statistic: big number + unit + mono label.
 * Used by the Hero grid; reusable by any later section.
 *
 * `accent` comes from site.js (datasetStats) and draws the figure in the
 * brand highlight colour. Every other figure stays plain white/grey, so
 * only the headline "1000" carries colour — the blue stays ~10%.
 */
export default function StatBlock({ value, unit = '', label, accent = false }) {
  return (
    /* Translucent silver — the glass tint of the hero stats card. The card
       shell owns the border, blur, rounding and shadow; each cell only
       contributes this faint fill so the image stays faintly visible.

       Vertical padding is deliberately tight and symmetric (top == bottom)
       so the number + label block stays optically centred in the slimmed
       data bar. Horizontal padding keeps the original breathing room. */
    <div className="bg-white/[0.07] px-6 py-2 md:px-8">
      <div className="num-big text-3xl md:text-5xl font-light">
        {accent ? (
          /* Highlighted figure — number and unit share the brand colour */
          <span className="text-brand">
            {value}
            {unit}
          </span>
        ) : (
          /* Plain figure — the unit is de-emphasised, never coloured */
          <>
            {value}
            {unit && <span className="text-white/50">{unit}</span>}
          </>
        )}
      </div>
      <div className="text-xs font-mono text-mute mt-1 uppercase tracking-wider">{label}</div>
    </div>
  )
}

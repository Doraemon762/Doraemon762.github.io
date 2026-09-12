import { overview } from '../../data/site'
import Reveal from '../ui/Reveal'

/* ------------------------------------------------------------------ */
/* Body copy                                                           */
/* ------------------------------------------------------------------ */

/**
 * One paragraph of body copy — plain prose, no bold fragments.
 * Max width lives on the wrapper so every paragraph shares one measure.
 */
function Paragraph({ children }) {
  return <p className="text-base leading-relaxed text-white/70">{children}</p>
}

/* ------------------------------------------------------------------ */
/* Image frame                                                         */
/* ------------------------------------------------------------------ */

/**
 * 4:3 frame that will hold the overview image.
 * Renders a real <img> as soon as `overview.imageSrc` is set; until then it
 * falls back to a flat rectangle. Swapping in the asset needs no layout
 * change — only a path in site.js.
 */
function ImageFrame({ src, label }) {
  return (
    <div className="group relative aspect-[4/3] w-full bg-gradient-to-br from-ink2 to-ink3 border border-white/10 overflow-hidden transition-colors duration-300 hover:border-brandLine">
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono text-mute uppercase tracking-[0.3em] transition-colors duration-300 group-hover:text-brand/70">
            {label}
          </span>
        </div>
      )}

      {/* Brand hover wash — a flat 5% tint, no gradient and no glow */}
      <span
        className="pointer-events-none absolute inset-0 bg-brandSoft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 03 — Overview                                                       */
/* ------------------------------------------------------------------ */

export default function OverviewSection() {
  return (
    <section className="relative py-32 md:py-40">
      <div id="overview" className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-12 lg:gap-16 items-center md:grid-cols-2 lg:grid-cols-[1.15fr_1fr]">
          {/* Left — copy */}
          <div>
            <Reveal className="text-xs font-mono text-mute uppercase tracking-[0.3em]">
              {overview.label}
            </Reveal>

            {/* Title — same H2 scale as the DEMO section title */}
            <Reveal
              as="h2"
              delay={1}
              className="mt-4 font-black tracking-tight leading-[1.2] text-[clamp(1.25rem,4vw,3rem)]"
            >
              {overview.title}
            </Reveal>

            {/* Body — max width keeps the reading rhythm comfortable */}
            <Reveal delay={2} className="mt-8 space-y-6 max-w-xl">
              {overview.body.map((text, i) => (
                <Paragraph key={i}>{text}</Paragraph>
              ))}
            </Reveal>
          </div>

          {/* Right — image */}
          <Reveal delay={3}>
            <ImageFrame src={overview.imageSrc} label={overview.placeholderLabel} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

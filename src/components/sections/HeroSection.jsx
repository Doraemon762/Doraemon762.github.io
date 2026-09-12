import { hero } from '../../data/site'
import DotGrid from '../ui/DotGrid'
import Reveal from '../ui/Reveal'
import StatBlock from '../ui/StatBlock'

/* ------------------------------------------------------------------ */
/* 01 — Cover / Hero                                                   */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background texture */}
      <DotGrid noise vignette />

      {/* Cover image — rises from the lower-middle of the hero and dissolves
          into the black background. The radial CSS mask feathers all four
          edges (no rectangle anywhere), and the low opacity doubles as the
          black scrim: the page behind is #0a0a0a, so dimming the image to
          ~55% is equivalent to a ~45% black overlay with zero extra layers.
          z-[1] keeps it above the texture and below the content (z-10). */}
      {hero.imageSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[46vh] md:h-[58vh]"
        >
          <img
            src={hero.imageSrc}
            alt=""
            className="h-full w-full object-cover opacity-[0.55]"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 72% 62% at 50% 54%, #000 36%, transparent 76%)',
              maskImage:
                'radial-gradient(ellipse 72% 62% at 50% 54%, #000 36%, transparent 76%)',
            }}
          />
        </div>
      )}

      {/* Content — nudged upward so the headline sits in the upper-middle of
          the hero, leaving room for the cover image and the stats card below.
          The offset is a transform, so the centred layout is untouched. */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12 -translate-y-10 md:-translate-y-14">
        {/* Pre-title pill */}
        <Reveal className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-mute uppercase tracking-[0.3em] border border-white/10 rounded-full px-4 py-2">
            {/* Live status dot — one of the few always-on brand accents */}
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            {hero.pretitle}
          </span>
        </Reveal>

        {/* Title — two lines.
            The ceiling is lower than a single-line title because line 2
            ("Embodied Motion Dataset") is the widest row. */}
        <Reveal
          as="h1"
          delay={1}
          className="text-center font-black tracking-tight leading-[1.2] text-[clamp(1.25rem,6.2vw,5.625rem)]"
        >
          <span className="block whitespace-nowrap">
            {hero.title.line1.pre}
            {/* "1000" — the brand highlight inside the headline */}
            <span className="text-brand">{hero.title.line1.accent}</span>
            {hero.title.line1.post}
          </span>
          <span className="block whitespace-nowrap">{hero.title.line2}</span>
        </Reveal>

        {/* Subtitle */}
        <Reveal
          as="p"
          delay={2}
		  className="text-center mt-8 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-times"

        >
          {hero.subtitle.map((part, i) =>
            part.strong ? (
              <span key={i} className="text-white">
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </Reveal>

        {/* Stats card — frosted silver panel floating over the cover image.
            The 1px grid gap shows the shell's white/10 background, which
            reads as a hairline divider between the four figures. */}
        <Reveal
          delay={3}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/15 backdrop-blur-lg shadow-[0_10px_40px_-12px_rgba(0,0,0,0.65)]"
        >
          {hero.stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

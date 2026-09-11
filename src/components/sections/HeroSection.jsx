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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        {/* Pre-title pill */}
        <Reveal className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-mute uppercase tracking-[0.3em] border border-white/10 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
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
            <span className="text-accent">{hero.title.line1.accent}</span>
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

        {/* Stats grid */}
        <Reveal
          delay={3}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-4xl mx-auto border border-white/10"
        >
          {hero.stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

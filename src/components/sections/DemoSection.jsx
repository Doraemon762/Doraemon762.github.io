import { demo } from '../../data/site'
import Reveal from '../ui/Reveal'

/* ------------------------------------------------------------------ */
/* Video frame                                                         */
/* ------------------------------------------------------------------ */

/**
 * 16:9 frame that will hold the one-minute demo reel.
 *
 * Renders a real <video> as soon as `demo.videoSrc` is set; until then it
 * falls back to a static rectangle placeholder. Swapping in the footage
 * later needs no layout change — only a path in site.js.
 */
function VideoFrame({ src, label }) {
  return (
    <div className="relative aspect-video w-full bg-gradient-to-br from-ink2 to-ink3 border border-white/10 overflow-hidden">
      {src ? (
        <video src={src} controls playsInline className="w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center text-white/60">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7 translate-x-[1px]"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-xs font-mono text-mute uppercase tracking-[0.3em]">{label}</span>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 02 — Demo                                                           */
/* ------------------------------------------------------------------ */

export default function DemoSection() {
  return (
    <section id="demo" className="relative pt-16 md:pt-20 pb-32 md:pb-40">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title — H2 level, one step below the hero H1 (which caps at 90px).
            "DEMO" is only 4 glyphs, so it stays narrow at any size:
            ≈138px wide even at the 3rem cap, far inside the 1200px box. */}
        <Reveal
          as="h2"
          className="text-center font-black tracking-tight leading-[1.2] text-[clamp(1.25rem,4vw,3rem)]"
        >
          {demo.title}
        </Reveal>

        {/* One-line description — same type as the hero subtitle */}
        <Reveal
          as="p"
          delay={1}
          className="text-center mt-6 md:mt-8 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-times"
        >
          {demo.description}
        </Reveal>

        {/* Demo reel — 16:9, inset from the section's max width */}
        <Reveal delay={2} className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <VideoFrame src={demo.videoSrc} label={demo.placeholderLabel} />
        </Reveal>
      </div>
    </section>
  )
}

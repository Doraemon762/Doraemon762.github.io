import { demo } from '../../data/site'
import Reveal from '../ui/Reveal'

/* ------------------------------------------------------------------ */
/* Video frame                                                         */
/* ------------------------------------------------------------------ */

/**
 * 16:9 frame that will hold the one-minute demo reel.
 *
 * Preserves the original behaviour: renders a real <video> with native
 * controls as soon as `demo.videoSrc` is set; until then it falls back to a
 * static rectangle placeholder. Swapping in the footage later needs no
 * layout change — only a path in site.js.
 */
function VideoFrame({ src, label }) {
  return (
    <div className="group relative aspect-video w-full bg-gradient-to-br from-ink2 to-ink3 border border-white/10 overflow-hidden transition-colors duration-300 hover:border-brandLine">
      {src ? (
        <video src={src} controls playsInline className="w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-colors duration-300 group-hover:border-brandLine group-hover:text-brand">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7 translate-x-[1px]"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
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
/* 02 — Demo / Live Capture                                            */
/* ------------------------------------------------------------------ */

/**
 * English only. Restyled to match the Multimodal Data and Open Source
 * modules: small label → large two-word title → content. The video frame
 * and its logic are unchanged; only the header hierarchy, alignment,
 * spacing and typography were adjusted to the shared design language.
 */
export default function DemoSection() {
  return (
    <section className="relative py-32 md:py-40">
      {/* Anchor sits on the content wrapper, not on the <section>: the section's
          py-32/md:py-40 padding is invisible, so anchoring the section itself
          landed the heading far below the navbar. */}
      <div id="demo" className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        {/* Small section label */}
        <Reveal className="text-xs font-mono tracking-[0.3em] text-mute">{demo.label}</Reveal>

        {/* Main title — the dominant visual element of this block */}
        <Reveal
          as="h2"
          delay={1}
          className="mt-4 font-black tracking-tight leading-[1.2] text-[clamp(1.25rem,4vw,3rem)]"
        >
          {demo.title}
        </Reveal>

        {/* One-line description — restrained, left-aligned */}
        <Reveal delay={2} className="mt-6">
          <p className="max-w-xl text-base text-white/70">{demo.description}</p>
        </Reveal>

        {/* Demo reel — full content width, 16:9, sits under the title */}
        <Reveal delay={3} className="mt-16 md:mt-20">
          <VideoFrame src={demo.videoSrc} label={demo.placeholderLabel} />
        </Reveal>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'

/**
 * One-shot "in view" flag for scroll-reveal animations.
 *
 * Mirrors the original prototype's observer settings:
 *   threshold 0.1, rootMargin '0px 0px -50px 0px'
 * Once revealed, the element is unobserved (matches the old one-way `.in` class).
 *
 * @returns {[React.RefObject<HTMLElement>, boolean]} [ref, inView]
 *
 * @example
 *   const [ref, inView] = useReveal()
 *   <div ref={ref} className={inView ? 'reveal in' : 'reveal'}>…</div>
 */
export default function useReveal() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduced-motion users get content immediately, no slide.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

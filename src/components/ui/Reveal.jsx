import useReveal from '../../hooks/useReveal'

/**
 * Scroll-reveal wrapper.
 *
 * @param {number} delay 0–4 — maps to the original `.reveal-delay-N` classes
 *                       (0.1s per step) so blocks can cascade in.
 * @param {string} as    Rendered element/tag, default 'div'.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, inView] = useReveal()

  const classes = ['reveal', delay > 0 ? `reveal-delay-${delay}` : '', inView ? 'in' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  )
}

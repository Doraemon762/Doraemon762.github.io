import { nav, site } from '../../data/site'

/**
 * Minimal top navigation (placeholder structure).
 * Links point at section anchors that will exist in later phases.
 */
export default function Nav() {
  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-[0.2em] text-sm">
          {site.brand}
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>


      </div>
    </nav>
  )
}

import { footer, site } from '../../data/site'

/**
 * Minimal footer (placeholder structure).
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <div className="font-semibold tracking-[0.2em] text-sm">{site.brand}</div>
          <p className="text-sm text-mute mt-2 max-w-md leading-relaxed">{footer.note}</p>
        </div>

        <div className="text-sm text-mute text-left md:text-right">
          <a href={`mailto:${footer.email}`} className="hover:text-white transition">
            {footer.email}
          </a>
          <div className="mt-2 text-xs font-mono">{footer.copyright}</div>
        </div>
      </div>
    </footer>
  )
}

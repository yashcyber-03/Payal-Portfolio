import { Instagram } from 'lucide-react'
import { nav, site } from '../data/content'
export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 items-start">
        <p className="font-serif text-2xl tracking-[0.25em]">{site.name}</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {nav.map((n) => <li key={n.id}><a className="hover:text-brown" href={`/#${n.id}`}>{n.label}</a></li>)}
        </ul>
        <div className="md:text-right">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex hover:text-brown"><Instagram size={20} /></a>
        </div>
      </div>
      <p className="max-w-7xl mx-auto mt-12 pt-6 border-t border-cream/15 text-xs text-cream/60 leading-relaxed">{site.disclaimer}</p>
    </footer>
  )
}

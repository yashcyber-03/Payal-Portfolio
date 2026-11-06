import { useEffect, useState } from 'react'
import { Instagram, Menu, X } from 'lucide-react'
import { nav, site } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'
const ids = nav.map((n) => n.id)
export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-cream/95 backdrop-blur border-b border-charcoal/10' : ''}`}>
      <nav aria-label="Primary" className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        <a href="/#home" className="font-serif text-lg tracking-[0.25em]">{site.name}</a>
        <ul className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`/#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                className={`text-sm pb-1 border-b transition-colors ${active === n.id ? 'border-brown text-brown' : 'border-transparent hover:text-brown'}`}>{n.label}</a>
            </li>
          ))}
          <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Payal on Instagram" className="hover:text-brown"><Instagram size={18} /></a></li>
        </ul>
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="md:hidden bg-cream px-6 pb-8 pt-2">
          <ul className="flex flex-col gap-5">
            {nav.map((n) => (
              <li key={n.id}><a onClick={() => setOpen(false)} href={`/#${n.id}`} className="font-serif text-3xl">{n.label}</a></li>
            ))}
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brown"><Instagram size={18} /> Instagram</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

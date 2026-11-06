import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0 })} aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 grid place-items-center bg-charcoal text-cream hover:bg-brown transition-colors">
      <ArrowUp size={18} />
    </button>
  )
}

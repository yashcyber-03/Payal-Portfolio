import { useEffect } from 'react'
export default function NotFound() {
  useEffect(() => { document.title = 'Page not found' }, [])
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-display text-6xl md:text-8xl">Lost in the frame.</h1>
        <p className="mt-6 text-charcoal/70">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-dark mt-10">Back Home</a>
      </div>
    </main>
  )
}

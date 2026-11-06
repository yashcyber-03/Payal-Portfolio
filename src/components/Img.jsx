import { useState } from 'react'
export default function Img({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div role="img" aria-label={alt} className={`bg-beige ${className}`} />
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setBad(true)} className={`object-cover ${className}`} />
}

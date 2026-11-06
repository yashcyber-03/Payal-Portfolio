import { ArrowDown } from 'lucide-react'
import { creator } from '../data/creator'
import { social } from '../data/social'
import ExtLink from '../components/ExtLink'
import Img from '../components/Img'
export default function Hero() {
  return (
    <section id="home" className="px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-x-10 gap-y-8 md:min-h-screen items-end">
      <div className="md:col-span-8 order-2 md:order-1 md:-mr-24 md:z-10 relative">
        <p className="eyebrow mb-5">{creator.name} · {creator.title} · {creator.location}</p>
        <h1 className="font-serif text-6xl sm:text-7xl lg:text-[8.5rem] leading-[0.92] tracking-tight">{creator.headline.replace('.', '')}<span className="text-brown">.</span></h1>
        <p className="mt-8 max-w-md text-charcoal/70">{creator.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#work" className="btn btn-dark">Explore My Work <ArrowDown size={14} /></a>
          <a href="#contact" className="link">Let's Collaborate</a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {social.map((s) => <li key={s.id}><ExtLink href={s.url} empty={`Set the ${s.name} URL in src/data/social.js`}>{s.name}</ExtLink></li>)}
        </ul>
      </div>
      <Img src={creator.images.hero} alt="Featured portrait (replaceable placeholder)" className="md:col-span-4 order-1 md:order-2 w-full aspect-[4/5] md:aspect-[4/5] md:mb-16" />
    </section>
  )
}

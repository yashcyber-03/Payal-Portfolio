import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { social } from '../data/social'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ExtLink from '../components/ExtLink'
const icons = { instagram: Instagram, youtube: Youtube, facebook: Facebook, linkedin: Linkedin }
export default function Social() {
  return (
    <Section id="social" eyebrow="Social presence" title="Where to find me." className="bg-beige" intro="">
      <ul className="border-t border-charcoal/25">
        {social.map((s) => {
          const I = icons[s.id]
          return (
            <Reveal as="li" key={s.id} className="grid grid-cols-2 md:grid-cols-12 gap-y-2 gap-x-6 items-baseline py-6 border-b border-charcoal/25">
              <h3 className="col-span-2 md:col-span-4 font-serif text-3xl md:text-4xl flex items-center gap-3"><I size={22} aria-hidden="true" />{s.name}</h3>
              <p className="md:col-span-3 text-sm"><span className="eyebrow block">Audience</span>{s.followers}</p>
              <p className="md:col-span-3 text-sm"><span className="eyebrow block">Engagement</span>{s.engagement}</p>
              <p className="col-span-2 md:col-span-2 md:text-right"><ExtLink href={s.url} empty={`Set the ${s.name} URL in src/data/social.js`}>Visit</ExtLink></p>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}

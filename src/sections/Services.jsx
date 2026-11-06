import { services } from '../data/offers'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I can make for you." className="bg-charcoal text-cream">
      <ul className="grid md:grid-cols-2 gap-x-16">
        {services.map((s, i) => (
          <Reveal as="li" key={s.t} className="flex gap-6 py-6 border-t border-cream/20">
            <span className="text-brown font-serif text-xl">0{i + 1}</span>
            <div><h3 className="font-serif text-2xl">{s.t}</h3><p className="text-sm text-cream/70 mt-1">{s.d}</p></div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

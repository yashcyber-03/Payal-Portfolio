import { collabs } from '../data/offers'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
export default function Collabs() {
  return (
    <Section id="collaborations" eyebrow="Brand collaborations" title="Past partnerships." intro="">
      <ol className="grid md:grid-cols-12 gap-y-10">
        {collabs.map((c, i) => (
          <Reveal as="li" key={c.id} className={`md:col-span-7 ${i % 2 ? 'md:col-start-6' : ''} border-t border-charcoal/25 pt-5`}>
            <p className="eyebrow">{c.sample ? `Sample placeholder · 0${c.id}` : `Brand collaboration · 0${c.id}`}</p>
            <h3 className="font-serif text-3xl md:text-5xl mt-2">{c.brand}</h3>
            <p className="mt-1 text-lg">{c.title}</p>
            <p className="mt-2 text-sm text-charcoal/70 max-w-md">{c.note}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

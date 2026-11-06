import { lifestyle } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
export default function Lifestyle() {
  return (
    <Section id="lifestyle" eyebrow="Lifestyle" title="Style, shopping and small rituals.">
      <ul className="columns-1 sm:columns-2 md:columns-3 gap-8 [&>li]:mb-10">
        {lifestyle.map((l) => (
          <Reveal as="li" key={l.id} className="break-inside-avoid">
            <Img src={l.img} alt={`${l.title} (illustrative sample)`} className={`w-full ${l.ar}`} />
            <p className="mt-3 text-sm"><span className="font-serif text-lg">{l.title}.</span> <span className="text-charcoal/60">{l.text}</span></p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

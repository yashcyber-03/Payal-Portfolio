import { travel } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
export default function Travel() {
  return (
    <Section id="travel" eyebrow="Travel notes" title="Postcards, not itineraries." className="bg-charcoal text-cream" intro="Sample destinations. Add real trips, places and stories when confirmed.">
      <ol className="space-y-20 md:space-y-28">
        {travel.map((t, i) => {
          const hero = i === 0, flip = i % 2 === 0
          return (
            <Reveal as="li" key={t.id} className={hero ? '' : 'md:grid md:grid-cols-12 md:gap-10 items-end'}>
              <Img src={t.img} alt={`${t.title} (illustrative sample)`} className={hero ? 'w-full aspect-[4/3] md:aspect-[21/9]' : `w-full aspect-[4/3] md:aspect-[5/4] md:col-span-7 ${flip ? 'md:order-2 md:col-start-6' : ''}`} />
              <div className={hero ? 'mt-6 md:grid md:grid-cols-12 md:gap-10' : `mt-5 md:mt-0 md:col-span-4 ${flip ? 'md:order-1 md:col-start-1' : 'md:col-start-9'}`}>
                <p className={`font-serif text-5xl text-grey/60 ${hero ? 'md:col-span-2' : ''}`}>{String(i + 1).padStart(2, '0')}</p>
                <div className={hero ? 'md:col-span-6' : 'mt-2'}>
                  <p className="eyebrow">{t.loc}</p>
                  <h3 className="font-serif text-3xl md:text-4xl mt-1">{t.title}</h3>
                  <p className="mt-3 text-cream/70 text-sm max-w-md">{t.text}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}

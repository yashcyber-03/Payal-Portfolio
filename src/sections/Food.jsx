import { useState } from 'react'
import { food, foodCats } from '../data/content'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
export default function Food() {
  const [cat, setCat] = useState('All')
  const items = cat === 'All' ? food : food.filter((f) => f.cat === cat)
  return (
    <Section id="journal" eyebrow="Café journal" title="Where the good coffee is." intro="Sample entries. Replace them with verified places, names and locations.">
      <div role="group" aria-label="Filter by category" className="flex gap-6 mb-10 text-sm">
        {foodCats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`pb-0.5 border-b transition-colors ${cat === c ? 'border-charcoal' : 'border-transparent text-grey hover:text-charcoal'}`}>{c}</button>
        ))}
      </div>
      <ul className="grid md:grid-cols-12 gap-x-8 gap-y-12">
        {items.map((f, i) => {
          const wide = i % 4 === 0 || i % 4 === 3
          return (
            <Reveal as="li" key={f.id} className={`group ${f.cls}`}>
              <div className="overflow-hidden bg-beige"><Img src={f.img} alt={`${f.title} (illustrative sample)`} className={`w-full ${f.ar} transition-transform duration-700 group-hover:scale-[1.03]`} /></div>
              <div className={`mt-4 ${wide ? 'md:flex md:justify-between md:gap-8' : ''}`}>
                <div><p className="eyebrow">{f.cat} · {f.loc}</p><h3 className="font-serif text-2xl mt-1">{f.title}</h3></div>
                <p className="text-sm text-charcoal/70 mt-1 md:max-w-xs">{f.text}</p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}

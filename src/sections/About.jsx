import { creator } from '../data/creator'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4"><Img src={creator.images.about} alt="Personal photograph (replaceable placeholder)" className="w-full aspect-[4/5]" /></Reveal>
        <Reveal className="md:col-span-6 md:col-start-6 md:pt-24" delay={0.1}>
          <p className="eyebrow mb-4">About me</p>
          <p className="font-serif text-3xl md:text-5xl leading-tight">{creator.aboutLead}</p>
          <p className="mt-6 text-cream/70 max-w-lg">{creator.aboutBody}</p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm border-t border-cream/20 pt-5">
            {creator.skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

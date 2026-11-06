import Reveal from './Reveal'
export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`px-6 md:px-12 lg:px-20 py-20 md:py-32 ${className}`}>
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="mb-12 md:mb-16 md:grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.98] tracking-tight">{title}</h2>
          </div>
          {intro && <p className="md:col-span-4 mt-4 md:mt-0 text-sm opacity-70">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

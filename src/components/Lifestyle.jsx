import React from 'react';
import { LOOKBOOK_ITEMS } from '../data/content';

export default function Lifestyle({ onOpenModal }) {
  return (
    <section id="lookbook" className="border-b border-rule bg-paper py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-10 sm:mb-14 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <span>// 04 &mdash; THE LOOKBOOK &amp; RITUALS</span>
          <span>CURATED LIVING &bull; ESSENTIALS</span>
          <span>PLATES: 04</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
              Outfits, Objects &amp; Morning Habits
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ink font-normal leading-tight">
              Mindful Everyday Style.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
            From relaxed linen silhouettes that soften with every wash to ceramics that bring quiet joy to breakfast. An ode to finding elegance without pretension.
          </p>
        </div>

        {/* 4 Lookbook Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LOOKBOOK_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => onOpenModal && onOpenModal({
                src: item.image,
                title: `${item.title} — ${item.category}`,
                category: item.tag,
                caption: item.caption
              })}
              className="group cursor-pointer border border-rule bg-paper-card hover:border-ink transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="img-zoom-box aspect-[3/4] border-b border-rule bg-paper-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-paper/95 border border-rule px-2 py-0.5 font-mono text-[9px] text-ink uppercase tracking-wider">
                    {item.tag}
                  </div>
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 font-mono text-[10px] text-white">
                    <span>[INSPECT PLATE 0{idx + 1}] &nearr;</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[9px] text-ink-light">
                    <span>PLATE 0{idx + 1}</span>
                    <span>{item.category}</span>
                  </div>

                  <h3 className="font-serif text-xl text-ink font-medium group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-ink-muted font-sans font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="p-3 border-t border-rule bg-paper-subtle font-mono text-[9px] text-ink-light flex items-center justify-between">
                <span>INTENTIONAL LIVING</span>
                <span>&rarr;</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

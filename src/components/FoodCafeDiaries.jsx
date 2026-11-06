import React, { useState } from 'react';
import { CAFE_CITIES, CAFES } from '../data/content';

export default function FoodCafeDiaries({ onOpenModal }) {
  const [selectedCity, setSelectedCity] = useState('All');

  const filtered = selectedCity === 'All'
    ? CAFES
    : CAFES.filter(c => c.city.toLowerCase() === selectedCity.toLowerCase());

  return (
    <section id="cafes" className="border-b border-rule bg-paper py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-10 sm:mb-14 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <span>// 02 &mdash; THE CAFÉ EDIT</span>
          <span>SPECIALTY COFFEE &bull; INDIA</span>
          <span>COUNT: {filtered.length} LOCATIONS</span>
        </div>

        {/* Section Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
              Curated Roasters &amp; Bakeries
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ink font-normal leading-tight">
              Where to Find the Best Brews.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
            A personal index of independent third-wave roasters, quiet courtyards, and artisanal sourdough counters I return to time and again.
          </p>
        </div>

        {/* Interactive City Filter Bar */}
        <div className="flex items-center gap-2 sm:gap-3 border-b border-rule pb-4 mb-10 overflow-x-auto font-mono text-xs scrollbar-none">
          <span className="text-ink-light uppercase text-[10px] mr-2">CITY FILTER:</span>
          {CAFE_CITIES.map((city) => {
            const isActive = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`py-1 px-3 border transition-colors ${
                  isActive
                    ? 'border-ink bg-ink text-paper font-bold'
                    : 'border-rule bg-paper-subtle text-ink-muted hover:border-ink hover:text-ink'
                }`}
              >
                [{city.toUpperCase()}]
              </button>
            );
          })}
        </div>

        {/* Café Cards Grid (2 cols on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((cafe) => (
            <article
              key={cafe.id}
              onClick={() => onOpenModal && onOpenModal({
                src: cafe.image,
                title: `${cafe.name} — ${cafe.city}`,
                category: `${cafe.tag} • ${cafe.area}`,
                caption: `${cafe.vibe}. Must order: ${cafe.mustOrder}`,
                signature: cafe.tip
              })}
              className="group cursor-pointer border border-rule bg-paper-card hover:border-ink transition-colors flex flex-col justify-between"
            >
              {/* Photo Box */}
              <div>
                <div className="img-zoom-box aspect-[16/10] border-b border-rule bg-paper-dark">
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-paper/95 border border-rule px-2 py-0.5 font-mono text-[9px] text-ink uppercase tracking-wider">
                    {cafe.city}
                  </div>
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 font-mono text-[10px] text-white">
                    <span>[VIEW DISPATCH] &nearr;</span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-accent uppercase tracking-wider block">
                      {cafe.tag} &bull; {cafe.area}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium group-hover:text-accent transition-colors">
                      {cafe.name}
                    </h3>
                    <p className="font-mono text-[11px] text-ink-light italic">
                      Ambiance: {cafe.vibe}
                    </p>
                  </div>

                  {/* Must Order Highlight */}
                  <div className="pt-2 border-t border-rule space-y-1 text-xs">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light block">
                      RECOMMENDED ORDER:
                    </span>
                    <p className="text-ink font-medium leading-snug">
                      {cafe.mustOrder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Tip Bar */}
              <div className="p-4 border-t border-rule bg-paper-subtle font-mono text-[10px] text-ink-muted">
                <span className="text-ink font-bold block mb-0.5">CREATOR TIP:</span>
                <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
                  {cafe.tip}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Suggestion Strip */}
        <div className="mt-12 p-5 border border-rule bg-paper-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-ink font-bold block mb-0.5">// KNOW A SPECIALTY SPOT I MISSED?</span>
            <p className="text-ink-muted font-sans text-xs">
              Always scouting newly opened micro-roasteries, artisanal bakes, and peaceful tables.
            </p>
          </div>
          <a
            href="#contact"
            className="py-2.5 px-4 bg-ink text-paper hover:bg-ink-deep text-xs uppercase tracking-wider flex-shrink-0 transition-colors"
          >
            Submit Café Feature &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

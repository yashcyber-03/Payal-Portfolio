import React from 'react';
import { TRAVEL_JOURNALS } from '../data/content';

export default function TravelExperiences({ onOpenModal }) {
  return (
    <section id="travel" className="border-b border-rule bg-paper-subtle py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-10 sm:mb-14 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <span>// 03 &mdash; TRAVEL DISPATCHES</span>
          <span>SLOW DESTINATIONS &bull; INDIA</span>
          <span>FIELD ENTRIES: 04</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
              Field Notes &amp; Getaways
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ink font-normal leading-tight">
              Slow Journeys Across India.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
            Unpacked suitcases, early morning light, and storied architecture. Exploring destinations with an eye for regional craft, quiet coves, and local soul.
          </p>
        </div>

        {/* Travel Journals Grid (2 cols large cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {TRAVEL_JOURNALS.map((journal) => (
            <article
              key={journal.id}
              onClick={() => onOpenModal && onOpenModal({
                src: journal.image,
                title: `${journal.destination} — ${journal.region}`,
                category: `Field Notes • ${journal.season}`,
                caption: journal.blurb,
                quote: journal.highlights.join(" • ")
              })}
              className="group cursor-pointer border border-rule bg-paper hover:border-ink transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame with Coordinates Badge */}
                <div className="img-zoom-box aspect-[16/10] border-b border-rule bg-paper-dark">
                  <img
                    src={journal.image}
                    alt={journal.destination}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-paper/95 border border-rule px-2 py-0.5 font-mono text-[9px] text-ink uppercase tracking-wider">
                    {journal.coords}
                  </div>
                  <div className="absolute top-3 right-3 bg-paper/95 border border-rule px-2 py-0.5 font-mono text-[9px] text-accent uppercase tracking-wider">
                    {journal.season}
                  </div>
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 font-mono text-xs text-white">
                    <span>[EXPAND PHOTO DISPATCH] &nearr;</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-ink-light uppercase tracking-wider block">
                      {journal.region}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium group-hover:text-accent transition-colors">
                      {journal.destination}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
                    {journal.blurb}
                  </p>
                </div>
              </div>

              {/* Highlights Pill Strip */}
              <div className="p-4 border-t border-rule bg-paper-subtle space-y-1.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light block">
                  MEMORABLE MOMENTS:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-ink">
                  {journal.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-0.5 bg-paper border border-rule text-[11px]">
                      &bull; {h}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Hotel / Villa Review Inquiry Strip */}
        <div className="mt-12 p-6 border border-rule bg-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-accent font-bold block mb-1">
              // BOUTIQUE HOTEL &amp; VILLA RESIDENCIES
            </span>
            <p className="font-sans text-xs text-ink-muted max-w-xl">
              Partnering with unique heritage properties, eco-retreats, and boutique stays to create high-resolution stills, cinematic reels, and authentic story coverage.
            </p>
          </div>
          <a
            href="#collabs"
            className="py-2.5 px-5 bg-ink text-paper hover:bg-ink-deep text-xs uppercase tracking-wider flex-shrink-0 transition-colors"
          >
            Inquire Residency &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

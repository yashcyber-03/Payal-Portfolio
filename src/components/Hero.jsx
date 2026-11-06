import React, { useState } from 'react';
import { CREATOR, QUICK_STATS } from '../data/content';

export default function Hero({ onOpenModal }) {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
      caption: "Morning light in South Kolkata. Unhurried coffee and 35mm film frames.",
      tag: "SHOT 01 / PORTRAIT"
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85",
      caption: "Espresso steam and morning pour-overs at the neighborhood roastery.",
      tag: "SHOT 02 / ROASTERY"
    }
  ];

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const currentImg = images[activeImgIdx];

  return (
    <section id="home" className="border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        
        {/* Top Folio Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3 mb-8 sm:mb-12 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>PORTFOLIO REF: PB-2026-IND</span>
          </div>
          <div className="hidden sm:block">
            <span>KOLKATA • MUMBAI • GOA • BENGALURU</span>
          </div>
          <div>
            <span>{CREATOR.availability}</span>
          </div>
        </div>

        {/* Asymmetrical Grid: 7 Cols Typography / 5 Cols Visual Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Typography & Introduction (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block">
                // LIFESTYLE &amp; CONTENT CREATOR
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink font-normal leading-[1.02] tracking-tight">
                Life, Through <br />
                <span className="font-serif italic font-light text-ink-muted">My Lens.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-ink-muted font-sans font-light leading-relaxed max-w-xl">
              {CREATOR.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs uppercase tracking-wider">
              <a
                href="#cafes"
                className="py-3 px-6 bg-ink text-paper hover:bg-ink-deep hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Browse The Café Edit</span>
                <span>&darr;</span>
              </a>

              <a
                href="#collabs"
                className="py-3 px-6 border border-ink text-ink hover:bg-paper-dark transition-colors flex items-center gap-2"
              >
                <span>Work With Me</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Developer Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-rule font-mono text-[11px]">
              {QUICK_STATS.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-ink-light block text-[9px] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-ink font-medium block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Photo Frame (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div
              onClick={() => onOpenModal && onOpenModal({
                src: currentImg.src,
                title: "Payal Biswas — Creator Portrait",
                category: currentImg.tag,
                caption: currentImg.caption
              })}
              className="img-zoom-box aspect-[3/4] border border-rule cursor-pointer group bg-paper-dark"
            >
              <img
                src={currentImg.src}
                alt="Payal Biswas Editorial Portrait"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-ink/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5 font-mono text-xs text-white">
                <span>[CLICK TO INSPECT FULL RESOLUTION] &nearr;</span>
              </div>
            </div>

            {/* Frame Controls & Specs */}
            <div className="flex items-center justify-between font-mono text-[10px] text-ink-muted border-t border-rule pt-2">
              <div className="flex items-center gap-2">
                <span>PLATE:</span>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIdx(idx)}
                    className={`px-1.5 py-0.5 border ${
                      activeImgIdx === idx
                        ? 'border-ink text-ink font-bold bg-paper-dark'
                        : 'border-rule text-ink-light hover:text-ink'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
              <span>{currentImg.tag}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

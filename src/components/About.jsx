import React from 'react';
import { ABOUT_DATA, CREATOR } from '../data/content';

export default function About({ onOpenModal }) {
  const portrait = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=85";

  return (
    <section id="about" className="border-b border-rule bg-paper-subtle py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-12 sm:mb-16 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <span>// 01 &mdash; CREATOR STORY</span>
          <span>DOCUMENTARIAN</span>
          <span>REF: BIO_2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Studio Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div
              onClick={() => onOpenModal && onOpenModal({
                src: portrait,
                title: "Payal Biswas — Personal Profile",
                category: "Behind the Lens",
                caption: "Documenting quiet corners, specialty coffee roasteries, and mindful travel."
              })}
              className="img-zoom-box aspect-[4/5] border border-rule cursor-pointer group bg-paper-dark"
            >
              <img
                src={portrait}
                alt="Payal Biswas Profile"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 font-mono text-xs text-white">
                <span>[INSPECT PHOTOGRAPH] &nearr;</span>
              </div>
            </div>

            {/* Technical Metadata Card */}
            <div className="p-4 border border-rule bg-paper font-mono text-[11px] text-ink-muted space-y-2">
              <div className="flex justify-between border-b border-rule pb-1.5 text-[9px] uppercase tracking-wider text-ink-light">
                <span>CREATOR IDENTIFIER</span>
                <span>STATUS: ACTIVE</span>
              </div>
              <p className="text-ink font-sans text-xs">
                &ldquo;A camera teaches you to look closer. When you slow down, even morning steam from a cup becomes pure poetry.&rdquo;
              </p>
              <div className="flex items-center justify-between pt-1 text-[10px] text-accent">
                <span>{CREATOR.handle}</span>
                <span>{CREATOR.base}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Passion Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block">
                {ABOUT_DATA.greeting}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-ink font-normal leading-tight">
                {ABOUT_DATA.title}
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-ink-muted font-sans font-light leading-relaxed">
              {ABOUT_DATA.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 4 Creative Pillars */}
            <div className="pt-6 border-t border-rule space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-light block">
                CORE CONTENT PILLARS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_DATA.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 border border-rule bg-paper hover:border-ink transition-colors">
                    <span className="font-mono text-[10px] text-accent font-bold block mb-1">
                      [0{i + 1}]
                    </span>
                    <h3 className="font-serif text-base text-ink font-medium mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-ink-muted font-sans font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs text-ink uppercase tracking-wider">
              <a href="#cafes" className="hover-line text-accent">
                &rarr; Explore Café Edit
              </a>
              <a href="#travel" className="hover-line">
                &rarr; View Travel Stories
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

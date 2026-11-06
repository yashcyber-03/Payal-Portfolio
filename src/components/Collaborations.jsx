import React from 'react';
import { SERVICES, CREATOR } from '../data/content';

export default function Collaborations() {
  return (
    <section id="collabs" className="border-b border-rule bg-paper-subtle py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-10 sm:mb-14 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
          <span>// 05 &mdash; BRAND PARTNERSHIPS</span>
          <span>COMMERCIAL SERVICES</span>
          <span>MEDIA KIT 2026</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
              Work With Payal
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ink font-normal leading-tight">
              Curated Brand Collaborations.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
            I partner with select lifestyle, hospitality, and specialty food brands to create authentic visual narratives that resonate with a community of aesthetics-driven followers.
          </p>
        </div>

        {/* Concept Notice Bar */}
        <div className="p-4 border border-rule bg-paper font-mono text-[11px] text-ink-muted mb-10">
          <span className="text-ink font-bold block mb-1">
            // TRANSPARENCY &amp; ETHICS DISCLOSURE:
          </span>
          <p className="font-sans text-xs leading-relaxed font-light">
            This portfolio is an independent concept demonstration. All package outlines, pricing structures, and past metrics are concept placeholders. For real-world campaign quotes, verified demographics, or media kits, please connect directly via Instagram{' '}
            <a
              href={CREATOR.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline hover:text-accent font-medium"
            >
              {CREATOR.handle}
            </a>.
          </p>
        </div>

        {/* 4 Partnership Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {SERVICES.map((srv) => (
            <div
              key={srv.code}
              className="p-6 border border-rule bg-paper space-y-3 hover:border-ink transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-accent font-bold">
                  [{srv.code}]
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted font-sans font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-rule font-mono text-[10px] text-ink-light flex items-center justify-between">
                <span>TAILORED DELIVERABLES</span>
                <span>INQUIRE &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Media Kit CTA Banner */}
        <div className="p-8 border border-rule bg-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">
              MEDIA KIT &amp; RATE CARD
            </span>
            <h4 className="font-serif text-2xl text-ink font-medium">
              Planning an Upcoming Campaign or Launch?
            </h4>
            <p className="text-xs text-ink-muted font-sans font-light">
              Send your brief, timeline, and deliverables for a custom concept proposal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="#contact"
              className="py-3 px-6 bg-ink text-paper hover:bg-ink-deep transition-colors uppercase tracking-wider"
            >
              Send Campaign Brief &rarr;
            </a>
            <a
              href={CREATOR.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 border border-ink text-ink hover:bg-paper-dark transition-colors uppercase tracking-wider"
            >
              DM on Instagram &nearr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { INSTAGRAM_SNAPS, CREATOR } from '../data/content';

export default function InstagramGrid({ onOpenModal }) {
  return (
    <section className="border-b border-rule bg-paper-subtle py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-rule pb-4 mb-8">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-1">
              // LIVE COMMUNITY FEED
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-normal">
              Latest On Instagram
            </h3>
          </div>

          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-ink hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <span>Follow {CREATOR.handle}</span>
            <span>&nearr;</span>
          </a>
        </div>

        {/* 6 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_SNAPS.map((snap, i) => (
            <div
              key={snap.id}
              onClick={() => onOpenModal && onOpenModal({
                src: snap.image,
                title: `${CREATOR.handle} — Post 0${i + 1}`,
                category: snap.tag,
                caption: snap.caption
              })}
              className="img-zoom-box aspect-square border border-rule cursor-pointer group bg-paper-dark"
            >
              <img
                src={snap.image}
                alt={snap.caption}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-ink/75 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-paper font-mono text-[10px]">
                <span className="text-accent">{snap.tag}</span>
                <p className="font-sans line-clamp-3 leading-snug text-paper/90">
                  {snap.caption}
                </p>
                <span className="text-ink-light">[EXPAND] &nearr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

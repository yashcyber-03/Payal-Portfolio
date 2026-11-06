import React, { useState } from 'react';
import { CREATOR } from '../data/content';

export default function DisclaimerBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <aside className="bg-paper-dark border-b border-rule font-mono text-[10px] text-ink-muted py-1.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
        <p className="text-center sm:text-left leading-normal">
          <span className="text-ink font-semibold mr-1">// CONCEPT SPECIFICATION:</span>
          Independent portfolio concept designed for lifestyle creator{' '}
          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline hover:text-accent font-medium"
          >
            {CREATOR.handle}
          </a>
          . All metrics, collaboration tiers, and statistics are demonstration placeholders.
        </p>
        <button
          onClick={() => setClosed(true)}
          className="text-ink-muted hover:text-ink text-[10px] uppercase tracking-wider py-0.5 px-1.5 transition-colors flex-shrink-0"
        >
          [Dismiss &times;]
        </button>
      </div>
    </aside>
  );
}

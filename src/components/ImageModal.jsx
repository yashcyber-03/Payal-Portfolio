import React, { useEffect } from 'react';
import { CREATOR } from '../data/content';

export default function ImageModal({ data, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (data) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKey);
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 font-mono">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink-deep/90 backdrop-blur-sm"
      />

      {/* Modal Frame */}
      <div className="relative z-10 bg-paper border border-rule max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Top-Right Close Tag */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-[10px] uppercase tracking-wider bg-paper/95 text-ink py-1 px-2.5 border border-rule hover:bg-ink hover:text-paper transition-colors"
          aria-label="Close modal"
        >
          [ESC &times;]
        </button>

        {/* Left: Full Photo (60%) */}
        <div className="md:w-3/5 bg-ink flex items-center justify-center min-h-[280px] md:min-h-[460px]">
          <img
            src={data.src}
            alt={data.title || "Visual plate"}
            className="w-full h-full object-cover max-h-[85vh]"
          />
        </div>

        {/* Right: Technical & Creative Metadata (40%) */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-accent block mb-1">
                // {data.category || "VISUAL ARCHIVE ENTRY"}
              </span>
              <h3 className="font-serif text-2xl text-ink font-medium leading-snug">
                {data.title}
              </h3>
            </div>

            {data.caption && (
              <p className="font-sans text-xs text-ink-muted leading-relaxed font-light">
                {data.caption}
              </p>
            )}

            {data.signature && (
              <div className="p-3 border border-rule bg-paper-subtle space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-ink-light block">
                  CREATOR OBSERVATION:
                </span>
                <p className="font-sans text-xs text-ink font-light italic">
                  &ldquo;{data.signature}&rdquo;
                </p>
              </div>
            )}

            {data.quote && (
              <div className="pt-2 border-t border-rule text-xs text-ink-light font-mono">
                <span className="block text-[9px] text-accent mb-0.5">HIGHLIGHTS:</span>
                <p className="text-ink text-xs">{data.quote}</p>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-rule space-y-2 text-xs uppercase tracking-wider">
            <a
              href={CREATOR.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 bg-ink text-paper hover:bg-ink-deep transition-colors"
            >
              View on Instagram &nearr;
            </a>
            <button
              onClick={onClose}
              className="block w-full text-center py-2 border border-rule text-ink-muted hover:text-ink hover:bg-paper-dark transition-colors text-[11px]"
            >
              Close Plate Inspector
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

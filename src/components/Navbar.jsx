import React, { useState, useEffect } from 'react';
import { CREATOR } from '../data/content';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST time (UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(now.toLocaleTimeString('en-GB', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { num: '01', label: 'About', href: '#about' },
    { num: '02', label: 'Café Edit', href: '#cafes' },
    { num: '03', label: 'Travel', href: '#travel' },
    { num: '04', label: 'Lookbook', href: '#lookbook' },
    { num: '05', label: 'Collabs', href: '#collabs' },
    { num: '06', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-rule font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="font-display text-xl sm:text-2xl text-ink font-semibold tracking-tight group-hover:text-accent transition-colors">
              PAYAL BISWAS
            </span>
            <span className="hidden md:inline text-[10px] text-ink-muted uppercase tracking-wider pl-3 border-l border-rule">
              Creator Journal
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] text-ink-muted">
            {navLinks.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="hover:text-ink transition-colors py-1 hover-line"
              >
                <span className="text-ink-light mr-1">[{item.num}]</span>
                <span className="font-sans font-medium uppercase tracking-wider">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: Live Clock & Direct Instagram Link */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Live Clock Pill */}
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-ink-muted bg-paper-subtle border border-rule px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{time || 'INDIA • LIVE'}</span>
            </div>

            <a
              href={CREATOR.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-sans font-medium uppercase tracking-wider text-ink hover:text-accent transition-colors flex items-center gap-1"
            >
              <span>{CREATOR.handle}</span>
              <span>&nearr;</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-xs font-mono uppercase tracking-wider py-1 px-2 border border-rule hover:bg-paper-dark transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? '[X]' : '[MENU]'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-b border-rule px-6 py-6 space-y-4 font-mono">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.num}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 border-b border-rule text-xs hover:text-accent"
              >
                <span className="font-sans uppercase tracking-wider text-ink">{item.label}</span>
                <span className="text-ink-muted">[{item.num}] &rarr;</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-ink-muted">
            <span>{CREATOR.base}</span>
            <span>{time}</span>
          </div>
        </div>
      )}
    </header>
  );
}

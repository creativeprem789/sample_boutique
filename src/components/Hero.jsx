import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { neu } from '../neu';

export default function Hero() {
  const handleExplore = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero-pattern w-full min-h-[88vh] flex flex-col items-center justify-center text-center"
      style={{ padding: '5rem 1.5rem', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div className="hero-content flex flex-col items-center gap-6" style={{ maxWidth: '48rem', width: '100%', margin: '0 auto' }}>

        {/* ── Eyebrow ─────────────────────────────────────────── */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs tracking-widest uppercase"
          style={{
            boxShadow: neu.raisedSm,
            color: 'var(--accent-mauve)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            letterSpacing: '0.18em',
            background: 'var(--bg)',
          }}
        >
          <span style={{ color: 'var(--accent-rose)' }}>✦</span>
          &nbsp;Exhibition Road, Patna&nbsp;
          <span style={{ color: 'var(--accent-rose)' }}>✦</span>
        </div>

        {/* ── Headline ─────────────────────────────────────────── */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          style={{ color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.15 }}
        >
          Draped in Elegance.
          <br />
          <em style={{ color: 'var(--accent-rose)', fontStyle: 'italic' }}>Crafted for You.</em>
        </h1>

        {/* ── Subheadline ──────────────────────────────────────── */}
        <p
          className="text-base sm:text-lg max-w-xl leading-relaxed"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
        >
          Exclusive bridal &amp; ethnic wear — curated with love, tailored to perfection.
          <br className="hidden sm:block" />
          <span style={{ color: 'var(--accent-mauve)', fontWeight: 400 }}>Exhibition Road, Patna.</span>
        </p>

        {/* ── Divider Ornament ─────────────────────────────────── */}
        <div className="flex items-center gap-3 my-2" style={{ color: 'var(--shadow-dark)' }}>
          <div style={{ height: '1px', width: '48px', background: 'var(--shadow-dark)' }} />
          <span className="text-lg" style={{ color: 'var(--accent-rose)' }}>✦</span>
          <div style={{ height: '1px', width: '48px', background: 'var(--shadow-dark)' }} />
        </div>

        {/* ── CTA Buttons ──────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-2">
          <button
            onClick={handleExplore}
            className="btn-purple"
            style={{ width: '100%', maxWidth: '220px' }}
          >
            Explore Collections
          </button>

          <a
            href="https://wa.me/918804706924"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ maxWidth: '220px', width: '100%' }}
          >
            <MessageCircle size={17} fill="currentColor" />
            WhatsApp Us
          </a>
        </div>

        {/* ── Scroll Hint ──────────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center gap-1 animate-bounce opacity-50">
          <span className="text-xs tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.15em' }}>SCROLL</span>
          <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>
    </section>
  );
}

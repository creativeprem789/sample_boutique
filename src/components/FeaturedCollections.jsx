import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { collections } from '../data';
import { neu } from '../neu';

export default function FeaturedCollections({ onCategorySelect }) {
  return (
    <section id="collections" className="w-full" style={{ background: 'var(--bg)', padding: '4rem 0' }}>
      <div className="container-max">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-mauve)', fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Curated For You
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl"
            style={{ color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Featured Collections
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
            <span style={{ color: 'var(--accent-rose)', fontSize: '1rem' }}>✦</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
          </div>
        </div>

        {/* ── Collection Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <CollectionCard
              key={col.id}
              collection={col}
              onCategorySelect={onCategorySelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ collection, onCategorySelect }) {
  const [hovered, setHovered] = useState(false);

  const bgStyle = {
    background: `radial-gradient(ellipse at 20% 30%, ${collection.accent}66 0%, transparent 65%),
                 radial-gradient(ellipse at 80% 70%, ${collection.accent}44 0%, transparent 55%),
                 var(--bg-alt)`,
  };

  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col"
      style={{
        boxShadow: hovered ? neu.cardHover : neu.raised,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        background: 'var(--bg)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        className="w-full aspect-video flex flex-col items-center justify-center relative overflow-hidden"
        style={{ ...bgStyle, boxShadow: neu.inset }}
      >
        {collection.image ? (
          <img
            src={collection.image}
            alt={collection.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Ccircle cx='25' cy='25' r='1.5' fill='%23${collection.accent.replace('#','')}' fill-opacity='0.35'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="text-6xl opacity-15 z-10">✦</div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3
          className="font-serif text-xl"
          style={{ color: 'var(--text-primary)', fontWeight: 500 }}
        >
          {collection.title}
        </h3>
        <p
          className="text-xs"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
        >
          {collection.subtitle}
        </p>
        <button
          onClick={() => onCategorySelect(collection.category)}
          className="btn-outline-purple"
          style={{
            alignSelf: 'flex-start',
            marginTop: '0.75rem',
            padding: '0.4rem 1.25rem',
            fontSize: '0.8rem',
            borderRadius: '10px',
            borderWidth: '1px'
          }}
        >
          View All
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

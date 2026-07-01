import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data';
import { neu } from '../neu';

export default function Testimonials() {
  return (
    <section className="w-full" style={{ background: 'var(--bg)', padding: '4rem 0' }}>
      <div className="container-max">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-mauve)', fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Loved By Many
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl"
            style={{ color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Happy Brides & Families
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
            <span style={{ color: 'var(--accent-rose)', fontSize: '1rem' }}>✦</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
          </div>
        </div>

        {/* ── Scrollable Reviews ───────────────────────────────── */}
        <div className="h-scroll">
          {testimonials.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: 'var(--bg)',
        boxShadow: neu.raised,
        minWidth: '300px',
        maxWidth: '340px',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            size={15}
            className="star-filled"
          />
        ))}
      </div>

      {/* Review text */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontWeight: 300, fontStyle: 'italic' }}
      >
        "{review.review}"
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--shadow-dark)', opacity: 0.5 }} />

      {/* Customer info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{
            boxShadow: neu.inset,
            background: 'var(--bg)',
            color: 'var(--accent-mauve)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
          }}
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <div
            className="font-medium text-sm"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}
          >
            {review.name}
          </div>
          <div
            className="text-xs"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            {review.location}
          </div>
        </div>
      </div>
    </div>
  );
}

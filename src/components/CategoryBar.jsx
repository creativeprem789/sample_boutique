import React from 'react';
import { categories } from '../data';
import { neu } from '../neu';

export default function CategoryBar({ selected, onSelect }) {
  return (
    <section className="w-full" style={{ background: 'var(--bg)', padding: '1.5rem 0' }}>
      <div className="container-max">
        <div className="category-scroll flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = selected === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelect(cat)}
                className="flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 outline-none border-0"
                style={{
                  background: isActive ? 'var(--purple)' : 'var(--bg)',
                  boxShadow: isActive ? 'inset 1px 1px 3px rgba(0,0,0,0.2)' : neu.raisedSm,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: isActive ? 500 : 400,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  transform: isActive ? 'scale(0.97)' : 'scale(1)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

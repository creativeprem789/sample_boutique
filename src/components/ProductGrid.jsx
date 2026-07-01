import React from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';

export default function ProductGrid({ selectedCategory, wishlist, onToggleWishlist, onProductClick }) {
  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="w-full" style={{ padding: '3rem 0' }}>
      <div className="container-max">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center mb-10">
          <h2
            className="font-serif text-3xl md:text-4xl"
            style={{ color: 'var(--text-primary)', fontWeight: 500 }}
          >
            {selectedCategory === 'All' ? 'Our Collections' : selectedCategory}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
            <span style={{ color: 'var(--accent-rose)', fontSize: '1rem' }}>✦</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
          </div>
          <p
            className="text-sm mt-3"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
          </p>
        </div>

        {/* ── Grid ─────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onClick={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 rounded-2xl"
            style={{ boxShadow: '6px 6px 14px var(--shadow-dark), -6px -6px 14px #ffffff' }}
          >
            <div className="text-4xl mb-4 opacity-30">✦</div>
            <p className="font-serif text-xl" style={{ color: 'var(--text-muted)' }}>
              No items in this category yet.
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
              Check back soon or enquire via WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

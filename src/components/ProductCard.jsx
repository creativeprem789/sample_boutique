import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { neu } from '../neu';

export default function ProductCard({ product, isWishlisted, onToggleWishlist, onClick }) {
  const [hovered, setHovered] = useState(false);

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const text = encodeURIComponent(`Hi, I'm interested in ${product.name}`);
    window.open(`https://wa.me/918804706924?text=${text}`, '_blank');
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    onToggleWishlist(product.id);
  };

  // Build a decorative patterned background for the image placeholder
  const bgStyle = {
    background: `radial-gradient(circle at 30% 40%, ${product.accent}55 0%, transparent 60%),
                 radial-gradient(circle at 70% 60%, ${product.accent}33 0%, transparent 50%),
                 var(--bg-alt)`,
  };

  return (
    <div
      className="relative rounded-2xl p-4 cursor-pointer transition-all duration-300"
      style={{
        background: 'var(--bg)',
        boxShadow: hovered ? neu.cardHover : neu.raised,
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(product)}
    >
      {/* ── Image Wrapper ────────────────────────────────────── */}
      <div
        className="w-full aspect-square rounded-xl mb-4 flex items-center justify-center relative overflow-hidden"
        style={{
          ...bgStyle,
          boxShadow: neu.inset,
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <>
            {/* Decorative fabric-like pattern overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1.2' fill='%23${product.accent.replace('#','')}' fill-opacity='0.3'/%3E%3Ccircle cx='5' cy='5' r='0.8' fill='%23${product.accent.replace('#','')}' fill-opacity='0.2'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="text-center z-10 px-3">
              <div className="text-5xl mb-2 opacity-30">✦</div>
              <span
                className="font-serif text-sm italic"
                style={{ color: 'var(--text-muted)', fontWeight: 400 }}
              >
                {product.category}
              </span>
            </div>
          </>
        )}

        {/* Wishlist button on image */}
        <button
          className="absolute top-3 right-3 rounded-full p-2 transition-all duration-200"
          style={{
            background: 'var(--bg)',
            boxShadow: isWishlisted ? neu.insetSm : neu.raisedSm,
          }}
          onClick={handleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            size={15}
            style={{
              color: isWishlisted ? 'var(--purple)' : 'var(--text-muted)',
              fill: isWishlisted ? 'var(--purple)' : 'none',
              transition: 'all 0.2s ease',
            }}
          />
        </button>
      </div>

      {/* ── Product Info ────────────────────────────────────── */}
      <div className="flex flex-col gap-1.5 px-1">
        {/* Category tag */}
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 400, letterSpacing: '0.12em' }}
        >
          {product.category}
        </span>

        {/* Product name */}
        <h3
          className="font-serif text-lg leading-tight"
          style={{ color: 'var(--text-primary)', fontWeight: 500 }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <div
          className="text-base font-semibold"
          style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
        >
          {product.price}
        </div>

        {/* WhatsApp enquire button */}
        <button
          onClick={handleWhatsApp}
          className="btn-whatsapp-sm"
          style={{ marginTop: '0.5rem' }}
        >
          <MessageCircle size={14} fill="currentColor" />
          Enquire on WhatsApp
        </button>
      </div>
    </div>
  );
}

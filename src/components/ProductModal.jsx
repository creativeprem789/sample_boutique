import React, { useState } from 'react';
import { X, Heart, MessageCircle, Plus, Minus } from 'lucide-react';
import { neu } from '../neu';

export default function ProductModal({ product, isWishlisted, onToggleWishlist, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[2] || product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi, I'm interested in *${product.name}*.\nSize: ${selectedSize}, Color: ${selectedColor}, Qty: ${qty}`
    );
    window.open(`https://wa.me/919773587243?text=${text}`, '_blank');
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const bgStyle = {
    background: `radial-gradient(circle at 30% 40%, ${product.accent}55 0%, transparent 60%),
                 radial-gradient(circle at 70% 60%, ${product.accent}33 0%, transparent 50%),
                 var(--bg-alt)`,
  };

  return (
    <div className="modal-overlay" onClick={handleBackdrop}>
      <div
        className="modal-panel"
        style={{ boxShadow: neu.deepRaised }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close button ────────────────────────────────────── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 icon-btn z-10"
          style={{ boxShadow: neu.raisedSm }}
          aria-label="Close modal"
        >
          <X size={18} style={{ color: 'var(--text-secondary)' }} />
        </button>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* ── Image ─────────────────────────────────────────── */}
            <div
              className="aspect-square rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ ...bgStyle, boxShadow: neu.inset }}
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <div className="text-8xl mb-3 opacity-20">✦</div>
                  <span
                    className="font-serif text-lg italic"
                    style={{ color: 'var(--text-muted)', fontWeight: 400 }}
                  >
                    {product.category}
                  </span>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1.2' fill='%23${product.accent.replace('#','')}' fill-opacity='0.3'/%3E%3C/svg%3E")`,
                    }}
                  />
                </>
              )}
            </div>

            {/* ── Details ───────────────────────────────────────── */}
            <div className="flex flex-col gap-4">
              {/* Category tag */}
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.15em' }}
              >
                {product.category}
              </span>

              {/* Product name */}
              <h2
                className="font-serif text-2xl md:text-3xl leading-snug"
                style={{ color: 'var(--text-primary)', fontWeight: 500 }}
              >
                {product.name}
              </h2>

              {/* Price */}
              <div
                className="text-xl font-semibold"
                style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
              >
                {product.price}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                {product.description}
              </p>

              {/* ── Sizes ─────────────────────────────────────────── */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.14em', fontFamily: 'var(--font-sans)' }}>
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => {
                      const active = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 border-0 outline-none cursor-pointer"
                          style={{
                            background: active ? 'var(--purple)' : 'var(--bg)',
                            boxShadow: active ? 'inset 1px 1px 3px rgba(0,0,0,0.2)' : neu.raisedSm,
                            color: active ? '#ffffff' : 'var(--text-secondary)',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: active ? 500 : 400,
                            transform: active ? 'scale(0.97)' : 'scale(1)',
                          }}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Colors ────────────────────────────────────────── */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.14em', fontFamily: 'var(--font-sans)' }}>
                    Colour
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => {
                      const active = selectedColor === color;
                      return (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 border-0 outline-none cursor-pointer"
                          style={{
                            background: active ? 'var(--purple)' : 'var(--bg)',
                            boxShadow: active ? 'inset 1px 1px 3px rgba(0,0,0,0.2)' : neu.raisedSm,
                            color: active ? '#ffffff' : 'var(--text-secondary)',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: active ? 500 : 400,
                            transform: active ? 'scale(0.97)' : 'scale(1)',
                          }}
                        >
                          {color}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Quantity ──────────────────────────────────────── */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)', letterSpacing: '0.14em', fontFamily: 'var(--font-sans)' }}>
                  Quantity
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="icon-btn"
                    style={{ boxShadow: neu.raisedSm, width: '36px', height: '36px' }}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} style={{ color: 'var(--text-secondary)' }} />
                  </button>
                  <span
                    className="w-8 text-center font-medium"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                  >
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="icon-btn"
                    style={{ boxShadow: neu.raisedSm, width: '36px', height: '36px' }}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} style={{ color: 'var(--text-secondary)' }} />
                  </button>
                </div>
              </div>

              {/* ── Action Buttons ────────────────────────────────── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.75rem' }}>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={isWishlisted ? 'btn-purple' : 'btn-outline-purple'}
                  style={{ width: '100%', borderRadius: '12px' }}
                >
                  <Heart
                    size={16}
                    style={{
                      fill: isWishlisted ? '#ffffff' : 'none',
                      color: isWishlisted ? '#ffffff' : 'var(--purple)',
                    }}
                  />
                  {isWishlisted ? '✓ In Wishlist' : 'Add to Wishlist'}
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="btn-whatsapp"
                  style={{ width: '100%', borderRadius: '12px' }}
                >
                  <MessageCircle size={16} fill="currentColor" />
                  Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

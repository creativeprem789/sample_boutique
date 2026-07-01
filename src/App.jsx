import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import FeaturedCollections from './components/FeaturedCollections';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState(new Set());
  const [cartCount, setCartCount] = useState(0);
  const [modalProduct, setModalProduct] = useState(null);

  // ── Wishlist toggle ────────────────────────────────────────────────────────
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) next.delete(productId);
      else next.add(productId);
      return next;
    });
  };

  // ── Modal body scroll lock ─────────────────────────────────────────────────
  useEffect(() => {
    if (modalProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalProduct]);

  // ── Category select (also scrolls to products) ─────────────────────────────
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* ── Navigation ──────────────────────────────────────── */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.size}
        onCartClick={() => setCartCount((c) => Math.max(0, c))}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <Hero />

      {/* ── Featured Collections ─────────────────────────────── */}
      <FeaturedCollections onCategorySelect={handleCategorySelect} />

      {/* ── Category Filter ──────────────────────────────────── */}
      <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* ── Product Grid ─────────────────────────────────────── */}
      <ProductGrid
        selectedCategory={selectedCategory}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onProductClick={setModalProduct}
      />

      {/* ── Why Us ───────────────────────────────────────────── */}
      <WhyUs />

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── Contact ──────────────────────────────────────────── */}
      <Contact />

      {/* ── Footer ───────────────────────────────────────────── */}
      <Footer />

      {/* ── Product Modal (portal-like, rendered at end of DOM) ─ */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          isWishlisted={wishlist.has(modalProduct.id)}
          onToggleWishlist={toggleWishlist}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
}

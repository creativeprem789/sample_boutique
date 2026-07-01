import React, { useState } from 'react';
import {
  Search, Heart, ShoppingBag, Menu, X,
} from 'lucide-react';
import { navLinks } from '../data';
import { neu } from '../neu';

export default function Navbar({ cartCount, wishlistCount, onCartClick }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full"
        style={{ background: 'var(--bg)', boxShadow: neu.raised }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Left: Desktop Nav Links ─────────────────────── */}
            <div className="hidden md:flex items-center gap-6 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-sans transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)', fontWeight: 400 }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-rose)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── Center: Logo ────────────────────────────────── */}
            <div className="flex-1 flex justify-center md:justify-center">
              <a href="#home" className="text-center">
                <span
                  className="font-serif text-2xl md:text-3xl tracking-wide"
                  style={{ color: 'var(--text-primary)', fontWeight: 500, letterSpacing: '0.05em' }}
                >
                  Vachi Boutique
                </span>
                <div
                  className="text-xs tracking-widest text-center hidden sm:block"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '0.2em' }}
                >
                  PATNA · BIHAR
                </div>
              </a>
            </div>

            {/* ── Right: Icon Actions ──────────────────────────── */}
            <div className="flex items-center gap-2 flex-1 justify-end">
              {/* Search */}
              <button
                className="icon-btn hidden sm:flex"
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={17} style={{ color: 'var(--text-secondary)' }} />
              </button>

              {/* Wishlist */}
              <button className="icon-btn relative hidden sm:flex" aria-label="Wishlist">
                 <Heart size={17} style={{ color: wishlistCount > 0 ? 'var(--purple)' : 'var(--text-secondary)' }} />
                {wishlistCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center"
                    style={{ background: 'var(--purple)', color: '#fff', fontSize: '10px' }}
                  >
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                className="btn-outline-purple relative hidden sm:flex"
                style={{
                  padding: '0.4rem 1.25rem',
                  fontSize: '0.82rem',
                  borderRadius: '20px',
                  gap: '0.4rem',
                  borderWidth: '1.5px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={onCartClick}
                aria-label="Cart"
              >
                <ShoppingBag size={15} style={{ transition: 'color 0.2s ease' }} />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    style={{ background: 'var(--purple)', color: '#fff', fontSize: '10px' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger */}
              <button
                className="icon-btn md:hidden"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} style={{ color: 'var(--text-primary)' }} />
              </button>
            </div>
          </div>

          {/* ── Search Bar ──────────────────────────────────────── */}
          {searchOpen && (
            <div className="pb-3 px-2 hidden sm:block">
              <input
                type="text"
                placeholder="Search lehengas, sarees, suits…"
                className="neu-input"
                autoFocus
              />
            </div>
          )}
        </div>
      </nav>

      {/* ── Mobile Drawer Overlay ─────────────────────────────── */}
      {drawerOpen && (
        <>
          <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />
          <div className="drawer flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                Menu
              </span>
              <button className="icon-btn" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                <X size={18} style={{ color: 'var(--text-secondary)' }} />
              </button>
            </div>

            {/* Logo */}
            <div className="text-center py-2">
              <div className="font-serif text-2xl" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                Vachi Boutique
              </div>
              <div className="text-xs tracking-widest mt-1" style={{ color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
                PATNA · BIHAR
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}
                  onClick={() => setDrawerOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = neu.insetSm;
                    e.currentTarget.style.color = 'var(--accent-rose)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Drawer Icons Row */}
            <div className="flex gap-3 justify-center mt-auto pt-4" style={{ borderTop: '1px solid var(--shadow-dark)' }}>
              <button className="icon-btn" aria-label="Search">
                <Search size={17} style={{ color: 'var(--text-secondary)' }} />
              </button>
              <button className="icon-btn relative" aria-label="Wishlist">
                <Heart size={17} style={{ color: 'var(--accent-rose)' }} />
              </button>
              <button className="icon-btn relative" aria-label="Cart" onClick={() => { setDrawerOpen(false); onCartClick?.(); }}>
                <ShoppingBag size={17} style={{ color: 'var(--accent-mauve)' }} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center"
                    style={{ background: 'var(--accent-mauve)', color: '#fff', fontSize: '10px' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

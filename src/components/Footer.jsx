import React from 'react';
import { Camera, Share2, MessageCircle, MapPin } from 'lucide-react';
import { navLinks, categories } from '../data';
import { neu } from '../neu';

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com/vachiboutique.patna', color: '#C13584' },
  { icon: Share2, label: 'Facebook', href: 'https://facebook.com/vachiboutiquepatna', color: '#1877F2' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919773587243', color: '#25D366' },
  { icon: MapPin, label: 'Pinterest', href: 'https://pinterest.com/vachiboutique', color: '#E60023' },
];

const quickLinks = navLinks;
const collectionLinks = ['Lehengas', 'Sarees', 'Salwar Suits', 'Bridal Sets', 'Dupattas', 'Accessories'];

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: 'var(--bg)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      {/* ── Top divider ──────────────────────────────────────── */}
      <div
        className="container-max mb-12"
        style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--shadow-dark), transparent)' }}
      />

      <div className="container-max">
        {/* ── Brand + Tagline ─────────────────────────────────── */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl"
            style={{ color: 'var(--text-primary)', fontWeight: 500, letterSpacing: '0.05em' }}
          >
            Vachi Boutique
          </h2>
          <p
            className="text-sm mt-2 italic"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}
          >
            Crafted with love, delivered with care.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={social.label}
                  style={{ width: '44px', height: '44px', boxShadow: neu.circle }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = neu.insetSm;
                    e.currentTarget.querySelector('svg').style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = neu.circle;
                    e.currentTarget.querySelector('svg').style.color = 'var(--text-secondary)';
                  }}
                >
                  <Icon size={18} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} />
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Three Columns ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4
              className="font-serif text-base mb-4"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300, textDecoration: 'none' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-rose)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4
              className="font-serif text-base mb-4"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Collections
            </h4>
            <ul className="flex flex-col gap-2">
              {collectionLinks.map((name) => (
                <li key={name}>
                  <a
                    href="#products"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300, textDecoration: 'none' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-rose)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="font-serif text-base mb-4"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Connect
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              <li>
                <a
                  href="tel:+919773587243"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-rose)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                >
                  +91 97735 87243
                </a>
              </li>
              <li>Boring Road, Patna</li>
              <li>Bihar — 800001</li>
              <li>
                <a
                  href="https://wa.me/919773587243"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', textDecoration: 'none', fontWeight: 400 }}
                >
                  Chat on WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid var(--shadow-dark)' }}
        >
          <p
            className="text-xs text-center"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            © 2026 Vachi Boutique, Patna. All rights reserved.
          </p>
          <p
            className="text-xs text-center"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            Designed with{' '}
            <span style={{ color: 'var(--accent-rose)' }}>♥</span>
            {' '}for every bride
          </p>
        </div>
      </div>
    </footer>
  );
}

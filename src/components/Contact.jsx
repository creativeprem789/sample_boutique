import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle, Camera } from 'lucide-react';
import { neu } from '../neu';

const ENQUIRY_OPTIONS = [
  'Bridal Lehenga',
  'Saree',
  'Salwar Suit',
  'Bridal Set',
  'Custom Tailoring',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[0-9+\s\-]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number';
    if (!form.interest) e.interest = 'Please select what you are looking for';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full" style={{ background: 'var(--bg)', padding: '4rem 0' }}>
      <div className="container-max">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-mauve)', fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Get In Touch
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl"
            style={{ color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Visit or Enquire
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
            <span style={{ color: 'var(--accent-rose)', fontSize: '1rem' }}>✦</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Left: Contact Info ──────────────────────────────── */}
          <div className="flex flex-col gap-7">
            {/* Boutique name */}
            <div>
              <h3
                className="font-serif text-2xl md:text-3xl mb-1"
                style={{ color: 'var(--text-primary)', fontWeight: 500 }}
              >
                Celestial Boutique
              </h3>
              <p className="text-sm italic" style={{ color: 'var(--accent-mauve)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
                Premium Ethnic &amp; Bridal Wear
              </p>
            </div>

            {/* Address */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ boxShadow: neu.raised, background: 'var(--bg)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ boxShadow: neu.inset }}
              >
                <MapPin size={18} style={{ color: 'var(--accent-mauve)' }} />
              </div>
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Our Location</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                  Boring Road, Patna<br />Bihar — 800001, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ boxShadow: neu.raised, background: 'var(--bg)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: neu.inset }}
              >
                <Phone size={18} style={{ color: 'var(--accent-mauve)' }} />
              </div>
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Call Us</p>
                <a
                  href="tel:+919773587243"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)', fontWeight: 400, textDecoration: 'none' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-mauve)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--accent-rose)'}
                >
                  +91 97735 87243
                </a>
              </div>
            </div>

            {/* WhatsApp + Instagram */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://wa.me/919773587243"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '12px', fontSize: '0.85rem' }}
              >
                <MessageCircle size={16} fill="currentColor" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/celestialboutique.patna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple"
                style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '12px', fontSize: '0.85rem' }}
              >
                <Camera size={16} />
                Instagram
              </a>
            </div>

            {/* Decorative quote */}
            <div
              className="p-5 rounded-2xl"
              style={{ boxShadow: neu.inset, background: 'var(--bg)' }}
            >
              <p
                className="font-serif text-lg italic text-center"
                style={{ color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.6 }}
              >
                "Every bride deserves to feel like a queen on her most precious day."
              </p>
            </div>
          </div>

          {/* ── Right: Enquiry Form ─────────────────────────────── */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ boxShadow: neu.raised, background: 'var(--bg)' }}
          >
            {submitted ? (
              /* ── Success State ───────────────────────────────── */
              <div
                className="flex flex-col items-center justify-center gap-5 py-12 rounded-2xl text-center h-full"
                style={{ boxShadow: neu.inset }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ boxShadow: neu.raised }}
                >
                  <CheckCircle size={32} style={{ color: '#25D366' }} />
                </div>
                <div>
                  <h3
                    className="font-serif text-2xl mb-2"
                    style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                  >
                    Enquiry Sent!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    Thank you, <strong style={{ fontWeight: 500 }}>{form.name}</strong>. We'll reach out to you within 24 hours.
                  </p>
                  <p className="text-xs mt-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
                    Or WhatsApp us directly for faster response.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', interest: '', message: '' }); }}
                  className="btn-outline-purple"
                  style={{ borderRadius: '12px', padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              /* ── Form ────────────────────────────────────────── */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3
                  className="font-serif text-xl mb-1"
                  style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                  Send an Enquiry
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.12em' }}>
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="neu-input"
                    placeholder="Priya Sharma"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                  {errors.name && <span className="text-xs" style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)' }}>{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.12em' }}>
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="neu-input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                  {errors.phone && <span className="text-xs" style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)' }}>{errors.phone}</span>}
                </div>

                {/* Interest Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.12em' }}>
                    I'm Looking For *
                  </label>
                  <select
                    id="contact-interest"
                    className="neu-input"
                    value={form.interest}
                    onChange={(e) => handleChange('interest', e.target.value)}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Select an option…</option>
                    {ENQUIRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.interest && <span className="text-xs" style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)' }}>{errors.interest}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.12em' }}>
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    className="neu-input resize-none"
                    rows={4}
                    placeholder="Tell us about your requirements — occasion, budget, measurements…"
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                  {errors.message && <span className="text-xs" style={{ color: 'var(--accent-rose)', fontFamily: 'var(--font-sans)' }}>{errors.message}</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-purple"
                  style={{ width: '100%', marginTop: '1.25rem', borderRadius: '12px' }}
                >
                  Send Enquiry ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

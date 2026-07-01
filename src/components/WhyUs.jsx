import React from 'react';
import { Scissors, PackageOpen, Star, CalendarHeart } from 'lucide-react';
import { whyUs } from '../data';
import { neu } from '../neu';

const iconMap = {
  Scissors,
  PackageOpen,
  Star,
  CalendarHeart,
};

export default function WhyUs() {
  return (
    <section id="about" className="w-full" style={{ background: 'var(--bg)', padding: '4rem 0' }}>
      <div className="container-max">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent-mauve)', fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Our Promise
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl"
            style={{ color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Why Choose Celestial
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
            <span style={{ color: 'var(--accent-rose)', fontSize: '1rem' }}>✦</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--shadow-dark)' }} />
          </div>
        </div>

        {/* ── Cards ────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <WhyCard key={item.id} item={item} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ item, Icon }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300"
      style={{
        background: 'var(--bg)',
        boxShadow: hovered ? neu.deepRaised : neu.raised,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ boxShadow: neu.inset }}
      >
        {Icon && <Icon size={26} style={{ color: 'var(--accent-mauve)' }} />}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3
          className="font-serif text-base md:text-lg"
          style={{ color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.3 }}
        >
          {item.title}
        </h3>
        <p
          className="text-xs md:text-sm leading-relaxed"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

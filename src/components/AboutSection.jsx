import React from 'react';
import { Leaf, Utensils, HeartHandshake, Phone, ArrowRight, Sparkles, Clock, Flame } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function AboutSection({ onOpenCallModal }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory text-walnut relative overflow-hidden">
      {/* Subtle background ambient circles */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-sage/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest text-gold text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles size={13} className="text-gold" />
            <span>The Shanvi's Dining Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
            Where Forest Serenity Meets Royal Gastronomy
          </h2>

          <div className="w-16 h-0.5 bg-gold mx-auto my-3" />

          <p className="text-base sm:text-lg text-walnut/85 font-light leading-relaxed">
            Nestled in the lush, serene landscapes of Jagdalpur, Bastar, our dining concept celebrates the rich culinary heritage of India with fresh local ingredients, clay-tandoor roasting, and warm hospitality.
          </p>
        </div>

        {/* 3 Pillars / Dining Highlights with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {resortInfo.diningHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group bg-white rounded-3xl overflow-hidden border border-forest/10 hover:border-gold/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-forest-dark">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-4 text-xs uppercase tracking-widest text-gold font-bold">
                    Pillar 0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest group-hover:text-gold transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-walnut/80 leading-relaxed font-light">
                    {highlight.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Micro-detail */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-forest/5 flex items-center justify-between text-xs text-forest font-semibold">
                  <span>Prepared Fresh to Order</span>
                  <span className="text-gold">~20-30 mins</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Story Banner / Chef's Philosophy Box */}
        <div className="bg-forest text-ivory rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-2xl relative overflow-hidden">
          {/* Subtle gold emblem in background */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Utensils size={300} className="text-gold" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center justify-center lg:justify-start gap-2">
                <Leaf size={14} className="text-gold" />
                <span>Our Hospitality Commitment</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory leading-snug">
                "Every meal is prepared fresh with care, allowing you to unwind completely in the natural beauty of Jagdalpur."
              </h3>
              <p className="text-xs sm:text-sm text-ivory/75 font-light leading-relaxed max-w-2xl">
                Whether dining in your cottage, by the pool, or under the open stars, our culinary desk is dedicated to your comfort. Call directly to tailor your spice levels or dietary needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="#our-menu"
                className="px-6 py-3.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-widest text-center shadow-gold-glow transition-all duration-200"
              >
                Browse Our Menu
              </a>
              <button
                onClick={onOpenCallModal}
                className="px-6 py-3.5 rounded-full bg-forest-dark hover:bg-forest-light text-ivory border border-gold/40 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Phone size={14} className="text-gold" />
                <span>Call Ext. {resortInfo.phone.inVillaExt}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

        {/* 3 Pillars / Dining Highlights (Clean, Icon-Based, No Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {resortInfo.diningHighlights.map((highlight, index) => {
            const IconComponent =
              index === 0 ? Flame : index === 1 ? Utensils : Sparkles;

            return (
              <div
                key={highlight.title}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-forest/10 hover:border-gold/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest text-gold border border-gold/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      <IconComponent size={22} className="text-gold" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gold font-bold bg-forest/5 px-2.5 py-1 rounded-full">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest group-hover:text-gold transition-colors pt-1">
                    {highlight.title}
                  </h3>

                  <p className="text-sm text-walnut/80 leading-relaxed font-light">
                    {highlight.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-forest/5 flex items-center justify-between text-xs text-forest font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-gold" />
                    <span>Prepared Fresh to Order</span>
                  </span>
                  <span className="text-gold">~20-30 mins</span>
                </div>
              </div>
            );
          })}
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
              <a
                href={`tel:${resortInfo.phone.tel}`}
                className="px-6 py-3.5 rounded-full bg-forest-dark hover:bg-forest-light text-ivory border border-gold/40 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
              >
                <Phone size={14} className="text-gold" />
                <span>Call Culinary Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

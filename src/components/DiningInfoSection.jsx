import React from 'react';
import { Clock, Leaf, Utensils, HeartHandshake, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function DiningInfoSection({ onOpenCallModal }) {
  return (
    <section id="ethos-section" className="py-20 bg-forest text-ivory relative overflow-hidden border-t border-gold/20">
      {/* Decorative botanical backdrop */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-dark border border-gold/30 text-gold text-xs uppercase tracking-widest">
            <Leaf size={13} />
            <span>Shanvi's Resort Hospitality • Jagdalpur</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            Culinary Heritage & Pure Resort Comfort
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Surrounded by Bastar's lush woodlands, Shanvi's Resort offers delicious traditional Indian gravies, authentic tandoor skewers, wok-tossed starters, and refreshing drinks.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-forest-dark/60 rounded-3xl p-8 border border-gold/20 shadow-luxury space-y-4 hover:border-gold/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center">
              <Leaf size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ivory">Clay Oven Tandoor</h3>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              Authentic clay tandoor fired with charcoal embers, serving smoky Tandoori Chicken, juicy Tangdi kebabs, Paneer Malai tikkas, and garlic butter naans.
            </p>
          </div>

          <div className="bg-forest-dark/60 rounded-3xl p-8 border border-gold/20 shadow-luxury space-y-4 hover:border-gold/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center">
              <Utensils size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ivory">Authentic Desi Specialities</h3>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              Indulge in our famous 1 KG Desi Chicken Curry, Mutton Rogan Josh, Dal Makhani, Paneer Butter Masala, and fragrant handi Dum Biryanis.
            </p>
          </div>

          <div className="bg-forest-dark/60 rounded-3xl p-8 border border-gold/20 shadow-luxury space-y-4 hover:border-gold/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center">
              <HeartHandshake size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ivory">Prompt Room & Garden Service</h3>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              Dining in your room or enjoying the fresh breeze in the resort gardens? Simply call us to have piping-hot food delivered to your table within 20–30 mins.
            </p>
          </div>
        </div>

        {/* Hours of Service Cards */}
        <div className="bg-forest-dark rounded-3xl p-6 sm:p-10 border border-gold/25 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
                <Clock size={13} /> Resort Dining Schedule
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                Kitchen Service & Operating Hours
              </h3>
            </div>
            <button
              onClick={onOpenCallModal}
              className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow transition-all"
            >
              <Phone size={14} />
              <span>Call Room Service ({resortInfo.phone.inVillaExt})</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {resortInfo.serviceHours.map((slot) => (
              <div
                key={slot.label}
                className="p-5 rounded-2xl bg-forest/40 border border-forest-light/30 space-y-2 hover:bg-forest/60 transition-colors"
              >
                <div className="flex items-center gap-2 text-gold">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{slot.label}</span>
                </div>
                <p className="font-serif text-lg font-bold text-ivory">{slot.time}</p>
                <p className="text-[11px] text-ivory/60">Delivered directly to verandah suites</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

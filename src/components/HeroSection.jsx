import React from 'react';
import { Phone, Utensils, ChevronDown, Sparkles, MapPin, Leaf } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function HeroSection({ onOpenCallModal }) {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById('our-menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-forest-dark text-ivory"
    >
      {/* Background Image with Nature Resort Luxury Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src={resortInfo.heroImage}
          alt={`${resortInfo.name} Luxury Dining Pavilion`}
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Layered Gradient Overlays in Deep Forest Green */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest-dark/85" />
        <div className="absolute inset-0 bg-forest-dark/40 backdrop-blur-[1px]" />
      </div>

      {/* Decorative Botanical Ambient Shapes */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-15 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sage/20 blur-3xl" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Top Luxury Location Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-forest-dark/85 border border-gold/40 text-gold text-xs sm:text-sm tracking-widest uppercase mb-8 shadow-luxury backdrop-blur-md">
          <Leaf size={14} className="text-gold" />
          <span>{resortInfo.city}, Bastar</span>
          <span className="text-gold/50">•</span>
          <span>Nature Sanctuary & Resort Dining</span>
        </div>

        {/* Prominent Resort Name (Requirement 2) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory leading-[1.08] drop-shadow-sm">
          {resortInfo.name}
        </h1>

        {/* Elegant Gold Divider with Botanical Motif */}
        <div className="flex items-center justify-center gap-3 my-6 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold/60" />
          <Sparkles size={16} className="text-gold" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Elegant Tagline (Requirement 3) */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold font-light tracking-wide max-w-3xl leading-snug">
          "{resortInfo.tagline}"
        </p>

        {/* Short Editorial Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-ivory/85 max-w-2xl font-light leading-relaxed">
          Savor clay oven roasted kebabs, fragrant royal biryanis, sizzling starters, and fresh garden drinks surrounded by the tranquil forests of Jagdalpur.
        </p>

        {/* Attractive CTA Buttons (Requirement 4) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Explore Our Menu Button */}
          <a
            href="#our-menu"
            onClick={handleScrollToMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-gold-glow hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
          >
            <Utensils size={16} className="text-forest-dark group-hover:rotate-12 transition-transform duration-300" />
            <span>Explore Our Menu</span>
          </a>

          {/* Quick Call to Order Button */}
          <button
            onClick={onOpenCallModal}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-forest-dark/80 hover:bg-forest text-ivory border border-gold/40 hover:border-gold font-semibold text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 shadow-luxury hover:-translate-y-0.5"
          >
            <Phone size={15} className="text-gold" />
            <span>Call Room Service</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-gold/20 text-gold font-bold">
              {resortInfo.phone.inVillaExt}
            </span>
          </button>
        </div>

        {/* Quick Features Pill Row */}
        <div className="mt-14 pt-8 border-t border-gold/20 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-ivory/80">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Clay Oven Charcoal Tandoor</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Freshly Made to Order</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>In-Room & Garden Verandah</span>
          </div>
        </div>

        {/* Smooth Scroll Down Indicator */}
        <a
          href="#about"
          className="mt-10 inline-flex flex-col items-center gap-1.5 text-xs text-gold/70 hover:text-gold uppercase tracking-widest transition-colors font-medium"
        >
          <span>Discover Experience</span>
          <ChevronDown size={16} className="animate-bounce text-gold" />
        </a>
      </div>
    </section>
  );
}

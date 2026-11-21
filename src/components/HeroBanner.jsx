import React from 'react';
import { Phone, Sparkles, Clock, Leaf, ShieldCheck, ChevronDown } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function HeroBanner({ onOpenCallModal, onOpenInfoModal }) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory py-16 sm:py-24 border-b border-gold/20">
      {/* Decorative Botanical Ambient Shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="absolute -right-24 -top-24 w-96 h-96 text-gold"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M45,-60C58,-52,68,-39,72,-24C76,-9,73,8,66,23C59,38,48,51,34,58C20,66,3,68,-14,66C-31,64,-48,58,-58,45C-68,32,-71,12,-69,-7C-67,-26,-60,-44,-47,-52C-34,-60,-17,-58,0,-58C17,-58,32,-68,45,-60Z" transform="translate(100 100)" />
        </svg>
        <svg
          className="absolute -left-20 bottom-0 w-80 h-80 text-sage"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M41.7,-58.3C52.7,-48.9,59.3,-35.1,63.4,-20.6C67.5,-6.1,69.1,9.1,64.2,22.7C59.3,36.3,47.9,48.3,34.4,56.7C20.9,65.1,5.3,69.9,-9.8,69.8C-24.9,69.7,-39.5,64.7,-50.2,54.7C-60.9,44.7,-67.7,29.7,-70.8,14C-73.9,-1.7,-73.3,-18.1,-65.8,-31.1C-58.3,-44.1,-43.9,-53.7,-29.9,-61.2C-15.9,-68.7,-2.3,-74.1,10.7,-72.1C23.7,-70.1,30.7,-67.7,41.7,-58.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Luxury Crest / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-dark/80 border border-gold/40 text-gold text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
          <Leaf size={13} className="text-gold" />
          <span>Shanvi's Resort • Jagdalpur, Bastar</span>
          <span className="text-gold/50">•</span>
          <span>Digital Menu</span>
        </div>

        {/* Grand Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory max-w-4xl mx-auto leading-[1.15]">
          A Royal Culinary Experience at{' '}
          <span className="italic font-normal text-gold underline decoration-gold/30 decoration-wavy underline-offset-8">
            Shanvi's Resort
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
          Surrounded by the serene wilderness of Jagdalpur. Enjoy sizzling tandoor kebabs, rich authentic gravies, biryanis, and refreshing mocktails served directly to your room or garden cottage.
        </p>

        {/* Direct Call to Order Card (Highlighted for clear customer action) */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-forest-dark/70 border border-gold/30 backdrop-blur-md max-w-2xl mx-auto shadow-luxury">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center gap-1.5">
                <Sparkles size={13} className="text-gold" /> How to Place Your Order
              </span>
              <p className="text-sm text-ivory/90">
                Browse our selection below, then call directly to order.
              </p>
              <div className="flex items-center gap-3 text-xs text-ivory/70 pt-1">
                <span>In-Villa Ext: <strong className="text-gold">{resortInfo.phone.inVillaExt}</strong></span>
                <span>•</span>
                <span>Wait Time: <strong className="text-ivory font-medium">~25-35 mins</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onOpenCallModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-sm tracking-wide transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Phone size={16} />
                <span>Call to Order</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fast Value Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-gold/15 pt-8">
          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest-dark/30 transition-colors">
            <div className="p-2 rounded-lg bg-gold/15 text-gold shrink-0">
              <Leaf size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-ivory">Clay Oven Tandoor</h2>
              <p className="text-xs text-ivory/70 mt-0.5">Charcoal roasted kebabs, tikkas, and hot butter naans.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest-dark/30 transition-colors">
            <div className="p-2 rounded-lg bg-gold/15 text-gold shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-ivory">Fresh & Made to Order</h2>
              <p className="text-xs text-ivory/70 mt-0.5">Tailored spice levels (Mild, Medium, Spicy) upon request.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest-dark/30 transition-colors">
            <div className="p-2 rounded-lg bg-gold/15 text-gold shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-ivory">In-Room & Cottage Dining</h2>
              <p className="text-xs text-ivory/70 mt-0.5">Prompt delivery directly to your room or garden table.</p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#menu-collection"
            className="inline-flex items-center gap-2 text-xs text-gold/70 hover:text-gold uppercase tracking-widest transition-colors font-medium py-1"
          >
            <span>Explore Menu</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

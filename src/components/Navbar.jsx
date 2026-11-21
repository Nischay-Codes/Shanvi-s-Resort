import React, { useState } from 'react';
import { Phone, Clock, Compass, Menu, X, Sparkles, Utensils } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Navbar({ onOpenCallModal, onOpenInfoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-forest text-ivory shadow-lg border-b border-gold/20 transition-all duration-300">
      {/* Top micro-bar for hours and villa extension */}
      <div className="bg-forest-dark/80 text-xs py-1.5 px-4 sm:px-8 border-b border-forest-light/40 flex justify-between items-center text-ivory/80">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium tracking-wide">Culinary Kitchen Open</span>
          <span className="hidden sm:inline text-gold/60">•</span>
          <span className="hidden sm:inline text-gold/90 font-medium">In-Room & Garden Dining</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-ivory/70">
            Room Phone: <strong className="text-gold font-semibold">{resortInfo.phone.inVillaExt}</strong>
          </span>
          <a
            href={`tel:${resortInfo.phone.tel}`}
            className="flex items-center gap-1.5 text-gold hover:text-ivory transition-colors"
          >
            <Phone size={12} className="text-gold" />
            <span className="font-semibold tracking-wider">{resortInfo.phone.display}</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Crest & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border border-gold/40 bg-forest-dark flex items-center justify-center text-gold shadow-inner group-hover:border-gold transition-colors">
            <svg
              className="w-6 h-6 transform group-hover:scale-105 transition-transform"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="21" stroke="#C5A46D" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <path
                d="M24 10C24 10 17 17 17 25C17 29.5 20.5 33 24 35C27.5 33 31 29.5 31 25C31 17 24 10 24 10Z"
                stroke="#C5A46D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M24 15V33" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 21L20 18" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 26L28 23" stroke="#C5A46D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-ivory group-hover:text-gold transition-colors">
              {resortInfo.name}
            </span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-gold/80 font-medium">
              Jagdalpur • Digital Food Menu
            </span>
          </div>
        </a>

        {/* Desktop Quick Links & Actions */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a
            href="#menu-collection"
            className="text-ivory/90 hover:text-gold transition-colors font-medium tracking-wide flex items-center gap-1.5"
          >
            <Utensils size={15} className="text-gold" />
            Browse Menu
          </a>
          <button
            onClick={onOpenInfoModal}
            className="text-ivory/90 hover:text-gold transition-colors font-medium tracking-wide flex items-center gap-1.5"
          >
            <Clock size={15} className="text-gold" />
            Dining Hours & Guide
          </button>
          <a
            href="#ethos-section"
            className="text-ivory/90 hover:text-gold transition-colors font-medium tracking-wide flex items-center gap-1.5"
          >
            <Sparkles size={15} className="text-gold" />
            Estate Ethos
          </a>
        </nav>

        {/* Call to Order Button (CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCallModal}
            className="relative px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-glow hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Call to Order</span>
            <span className="bg-forest-dark/20 text-forest-dark px-1.5 py-0.5 rounded text-[10px] font-bold">
              Ext. 404
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-ivory hover:text-gold hover:bg-forest-dark/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-dark/98 border-t border-gold/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="pb-3 border-b border-white/10">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
              Direct In-Villa Ordering
            </p>
            <p className="text-sm text-ivory/80">
              Dial <strong className="text-gold font-bold">{resortInfo.phone.inVillaExt}</strong> or call directly
              at{' '}
              <a href={`tel:${resortInfo.phone.tel}`} className="text-gold underline font-semibold">
                {resortInfo.phone.display}
              </a>
            </p>
          </div>

          <div className="space-y-3 pt-1">
            <a
              href="#menu-collection"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-ivory hover:text-gold transition-colors"
            >
              • Browse Full Menu
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInfoModal();
              }}
              className="block text-left w-full text-base font-medium text-ivory hover:text-gold transition-colors"
            >
              • Service Hours & Villa Delivery
            </button>
            <a
              href="#ethos-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-ivory hover:text-gold transition-colors"
            >
              • Culinary Ethos & Organic Garden
            </a>
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallModal();
              }}
              className="w-full py-3 rounded-full bg-gold text-forest-dark font-semibold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={16} />
              <span>Call Culinary Desk ({resortInfo.phone.inVillaExt})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

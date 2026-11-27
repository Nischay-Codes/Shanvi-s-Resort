import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Utensils, Info, MapPin, Home, QrCode } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Navbar({ onOpenCallModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle background elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Our Menu', href: '#our-menu', icon: Utensils },
    { label: 'About', href: '#about', icon: Info },
    { label: 'Contact', href: '#contact', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro-bar for live hours, extension, and QR Menu */}
      <div className="bg-forest-dark text-xs py-2 px-3 sm:px-8 border-b border-forest-light/30 flex justify-between items-center text-ivory/80">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium tracking-wide">Kitchen Open Now</span>
          <span className="hidden sm:inline text-gold/60">•</span>
          <span className="hidden sm:inline text-gold font-medium">In-Room & Dining Table</span>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-4">
          <span className="hidden md:inline text-ivory/70">
            Room: <strong className="text-gold font-semibold">{resortInfo.phone.inVillaExt}</strong>
          </span>
          <a
            href={`tel:${resortInfo.phone.tel}`}
            className="flex items-center gap-1 text-gold hover:text-ivory transition-colors active:scale-95"
            title="Dial direct line"
          >
            <Phone size={11} className="text-gold" />
            <span className="font-semibold tracking-wider text-xs">{resortInfo.phone.display}</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar with backdrop blur */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-forest/95 backdrop-blur-md shadow-lg border-b border-gold/20 py-3.5'
            : 'bg-forest text-ivory border-b border-gold/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Crest & Resort Name */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full border border-gold/50 bg-forest-dark flex items-center justify-center text-gold shadow-inner group-hover:border-gold transition-colors">
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
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-gold/85 font-medium">
                {resortInfo.city} • Luxury Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Home, Our Menu, About, Contact) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-ivory/85 hover:text-gold transition-colors font-medium tracking-wide flex items-center gap-1.5 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Call to Order CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${resortInfo.phone.tel}`}
              className="relative px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-glow hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group active:scale-95"
              aria-label={`Call resort at ${resortInfo.phone.display}`}
            >
              <Phone size={13} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Call to Order</span>
              <span className="bg-forest-dark/20 text-forest-dark px-1.5 py-0.5 rounded text-[10px] font-bold">
                {resortInfo.phone.inVillaExt}
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-ivory hover:text-gold hover:bg-forest-dark/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-forest-dark/98 border-t border-gold/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="pb-3 border-b border-white/10">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
              {resortInfo.name} • {resortInfo.city}
            </p>
            <p className="text-sm text-ivory/80">
              Dial <strong className="text-gold font-bold">{resortInfo.phone.inVillaExt}</strong> or call directly
              at{' '}
              <a href={`tel:${resortInfo.phone.tel}`} className="text-gold underline font-semibold">
                {resortInfo.phone.display}
              </a>
            </p>
          </div>

          {/* Mobile Links */}
          <div className="space-y-3 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-base font-medium text-ivory hover:text-gold transition-colors py-1"
                >
                  <Icon size={18} className="text-gold" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href={`tel:${resortInfo.phone.tel}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-gold text-forest-dark font-bold text-sm text-center flex items-center justify-center gap-2 shadow-gold-glow active:scale-95 transition-transform"
            >
              <Phone size={16} />
              <span>Call Room Service ({resortInfo.phone.inVillaExt})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

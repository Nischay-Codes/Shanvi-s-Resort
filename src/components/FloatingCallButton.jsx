import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function FloatingCallButton({ onOpenCallModal }) {
  return (
    <>
      {/* Desktop Floating Action Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <button
          onClick={onOpenCallModal}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-forest text-ivory border border-gold/40 shadow-2xl hover:shadow-gold-glow hover:bg-forest-dark hover:border-gold transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Call resort culinary service"
        >
          {/* Subtle gold ripple / pulse indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>

          <div className="text-left">
            <span className="block text-[10px] uppercase tracking-widest text-gold font-bold">
              In-Room Dining
            </span>
            <span className="block font-serif text-sm font-semibold tracking-wide text-ivory group-hover:text-gold transition-colors">
              Call to Order ({resortInfo.phone.inVillaExt})
            </span>
          </div>

          <div className="w-9 h-9 rounded-full bg-gold text-forest-dark flex items-center justify-center group-hover:rotate-12 transition-transform shadow-md">
            <Phone size={16} />
          </div>
        </button>
      </div>

      {/* Mobile Fixed Bottom Call Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest/98 backdrop-blur-md border-t border-gold/30 px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="text-left">
            <span className="block text-[10px] uppercase tracking-wider text-gold font-semibold">
              Ready to Order?
            </span>
            <span className="text-xs text-ivory/90 font-medium">
              Dial <strong className="text-gold font-bold">{resortInfo.phone.inVillaExt}</strong> or direct line
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCallModal}
              className="px-4 py-2.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-gold-glow transition-all active:scale-95"
            >
              <Phone size={14} />
              <span>Call to Order</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Phone, Utensils, BookmarkCheck } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { formatPrice } from '../data/menuData';

export default function FloatingCallButton({
  onOpenCallModal,
  shortlistCount = 0,
  shortlistTotal = 0,
  onOpenOrderPad
}) {
  const hasShortlist = shortlistCount > 0;

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {/* Desktop Shortlist Button (when dishes selected) */}
        {hasShortlist && onOpenOrderPad && (
          <button
            onClick={onOpenOrderPad}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white text-forest border border-gold/50 shadow-2xl hover:border-gold hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1 active:scale-95 animate-in fade-in slide-in-from-right-4"
          >
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-forest">
              <BookmarkCheck size={16} className="text-forest" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-walnut/70 font-bold">
                Table Order Pad
              </span>
              <span className="block font-serif text-xs font-bold text-forest">
                {shortlistCount} {shortlistCount === 1 ? 'item' : 'items'} • {formatPrice(shortlistTotal)}
              </span>
            </div>
          </button>
        )}

        {/* Desktop Call to Order Button */}
        <a
          href={`tel:${resortInfo.phone.tel}`}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-forest text-ivory border border-gold/40 shadow-2xl hover:shadow-gold-glow hover:bg-forest-dark hover:border-gold transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          aria-label={`Call resort culinary service at ${resortInfo.phone.display}`}
        >
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
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar with iPhone Safe-Area Inset */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-dark/98 backdrop-blur-md border-t border-gold/30 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_20px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {hasShortlist && onOpenOrderPad ? (
            /* When dishes are selected: Show Order Pad pill + Quick Call */
            <>
              <button
                onClick={onOpenOrderPad}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-forest text-ivory border border-gold/40 text-left min-w-0 flex-1 active:scale-95 transition-transform"
              >
                <div className="w-6 h-6 rounded-full bg-gold text-forest-dark flex items-center justify-center shrink-0 font-bold text-xs">
                  {shortlistCount}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-wider text-gold font-bold truncate">
                    Order Pad
                  </span>
                  <span className="block text-xs font-bold text-ivory truncate">
                    {formatPrice(shortlistTotal)}
                  </span>
                </div>
              </button>

              <a
                href={`tel:${resortInfo.phone.tel}`}
                className="px-4 py-2.5 rounded-full bg-gold text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-gold-glow shrink-0 active:scale-95"
              >
                <Phone size={13} />
                <span>Call Now</span>
              </a>
            </>
          ) : (
            /* When no dishes selected yet: Clean room service call bar */
            <>
              <div className="text-left pl-1">
                <span className="block text-[10px] uppercase tracking-wider text-gold font-bold">
                  In-Room & Dining Table
                </span>
                <span className="text-xs text-ivory/90 font-medium">
                  Dial <strong className="text-gold font-bold">Ext. {resortInfo.phone.inVillaExt}</strong> or tap
                </span>
              </div>

              <a
                href={`tel:${resortInfo.phone.tel}`}
                className="px-4 py-2.5 rounded-full bg-gold text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-gold-glow active:scale-95 transition-transform"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

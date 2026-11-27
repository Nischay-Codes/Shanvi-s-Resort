import React, { useState } from 'react';
import { X, Phone, Clock, Sparkles, Check, Copy, Leaf, Bookmark, BookmarkCheck } from 'lucide-react';
import { resortInfo } from '../data/resortData';
import { formatPrice } from '../data/menuData';

export default function MenuItemModal({
  item,
  onClose,
  isShortlisted = false,
  onToggleShortlist
}) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!item) return null;

  const displayName = item.name || item.title || 'Special Dish';
  const displayDesc = item.description || item.shortDescription || 'Prepared fresh to order by our resort chefs.';
  const hasImage = Boolean(item.image) && !imgError;

  const handleCopyDish = () => {
    navigator.clipboard?.writeText(displayName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/80 backdrop-blur-sm p-3 sm:p-6 md:p-10 flex items-end sm:items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gold/40 text-walnut transform transition-all my-0 sm:my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 sm:p-2.5 rounded-full bg-forest-dark/80 text-white hover:text-gold hover:bg-forest-dark transition-all active:scale-90"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Image Header with Fixed Aspect Ratio */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-72 w-full bg-forest-dark overflow-hidden shrink-0">
          {hasImage ? (
            <img
              src={item.image}
              alt={displayName}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-forest-dark to-forest text-gold/80 p-6 text-center space-y-1.5">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-forest-dark/80">
                <Leaf size={22} className="text-gold" />
              </div>
              <span className="font-serif text-base font-semibold text-ivory">
                {displayName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold/70">
                Shanvi's Resort • Fresh Kitchen
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent opacity-85" />

          {/* Floating Chef's Signature Badge */}
          {(item.isSpecial || item.isChefSpecial) && (
            <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-forest-dark font-bold text-xs uppercase tracking-wider shadow-lg">
              <Sparkles size={12} />
              <span>Chef's Special</span>
            </div>
          )}

          {/* Bottom Title on Image */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-end justify-between gap-3 text-white">
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center bg-white ${
                    item.isVeg ? 'border-emerald-600' : 'border-red-700'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.isVeg ? 'bg-emerald-600' : 'bg-red-700'
                    }`}
                  />
                </span>
                <span className="text-[11px] uppercase tracking-widest text-gold font-semibold truncate">
                  {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-ivory truncate">
                {displayName}
              </h2>
            </div>
            <div className="text-right shrink-0">
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold">
                {formatPrice(item.price)}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Attributes Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-forest/10 text-xs">
            <span
              className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] ${
                item.isVeg
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ivory text-walnut font-medium border border-forest/10 text-[11px]">
              <Clock size={12} className="text-gold" />
              Prepared Fresh (~20-30 mins)
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-walnut/70 mb-1.5">
              Dish Description
            </h3>
            <p className="text-xs sm:text-sm text-walnut/90 leading-relaxed font-light">
              {displayDesc}
            </p>
          </div>

          {/* Direct Ordering Action Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-forest text-ivory border border-gold/30 space-y-3.5 shadow-luxury">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10 flex-wrap">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
                  Quick Actions
                </span>
                <p className="text-xs text-ivory/80">
                  Save to your order pad or call directly
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Shortlist Toggle */}
                {onToggleShortlist && (
                  <button
                    onClick={() => onToggleShortlist(item)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
                      isShortlisted
                        ? 'bg-gold text-forest-dark shadow-sm'
                        : 'bg-forest-dark hover:bg-forest-light text-gold border border-gold/30'
                    }`}
                  >
                    {isShortlisted ? (
                      <>
                        <BookmarkCheck size={13} className="fill-forest-dark" />
                        <span>In Order Pad</span>
                      </>
                    ) : (
                      <>
                        <Bookmark size={13} />
                        <span>Add to Order Pad</span>
                      </>
                    )}
                  </button>
                )}

                {/* Copy Dish Name */}
                <button
                  onClick={handleCopyDish}
                  className="px-3 py-1.5 rounded-full bg-forest-dark hover:bg-forest-light text-xs text-gold border border-gold/30 flex items-center gap-1.5 transition-colors active:scale-95"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied!' : 'Copy Name'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              <div className="text-xs text-ivory/70 space-y-0.5">
                <p>
                  Room Extension:{' '}
                  <strong className="text-gold font-bold">Ext. {resortInfo.phone.inVillaExt}</strong>
                </p>
                <p>Resort Line: {resortInfo.phone.display}</p>
              </div>

              <a
                href={`tel:${resortInfo.phone.tel}`}
                className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow transition-all active:scale-95 text-center"
              >
                <Phone size={13} />
                <span>Call Room Service</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

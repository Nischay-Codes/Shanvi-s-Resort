import React, { useState } from 'react';
import { X, Phone, Clock, Sparkles, Wine, Check, Copy, Flame, ShieldAlert } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function MenuItemModal({ item, onClose, onCallItem }) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleCopyDish = () => {
    navigator.clipboard?.writeText(item.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/75 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gold/40 text-walnut transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-forest-dark/70 text-white hover:text-gold hover:bg-forest-dark transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div className="relative aspect-[16/9] w-full bg-forest-dark">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-80" />

          {/* Floating Chef's Signature Badge */}
          {item.isChefSpecial && (
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-forest-dark font-bold text-xs uppercase tracking-wider shadow-lg">
              <Sparkles size={13} />
              <span>Chef's Master Signature</span>
            </div>
          )}

          {/* Bottom Title on Image for Mobile / Desktop Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center bg-white/90 ${
                    item.isVeg ? 'border-emerald-600' : 'border-red-700'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.isVeg ? 'bg-emerald-600' : 'bg-red-700'
                    }`}
                  />
                </span>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {item.isVeg ? 'Pure Veg' : 'Non-Veg'} • Shanvi's Resort, Jagdalpur
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-ivory">
                {item.title}
              </h2>
            </div>
            <div className="text-right shrink-0">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold">
                ₹{item.price}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Attributes Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-forest/10 text-xs">
            {item.prepTime && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ivory text-walnut font-medium border border-forest/10">
                <Clock size={13} className="text-gold" />
                Est. Prep Time: {item.prepTime}
              </span>
            )}
            {item.calories && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ivory text-walnut font-medium border border-forest/10">
                <Flame size={13} className="text-amber-600" />
                {item.calories}
              </span>
            )}
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-sage/60 text-forest font-semibold border border-forest/15"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Full Epicurean Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-walnut/70 mb-2">
              Culinary Description
            </h3>
            <p className="text-sm sm:text-base text-walnut/90 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Ingredients Breakdown */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-walnut/70 mb-2.5">
                Artisanal Ingredients & Sourcing
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-ivory text-walnut/80 text-xs border border-forest/10"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sommelier / Chef Pairing Note */}
          {item.pairing && (
            <div className="p-4 rounded-2xl bg-sage/30 border border-sage/60 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-forest text-gold shrink-0">
                <Wine size={16} />
              </div>
              <div className="text-xs sm:text-sm">
                <strong className="block text-forest font-semibold uppercase tracking-wider text-[11px] mb-0.5">
                  Sommelier Pairing Recommendation
                </strong>
                <span className="text-walnut/90 italic">{item.pairing}</span>
              </div>
            </div>
          )}

          {/* Direct Ordering Action Box */}
          <div className="p-5 rounded-2xl bg-forest text-ivory border border-gold/30 space-y-4 shadow-luxury">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
                  To Order This Dish
                </span>
                <p className="text-sm text-ivory/80">
                  Dial from in-villa phone or call resort concierge directly.
                </p>
              </div>
              <button
                onClick={handleCopyDish}
                className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-forest-dark hover:bg-forest-light text-xs text-gold border border-gold/30 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied Dish Name!' : 'Copy Dish Name'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-xs text-ivory/70 space-y-0.5">
                <p>
                  In-Room Extension:{' '}
                  <strong className="text-gold font-bold">{resortInfo.phone.inVillaExt}</strong>
                </p>
                <p>Front Desk / Kitchen: {resortInfo.phone.display}</p>
              </div>

              <a
                href={`tel:${resortInfo.phone.tel}`}
                className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow transition-all"
              >
                <Phone size={14} />
                <span>Call to Order (₹{item.price})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Sparkles, Bookmark, BookmarkCheck, Leaf } from 'lucide-react';
import { formatPrice } from '../data/menuData';

export default function MenuCard({ item, onSelect, isShortlisted = false, onToggleShortlist }) {
  const [imgError, setImgError] = useState(false);
  const displayName = item.name || item.title || 'Untitled Dish';
  const displayDesc = item.description || item.shortDescription || '';
  const hasImage = Boolean(item.image) && !imgError;

  return (
    <article
      onClick={() => onSelect(item)}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-forest/10 hover:border-gold/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 active:scale-[0.99] cursor-pointer"
    >
      <div>
        {/* Food Photograph / Consistent Visual Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-forest-dark select-none">
          {hasImage ? (
            <img
              src={item.image}
              alt={displayName}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            /* Graceful Placeholder when Image is Not Available */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-forest-dark to-forest text-gold/80 p-5 text-center space-y-1.5">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-forest-dark/80">
                <Leaf size={18} className="text-gold" />
              </div>
              <span className="font-serif text-xs font-semibold text-ivory/90 line-clamp-1">
                {displayName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold/70">
                Freshly Prepared
              </span>
            </div>
          )}

          {/* Gentle Gradient Shadow on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badges Overlay */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
            {/* Chef's Special / Signature Badge */}
            {(item.isSpecial || item.isChefSpecial) ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold text-forest-dark font-bold text-[11px] shadow-md uppercase tracking-wider">
                <Sparkles size={11} /> Chef's Special
              </span>
            ) : <span />}

            {/* Quick Shortlist / Table Order Pad Button */}
            {onToggleShortlist && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleShortlist(item);
                }}
                className={`pointer-events-auto p-2 rounded-full backdrop-blur-md transition-all shadow-md active:scale-90 ${
                  isShortlisted
                    ? 'bg-gold text-forest-dark shadow-gold-glow ring-2 ring-gold-light'
                    : 'bg-forest-dark/70 hover:bg-forest text-white/90 hover:text-gold border border-white/20'
                }`}
                title={isShortlisted ? 'Remove from Order Pad' : 'Add to Order Pad'}
                aria-label={isShortlisted ? 'Remove from Order Pad' : 'Add to Order Pad'}
              >
                {isShortlisted ? (
                  <BookmarkCheck size={14} className="fill-forest-dark text-forest-dark" />
                ) : (
                  <Bookmark size={14} />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-2">
          {/* Title, Veg/Non-Veg Dot, and Price */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5 flex-1 min-w-0">
              {/* Authentic Indian Veg / Non-Veg Square Symbol */}
              <span
                className={`mt-1 flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm border-2 flex items-center justify-center bg-white ${
                  item.isVeg ? 'border-emerald-600' : 'border-red-700'
                }`}
                title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
              >
                <span
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    item.isVeg ? 'bg-emerald-600' : 'bg-red-700'
                  }`}
                />
              </span>

              {/* Food Name */}
              <h3 className="font-serif text-base sm:text-lg font-bold text-forest group-hover:text-gold transition-colors leading-snug line-clamp-2">
                {displayName}
              </h3>
            </div>

            {/* Price in Indian Rupees */}
            <span className="text-base sm:text-lg font-serif font-bold text-forest group-hover:text-gold-dark shrink-0 transition-colors">
              {formatPrice(item.price)}
            </span>
          </div>

          {/* Short Description */}
          {displayDesc && (
            <p className="text-xs sm:text-sm text-walnut/70 line-clamp-2 leading-relaxed font-light">
              {displayDesc}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

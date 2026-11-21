import React, { useState } from 'react';
import { Phone, Sparkles, ChevronRight, Utensils, Leaf } from 'lucide-react';
import { formatPrice } from '../data/menuData';

export default function MenuCard({ item, onSelect, onCallItem }) {
  const [imgError, setImgError] = useState(false);
  const displayName = item.name || item.title || 'Untitled Dish';
  const displayDesc = item.description || item.shortDescription || '';
  const hasImage = Boolean(item.image) && !imgError;

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-forest/10 hover:border-gold/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      {/* Food Photograph / Consistent Visual Container */}
      <div>
        <div
          className="relative aspect-[16/10] overflow-hidden bg-forest-dark cursor-pointer select-none"
          onClick={() => onSelect(item)}
        >
          {hasImage ? (
            <img
              src={item.image}
              alt={displayName}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            /* Graceful Placeholder when Image is Not Available */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-forest-dark to-forest text-gold/80 p-6 text-center space-y-2">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-forest-dark/80">
                <Leaf size={22} className="text-gold" />
              </div>
              <span className="font-serif text-sm font-semibold text-ivory/90 line-clamp-1">
                {displayName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold/70">
                Freshly Prepared
              </span>
            </div>
          )}

          {/* Gentle Gradient Shadow on Top Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
            {/* Chef's Special / Signature Badge */}
            {(item.isSpecial || item.isChefSpecial) && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold text-forest-dark font-bold text-[11px] shadow-md uppercase tracking-wider">
                <Sparkles size={11} /> Chef's Special
              </span>
            )}

            {/* Veg / Non-Veg Pill on Image */}
            <span
              className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm border ${
                item.isVeg
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                  : 'bg-red-950/80 text-red-300 border-red-500/40'
              }`}
            >
              {item.isVeg ? 'Veg' : 'Non-Veg'}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Title, Veg/Non-Veg Dot, and Price */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5 flex-1">
              {/* Authentic Indian Veg / Non-Veg Square Symbol */}
              <span
                className={`mt-1 flex-shrink-0 w-4 h-4 rounded-sm border-2 flex items-center justify-center bg-white ${
                  item.isVeg ? 'border-emerald-600' : 'border-red-700'
                }`}
                title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.isVeg ? 'bg-emerald-600' : 'bg-red-700'
                  }`}
                />
              </span>

              {/* Food Name */}
              <h3
                onClick={() => onSelect(item)}
                className="font-serif text-lg sm:text-xl font-bold text-forest hover:text-gold cursor-pointer transition-colors leading-snug"
              >
                {displayName}
              </h3>
            </div>

            {/* Price in Indian Rupees */}
            <span className="text-lg sm:text-xl font-serif font-bold text-forest shrink-0">
              {formatPrice(item.price)}
            </span>
          </div>

          {/* Short Description (if provided) */}
          {displayDesc && (
            <p className="text-xs sm:text-sm text-walnut/80 line-clamp-2 leading-relaxed font-light">
              {displayDesc}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 bg-white">
        <div className="flex items-center gap-2 pt-3 border-t border-forest/5">
          <button
            onClick={() => onSelect(item)}
            className="flex-1 py-2.5 px-3 rounded-full bg-ivory hover:bg-sage/40 text-walnut font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-1"
          >
            <span>View Details</span>
            <ChevronRight size={14} />
          </button>

          <button
            onClick={() => onCallItem(item)}
            className="flex-1 py-2.5 px-3 rounded-full bg-forest hover:bg-forest-light text-gold hover:text-ivory font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 group/btn"
          >
            <Phone size={13} className="text-gold group-hover/btn:rotate-12 transition-transform" />
            <span>Call to Order</span>
          </button>
        </div>
      </div>
    </article>
  );
}

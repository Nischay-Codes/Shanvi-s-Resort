import React from 'react';
import { Phone, Clock, Sparkles, ChevronRight, Info } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function MenuCard({ item, onSelect, onCallItem }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-forest/10 hover:border-gold/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      {/* Visual Header */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-forest-dark/20 cursor-pointer" onClick={() => onSelect(item)}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
            <div className="flex flex-wrap gap-1.5">
              {item.isChefSpecial && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold text-forest-dark font-bold text-[11px] shadow-sm uppercase tracking-wider">
                  <Sparkles size={11} /> Chef's Signature
                </span>
              )}
              {item.tags?.slice(0, 2).map((tag) => (
                tag !== "Chef's Signature" && (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-forest-dark/80 backdrop-blur-sm text-sage text-[11px] font-medium border border-sage/20"
                  >
                    {tag}
                  </span>
                )
              ))}
            </div>

            {/* Quick Prep Time Pill */}
            {item.prepTime && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-walnut text-[11px] font-medium shadow-sm">
                <Clock size={11} className="text-gold" />
                {item.prepTime}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Title, Veg Indicator, and Price */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2 flex-1">
              {/* Authentic Veg / Non-Veg Indicator Icon */}
              <span
                className={`mt-1 flex-shrink-0 w-4 h-4 rounded-sm border flex items-center justify-center ${
                  item.isVeg
                    ? 'border-emerald-600'
                    : 'border-red-700'
                }`}
                title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.isVeg ? 'bg-emerald-600' : 'bg-red-700'
                  }`}
                />
              </span>
              <h3
                onClick={() => onSelect(item)}
                className="font-serif text-lg sm:text-xl font-bold text-forest hover:text-gold cursor-pointer transition-colors leading-snug"
              >
                {item.title}
              </h3>
            </div>
            <span className="text-lg sm:text-xl font-serif font-bold text-forest shrink-0">
              ₹{item.price}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-walnut/80 line-clamp-2 leading-relaxed">
            {item.shortDescription}
          </p>

          {/* Calorie / Ingredient snippet */}
          <div className="pt-2 flex items-center justify-between text-xs text-walnut/60 border-t border-forest/5">
            <span className="italic">{item.calories || 'Made Fresh'}</span>
            <button
              onClick={() => onSelect(item)}
              className="text-forest hover:text-gold font-medium inline-flex items-center gap-0.5 transition-colors"
            >
              <Info size={12} className="inline" />
              <span>Details & Notes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 bg-white">
        <div className="flex items-center gap-2 pt-2 border-t border-forest/5">
          <button
            onClick={() => onSelect(item)}
            className="flex-1 py-2.5 px-3 rounded-full bg-ivory hover:bg-sage/40 text-walnut font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-1"
          >
            <span>View Dish</span>
            <ChevronRight size={14} />
          </button>

          <button
            onClick={() => onCallItem(item)}
            className="flex-1 py-2.5 px-3 rounded-full bg-forest hover:bg-forest-light text-gold hover:text-ivory font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 group/btn"
          >
            <Phone size={13} className="text-gold group-hover/btn:rotate-12 transition-transform" />
            <span>Call to Order</span>
          </button>
        </div>
      </div>
    </article>
  );
}

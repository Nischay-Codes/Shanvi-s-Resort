import React, { useRef, useEffect, useState } from 'react';
import { LayoutGrid, ChevronDown, X, Check } from 'lucide-react';
import { categories } from '../data/menuData';

export default function CategoryNav({ activeCategory, onSelectCategory, itemCounts }) {
  const scrollContainerRef = useRef(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // Auto scroll active category pill into view on mobile
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeEl = scrollContainerRef.current.querySelector('[data-active="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activeCategory]);

  const handleSelectFromPicker = (catId) => {
    onSelectCategory(catId);
    setIsPickerOpen(false);
    const el = document.getElementById('our-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeCategoryName = categories.find((c) => c.id === activeCategory)?.name || 'All Dishes';

  return (
    <>
      <div className="sticky top-[68px] sm:top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-forest/10 shadow-sm py-2.5 sm:py-3 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          {/* Quick Category Sheet Trigger Button */}
          <button
            type="button"
            onClick={() => setIsPickerOpen(true)}
            className="flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-full bg-forest-dark text-gold border border-gold/40 hover:border-gold font-semibold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            title="Browse all menu categories"
            aria-label="Browse all menu categories"
          >
            <LayoutGrid size={13} className="text-gold" />
            <span className="hidden sm:inline">Categories ({categories.length})</span>
            <span className="sm:hidden font-sans">Menu</span>
            <ChevronDown size={12} className="text-gold" />
          </button>

          <div className="w-[1px] h-5 bg-forest/20 shrink-0" />

          {/* Horizontal Scrolling Category Pills */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1 flex-1"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = itemCounts[cat.id] ?? 0;

              return (
                <button
                  key={cat.id}
                  data-active={isActive}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex-shrink-0 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 sm:gap-2 active:scale-95 ${
                    isActive
                      ? 'bg-forest text-gold border border-forest shadow-md font-semibold ring-1 ring-gold/40'
                      : 'bg-white/90 hover:bg-white text-walnut border border-forest/10 hover:border-gold/50 shadow-sm'
                  }`}
                >
                  <span className="whitespace-nowrap">{cat.name}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-gold/25 text-gold'
                          : 'bg-sage text-forest-dark'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Picker Sheet / Modal */}
      {isPickerOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/80 backdrop-blur-sm p-4 sm:p-6 flex items-end sm:items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsPickerOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gold/40 text-walnut max-h-[85vh] flex flex-col my-0 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sheet Header */}
            <div className="bg-forest text-ivory p-4 sm:p-5 flex items-center justify-between border-b border-gold/30">
              <div className="flex items-center gap-2.5">
                <LayoutGrid size={18} className="text-gold" />
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory">
                    All Menu Categories
                  </h3>
                  <p className="text-[11px] sm:text-xs text-ivory/70">
                    Currently viewing: <strong className="text-gold font-semibold">{activeCategoryName}</strong>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="p-2 rounded-full text-ivory/80 hover:text-gold hover:bg-forest-dark/50 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Categories Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = itemCounts[cat.id] ?? 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectFromPicker(cat.id)}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 active:scale-95 ${
                      isActive
                        ? 'bg-forest text-gold border-gold shadow-md font-semibold ring-2 ring-gold/40'
                        : 'bg-ivory-light hover:bg-white text-forest border-forest/10 hover:border-gold/50 shadow-sm'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-sm sm:text-base font-bold truncate">
                          {cat.name}
                        </h4>
                        {isActive && <Check size={14} className="text-gold shrink-0" />}
                      </div>
                      <p className={`text-[11px] line-clamp-1 mt-0.5 ${isActive ? 'text-ivory/70' : 'text-walnut/70'}`}>
                        {cat.description || cat.tagline}
                      </p>
                    </div>

                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-bold shrink-0 ${
                        isActive
                          ? 'bg-gold text-forest-dark'
                          : 'bg-forest/10 text-forest'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

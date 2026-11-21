import React, { useRef, useEffect } from 'react';
import { categories } from '../data/menuData';

export default function CategoryNav({ activeCategory, onSelectCategory, itemCounts }) {
  const scrollContainerRef = useRef(null);

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

  return (
    <div className="sticky top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-forest/10 shadow-sm py-3 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = itemCounts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                data-active={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-forest text-gold border border-forest shadow-md font-semibold'
                    : 'bg-white/80 hover:bg-white text-walnut border border-forest/10 hover:border-gold/50 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
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
  );
}

import React from 'react';
import { Search, X, SlidersHorizontal, Sparkles, Check } from 'lucide-react';
import { dietaryFilters } from '../data/menuData';

export default function FilterBar({
  searchQuery,
  onSearchChange,
  activeDietary,
  onSelectDietary,
  resultCount,
  onClearFilters
}) {
  const hasActiveFilters = searchQuery.trim() !== '' || activeDietary !== 'all';
  const isPureVegActive = activeDietary === 'Pure Veg';

  const togglePureVeg = () => {
    onSelectDietary(isPureVegActive ? 'all' : 'Pure Veg');
  };

  return (
    <div className="bg-ivory-light border-b border-forest/10 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Search bar row with Quick Pure Veg button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-walnut/40 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 299 dishes (e.g. Paneer, Biryani, Dosa...)"
              className="w-full pl-9 sm:pl-10 pr-9 py-2.5 rounded-full bg-white border border-forest/15 text-walnut placeholder-walnut/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-gold transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-walnut/40 hover:text-walnut p-1"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Quick One-Tap Pure Veg Switch */}
          <button
            type="button"
            onClick={togglePureVeg}
            className={`flex-shrink-0 px-3 sm:px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 border ${
              isPureVegActive
                ? 'bg-emerald-800 text-emerald-100 border-emerald-600 ring-2 ring-emerald-500/40'
                : 'bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-600/30'
            }`}
            title="Toggle Pure Vegetarian only"
            aria-label="Toggle Pure Vegetarian only"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" />
            <span className="whitespace-nowrap">Pure Veg</span>
            {isPureVegActive && <Check size={12} className="text-emerald-300" />}
          </button>
        </div>

        {/* Dietary Filters & Results Counter Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          {/* Dietary Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] sm:text-xs text-walnut/60 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1 shrink-0">
              <SlidersHorizontal size={12} />
              Filter:
            </span>
            {dietaryFilters.map((diet) => {
              const isSelected = activeDietary === diet.id;
              return (
                <button
                  key={diet.id}
                  onClick={() => onSelectDietary(diet.id)}
                  className={`flex-shrink-0 px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? 'bg-forest text-gold shadow-sm font-semibold'
                      : 'bg-white hover:bg-sage/40 text-walnut/80 border border-forest/10'
                  }`}
                >
                  {diet.id === 'Pure Veg' && (
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
                  )}
                  {diet.id === 'Non-Veg' && (
                    <span className="inline-block w-2 h-2 rounded-full bg-red-600 mr-1.5" />
                  )}
                  {diet.id === "Chef's Signature" && (
                    <Sparkles size={11} className="inline mr-1 text-gold" />
                  )}
                  {diet.label}
                </button>
              );
            })}
          </div>

          {/* Results Summary & Reset */}
          <div className="flex items-center gap-2.5 text-xs text-walnut/70 ml-auto">
            <span>
              <strong className="text-forest font-semibold">{resultCount}</strong> {resultCount === 1 ? 'dish' : 'dishes'}
            </span>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="px-2.5 py-0.5 rounded-full bg-sage/70 hover:bg-sage text-forest font-semibold text-[11px] flex items-center gap-1 transition-colors"
              >
                <X size={11} />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
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

  return (
    <div className="bg-ivory-light border-b border-forest/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Search bar and counter row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-lg">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-walnut/40 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search dishes, ingredients (truffle, wagyu, lobster...)"
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-forest/15 text-walnut placeholder-walnut/40 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-gold transition-all shadow-sm"
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

          {/* Results Summary & Clear Button */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs sm:text-sm text-walnut/70">
            <span>
              Showing <strong className="text-forest font-semibold">{resultCount}</strong> culinary{' '}
              {resultCount === 1 ? 'creation' : 'creations'}
            </span>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="px-3 py-1 rounded-full bg-sage/60 hover:bg-sage text-forest font-medium text-xs flex items-center gap-1 transition-colors"
              >
                <X size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Dietary Filters Pill Strip */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          <span className="text-xs text-walnut/60 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1 shrink-0">
            <SlidersHorizontal size={13} />
            Filter:
          </span>
          {dietaryFilters.map((diet) => {
            const isSelected = activeDietary === diet.id;
            return (
              <button
                key={diet.id}
                onClick={() => onSelectDietary(diet.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
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
      </div>
    </div>
  );
}

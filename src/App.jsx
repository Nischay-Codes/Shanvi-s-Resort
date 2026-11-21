import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryNav from './components/CategoryNav';
import FilterBar from './components/FilterBar';
import MenuCard from './components/MenuCard';
import MenuItemModal from './components/MenuItemModal';
import CallToOrderModal from './components/CallToOrderModal';
import DiningInfoSection from './components/DiningInfoSection';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import { categories, menuItems } from './data/menuData';
import { resortInfo } from './data/resortData';
import { Sparkles, UtensilsCrossed, Phone } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDietary, setActiveDietary] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [modalCallingItem, setModalCallingItem] = useState(null);

  // Compute item count per category
  const itemCounts = useMemo(() => {
    const counts = { all: menuItems.length };
    categories.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = menuItems.filter((i) => i.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (activeDietary !== 'all') {
        if (activeDietary === 'Pure Veg' && !item.isVeg) return false;
        if (activeDietary === 'Non-Veg' && item.isVeg) return false;
        if (activeDietary === "Chef's Signature" && !item.isChefSpecial) return false;
        if (
          activeDietary !== 'Pure Veg' &&
          activeDietary !== 'Non-Veg' &&
          activeDietary !== "Chef's Signature"
        ) {
          if (!item.tags?.includes(activeDietary)) return false;
        }
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query);
        const matchesIng = item.ingredients?.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        const matchesTag = item.tags?.some((tag) =>
          tag.toLowerCase().includes(query)
        );

        if (!matchesTitle && !matchesDesc && !matchesIng && !matchesTag) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeDietary, searchQuery]);

  // Handlers for calling
  const handleOpenGeneralCall = () => {
    setModalCallingItem(null);
    setIsCallModalOpen(true);
  };

  const handleCallItem = (item) => {
    setModalCallingItem(item);
    setIsCallModalOpen(true);
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveDietary('all');
    setSearchQuery('');
  };

  const currentCategoryInfo = useMemo(() => {
    return categories.find((c) => c.id === activeCategory) || categories[0];
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-walnut selection:bg-gold/30">
      {/* Top Navigation */}
      <Navbar
        onOpenCallModal={handleOpenGeneralCall}
        onOpenInfoModal={() => {
          document.getElementById('ethos-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Welcome & Ordering Guide */}
      <HeroBanner
        onOpenCallModal={handleOpenGeneralCall}
        onOpenInfoModal={() => {
          document.getElementById('ethos-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Menu Collection Container */}
      <main id="menu-collection" className="flex-1">
        {/* Sticky Category Tabs */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          itemCounts={itemCounts}
        />

        {/* Search & Dietary Filters */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeDietary={activeDietary}
          onSelectDietary={setActiveDietary}
          resultCount={filteredItems.length}
          onClearFilters={handleResetFilters}
        />

        {/* Current Section Title & Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-forest/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                {activeCategory === 'all' ? 'Signature Gastronomy' : 'Selected Course'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                {currentCategoryInfo.name}
              </h2>
              <p className="text-xs sm:text-sm text-walnut/70 mt-1 font-light">
                {currentCategoryInfo.tagline}
              </p>
            </div>

            {/* Quick ordering hint */}
            <div className="text-xs text-walnut/70 bg-white/70 px-3.5 py-1.5 rounded-full border border-forest/10 self-start sm:self-auto flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                To order, simply dial <strong className="text-forest font-semibold">{resortInfo.phone.inVillaExt}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Menu Items Grid or Empty State */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedItem}
                  onCallItem={handleCallItem}
                />
              ))}
            </div>
          ) : (
            /* Refined Empty Search State */
            <div className="text-center py-16 px-4 bg-white/60 rounded-3xl border border-forest/10 max-w-xl mx-auto my-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-sage/40 text-forest mx-auto flex items-center justify-center">
                <UtensilsCrossed size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest">
                No culinary creations matched your search
              </h3>
              <p className="text-sm text-walnut/70 max-w-sm mx-auto font-light leading-relaxed">
                We couldn't find items matching "{searchQuery || activeDietary}". Our chefs are happy
                to prepare bespoke dishes upon telephone request.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-full bg-forest text-gold text-xs font-semibold uppercase tracking-wider hover:bg-forest-light transition-colors"
                >
                  View All Delicacies
                </button>
                <button
                  onClick={handleOpenGeneralCall}
                  className="px-5 py-2.5 rounded-full bg-gold text-forest-dark text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>Inquire with Kitchen</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Organic Farm Ethos & Service Hours Section */}
        <DiningInfoSection onOpenCallModal={handleOpenGeneralCall} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCallModal={handleOpenGeneralCall}
        onOpenInfoModal={() => {
          document.getElementById('ethos-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Dish Detail Quick-View Modal */}
      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onCallItem={handleCallItem}
      />

      {/* Dedicated Call to Order Modal */}
      <CallToOrderModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        selectedItem={modalCallingItem}
      />

      {/* Floating Call to Order Action Button */}
      <FloatingCallButton onOpenCallModal={handleOpenGeneralCall} />
    </div>
  );
}

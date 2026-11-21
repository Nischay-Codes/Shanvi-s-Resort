import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
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
import { UtensilsCrossed, Phone, Sparkles } from 'lucide-react';

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
        if (activeDietary === "Chef's Signature" && !item.isSpecial && !item.isChefSpecial) {
          return false;
        }
      }

      // Search query filter (search by food name and description)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const itemName = (item.name || item.title || '').toLowerCase();
        const itemDesc = (item.description || item.shortDescription || '').toLowerCase();

        if (!itemName.includes(query) && !itemDesc.includes(query)) {
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
      {/* 1. Clean Navigation Bar (Home, Our Menu, About, Contact) */}
      <Navbar onOpenCallModal={handleOpenGeneralCall} />

      {/* 2. Full-Width Luxury Resort Hero Section */}
      <HeroSection onOpenCallModal={handleOpenGeneralCall} />

      {/* 3. Introduction Section: Resort Dining Experience */}
      <AboutSection onOpenCallModal={handleOpenGeneralCall} />

      {/* 4. Complete Digital Menu Section */}
      <section id="our-menu" className="flex-1 bg-ivory py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest text-gold text-xs font-semibold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles size={13} className="text-gold" />
            <span>Culinary Selections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest">
            Explore Our Menu
          </h2>
          <p className="mt-2 text-sm sm:text-base text-walnut/70 max-w-xl mx-auto font-light">
            Crafted fresh by our master chefs. Browse dishes by category or dietary preference and call room service to order.
          </p>
        </div>

        {/* Sticky Horizontal Category Tabs */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          itemCounts={itemCounts}
        />

        {/* Search & Dietary Filters (Pure Veg / Non-Veg / Chef's Special) */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeDietary={activeDietary}
          onSelectDietary={setActiveDietary}
          resultCount={filteredItems.length}
          onClearFilters={handleResetFilters}
        />

        {/* Current Active Category Title Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-forest/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                {activeCategory === 'all' ? 'Resort Repertoire' : 'Selected Category'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                {currentCategoryInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-walnut/70 mt-1 font-light">
                {currentCategoryInfo.tagline}
              </p>
            </div>

            {/* Quick ordering hint badge */}
            <div className="text-xs text-walnut/70 bg-white px-4 py-2 rounded-full border border-forest/10 self-start sm:self-auto flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                To order, dial{' '}
                <strong className="text-forest font-bold">{resortInfo.phone.inVillaExt}</strong> from your room
              </span>
            </div>
          </div>
        </div>

        {/* Menu Items Grid or Refined Empty Search State */}
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
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-forest/10 max-w-xl mx-auto my-8 space-y-4 shadow-luxury">
              <div className="w-14 h-14 rounded-full bg-sage/40 text-forest mx-auto flex items-center justify-center">
                <UtensilsCrossed size={24} />
              </div>
              <h4 className="font-serif text-xl font-bold text-forest">
                No dishes found
              </h4>
              <p className="text-sm text-walnut/70 max-w-sm mx-auto font-light leading-relaxed">
                We couldn't find items matching "{searchQuery || activeDietary}". Our chefs are happy
                to prepare custom orders upon telephone request.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-full bg-forest text-gold text-xs font-semibold uppercase tracking-wider hover:bg-forest-light transition-colors"
                >
                  View All Dishes
                </button>
                <button
                  onClick={handleOpenGeneralCall}
                  className="px-5 py-2.5 rounded-full bg-gold text-forest-dark text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>Call Front Desk</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Contact & Operating Hours Section (id="contact") */}
      <DiningInfoSection onOpenCallModal={handleOpenGeneralCall} />

      {/* 6. Resort Footer */}
      <Footer
        onOpenCallModal={handleOpenGeneralCall}
        onOpenInfoModal={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Persistent Floating Call Button */}
      <FloatingCallButton onOpenCallModal={handleOpenGeneralCall} />
    </div>
  );
}

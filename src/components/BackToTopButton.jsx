import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToMenuTop = () => {
    const el = document.getElementById('our-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleScrollToMenuTop}
      className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom))] sm:bottom-24 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-forest text-gold border border-gold/40 shadow-2xl flex items-center justify-center hover:bg-forest-dark hover:border-gold hover:scale-105 active:scale-90 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
      aria-label="Scroll back to top of menu"
      title="Back to Top"
    >
      <ChevronUp size={20} className="text-gold" />
    </button>
  );
}

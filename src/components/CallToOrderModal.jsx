import React from 'react';
import { X, Phone, Clock, MapPin, Sparkles, ShieldCheck, CheckCircle } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function CallToOrderModal({ isOpen, onClose, selectedItem }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-gold/40 text-walnut transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Deep Forest Green styling */}
        <div className="bg-forest text-ivory p-6 sm:p-8 relative border-b border-gold/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-forest-dark text-white/80 hover:text-gold transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-dark text-gold text-xs font-semibold uppercase tracking-widest mb-3 border border-gold/30">
            <Phone size={12} /> Direct Ordering Desk
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory leading-snug">
            Call In-Room & Cottage Dining
          </h2>
          <p className="text-xs sm:text-sm text-ivory/80 mt-1.5">
            {selectedItem
              ? `Ready to order "${selectedItem.title}"? Our chefs at Shanvi's Resort are at your service.`
              : 'Our culinary team at Shanvi\'s Resort is standing by to prepare your order fresh.'}
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Call Action Buttons */}
          <div className="space-y-3">
            <a
              href={`tel:${resortInfo.phone.tel}`}
              className="w-full py-4 px-6 rounded-2xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-base flex items-center justify-between shadow-gold-glow transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-forest-dark text-gold group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-forest-dark/80 font-bold">
                    One-Tap Telephone Dial
                  </span>
                  <span className="text-base sm:text-lg font-serif font-bold text-forest-dark">
                    {resortInfo.phone.display}
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-forest-dark/10">
                Call Now
              </span>
            </a>

            {/* In-Room Telephone Extension Card */}
            <div className="p-4 rounded-2xl bg-ivory border border-forest/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-walnut/70 block">
                  From Your Room / Cottage Phone
                </span>
                <span className="font-serif text-lg font-bold text-forest">
                  Dial {resortInfo.phone.inVillaExt}
                </span>
              </div>
              <span className="text-xs text-walnut/60 font-medium">Toll-free inside resort</span>
            </div>
          </div>

          {/* Simple 4-Step Guide */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-walnut/70 mb-3 flex items-center gap-1.5">
              <Sparkles size={13} className="text-gold" />
              Ordering In 4 Simple Steps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resortInfo.orderingSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-3.5 rounded-xl bg-sage/20 border border-sage/40 flex items-start gap-2.5"
                >
                  <span className="font-serif font-bold text-sm text-forest bg-sage/60 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div className="text-xs">
                    <strong className="block text-forest font-semibold mb-0.5">
                      {step.title}
                    </strong>
                    <span className="text-walnut/80 leading-relaxed">
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Hours & Delivery Times */}
          <div className="p-4 rounded-2xl bg-forest-dark text-ivory text-xs space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="flex items-center gap-1.5 text-gold font-semibold">
                <Clock size={13} /> Average Preparation & Delivery
              </span>
              <strong className="text-ivory">25–35 Minutes</strong>
            </div>
            <div className="text-ivory/70 text-[11px] leading-relaxed pt-1">
              Please mention any food allergies (nuts, dairy, gluten, shellfish) to our host when
              placing your call. Tableware & heating cloches are collected upon request.
            </div>
          </div>
        </div>

        {/* Footer with Close Button */}
        <div className="p-4 bg-ivory border-t border-forest/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white hover:bg-forest hover:text-gold text-walnut text-xs font-semibold tracking-wider transition-colors border border-forest/15"
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}

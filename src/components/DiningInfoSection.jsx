import React from 'react';
import { Clock, MapPin, Phone, Sparkles, CheckCircle, HelpCircle } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function DiningInfoSection({ onOpenCallModal }) {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-forest text-ivory relative overflow-hidden border-t border-gold/20">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-dark border border-gold/30 text-gold text-xs uppercase tracking-widest">
            <MapPin size={13} className="text-gold" />
            <span>Resort Concierge & Room Service</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory">
            Contact & Kitchen Operating Hours
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Our kitchen team is available throughout the day to prepare your orders fresh. For in-room dining, poolside orders, or garden service, please reach out to us directly.
          </p>
        </div>

        {/* 2-Column Contact & Operating Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Direct Calling & Extension Info */}
          <div className="bg-forest-dark/80 rounded-3xl p-8 border border-gold/25 shadow-luxury flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center mb-5">
                <Phone size={22} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mb-2">
                Direct Room Service
              </h3>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light mb-6">
                Pick up your room phone or tap below to connect with our culinary desk instantly.
              </p>

              <div className="space-y-3 bg-forest/50 p-4 rounded-2xl border border-white/5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
                    In-Room Extension
                  </span>
                  <span className="font-serif text-lg font-bold text-ivory">
                    {resortInfo.phone.inVillaExt}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block">
                    Direct Mobile / WhatsApp
                  </span>
                  <a
                    href={`tel:${resortInfo.phone.tel}`}
                    className="font-serif text-lg font-bold text-ivory hover:text-gold transition-colors"
                  >
                    {resortInfo.phone.display}
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCallModal}
              className="w-full py-3.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-widest text-center shadow-gold-glow transition-all"
            >
              Call Culinary Desk Now
            </button>
          </div>

          {/* Card 2: Location & Address */}
          <div className="bg-forest-dark/80 rounded-3xl p-8 border border-gold/25 shadow-luxury flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center mb-5">
                <MapPin size={22} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mb-2">
                Resort Location
              </h3>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light mb-6">
                Located on the scenic Chitrakote route in Jagdalpur, amidst ancient sal trees and serene natural greenery.
              </p>

              <div className="space-y-2 bg-forest/50 p-4 rounded-2xl border border-white/5 text-xs text-ivory/80 leading-relaxed">
                <p>
                  <strong className="text-gold font-semibold block mb-0.5">Shanvi's Resort</strong>
                  {resortInfo.location}
                </p>
                <p className="pt-2 border-t border-white/5 text-[11px] text-ivory/60">
                  Landmark: On the way to Chitrakote & Tirathgarh Waterfalls
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-forest/30 border border-gold/15 text-center text-xs text-gold font-medium">
              Open Daily for Guests & Private Events
            </div>
          </div>

          {/* Card 3: Ordering Guide */}
          <div className="bg-forest-dark/80 rounded-3xl p-8 border border-gold/25 shadow-luxury flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center mb-5">
                <HelpCircle size={22} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mb-2">
                How to Order
              </h3>
              <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light mb-4">
                Fast & fresh delivery in 4 easy steps:
              </p>

              <div className="space-y-2.5">
                {resortInfo.orderingSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-2.5 text-xs">
                    <span className="font-serif text-gold font-bold text-xs bg-forest w-5 h-5 rounded-full flex items-center justify-center shrink-0 border border-gold/30">
                      {step.step}
                    </span>
                    <span className="text-ivory/85">
                      <strong className="text-ivory font-semibold">{step.title}:</strong> {step.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-ivory/60 italic text-center">
              Please inform of any nut, dairy, or spice allergies upon calling.
            </div>
          </div>
        </div>

        {/* Kitchen Service Schedule Strip */}
        <div className="bg-forest-dark rounded-3xl p-6 sm:p-10 border border-gold/25 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
                <Clock size={13} /> Daily Dining Hours
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mt-1">
                Kitchen Service Schedule
              </h3>
            </div>
            <div className="text-xs text-ivory/70 bg-forest/60 px-4 py-1.5 rounded-full border border-forest-light/40">
              Freshly Prepared • Est. Time: ~20-30 mins
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
            {resortInfo.serviceHours.map((slot) => (
              <div
                key={slot.label}
                className="p-4 sm:p-5 rounded-2xl bg-forest/40 border border-forest-light/30 space-y-1.5 hover:bg-forest/60 transition-colors"
              >
                <div className="flex items-center gap-2 text-gold">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">{slot.label}</span>
                </div>
                <p className="font-serif text-base sm:text-lg font-bold text-ivory">{slot.time}</p>
                <p className="text-[11px] text-ivory/60">Delivered directly to room or garden</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

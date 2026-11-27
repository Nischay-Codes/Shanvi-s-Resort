import React from 'react';
import { Phone, Clock, MapPin, Leaf, Shield, Heart } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function Footer({ onOpenCallModal, onOpenInfoModal }) {
  return (
    <footer className="bg-forest-dark text-ivory pt-16 pb-24 sm:pb-16 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Crest */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/40 bg-forest flex items-center justify-center text-gold">
                <Leaf size={20} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-ivory">
                {resortInfo.name}
              </span>
            </div>
            <p className="text-sm text-ivory/70 max-w-md font-light leading-relaxed">
              {resortInfo.description}
            </p>
            <div className="pt-2 text-xs text-gold/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>In-Room & Dining Table Service Available Daily</span>
            </div>
          </div>

          {/* Quick Ordering Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Culinary Desk Contact
            </h4>
            <div className="space-y-2 text-sm text-ivory/80">
              <p>
                In-Room Phone:{' '}
                <strong className="text-gold font-bold">{resortInfo.phone.inVillaExt}</strong>
              </p>
              <p>
                Direct Concierge:{' '}
                <a
                  href={`tel:${resortInfo.phone.tel}`}
                  className="text-ivory hover:text-gold transition-colors font-medium"
                >
                  {resortInfo.phone.display}
                </a>
              </p>
              <p className="text-xs text-ivory/60 pt-1">
                Location: {resortInfo.location}
              </p>
            </div>
            <a
              href={`tel:${resortInfo.phone.tel}`}
              className="mt-2 text-xs uppercase tracking-wider text-gold hover:text-ivory font-semibold inline-flex items-center gap-1.5 transition-colors active:scale-95"
            >
              <Phone size={12} /> Dial Culinary Desk
            </a>
          </div>

          {/* Gastronomy Notes & Quality Assurance */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              Dining Policies
            </h4>
            <ul className="text-xs text-ivory/70 space-y-1.5">
              <li>• Prepared fresh to order (25–35 mins)</li>
              <li>• Organic estate greenhouse sourcing</li>
              <li>• Bespoke dietary adjustments upon request</li>
              <li>• Subject to 10% service charge & taxes</li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} {resortInfo.name}. All rights reserved. Fine dining experience.</p>
          <p className="text-center sm:text-right text-ivory/60">
            For front desk or room assistance, dial <strong className="text-gold">0</strong> from your room phone.
          </p>
        </div>
      </div>
    </footer>
  );
}

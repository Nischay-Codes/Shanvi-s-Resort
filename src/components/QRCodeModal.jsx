import React, { useState } from 'react';
import { X, QrCode, Download, ExternalLink, Printer, Sparkles, Phone, Check } from 'lucide-react';
import { resortInfo } from '../data/resortData';

export default function QRCodeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('card'); // 'card' or 'qr'
  const [copiedUrl, setCopiedUrl] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href.split('#')[0];

  const handleCopyUrl = () => {
    navigator.clipboard?.writeText(currentUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/80 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-gold/40 text-walnut max-h-[90vh] flex flex-col my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest text-ivory p-4 sm:p-5 flex items-center justify-between border-b border-gold/30">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
              <QrCode size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory">
                Resort QR Code Menu
              </h3>
              <p className="text-[11px] sm:text-xs text-ivory/70">
                Scan with any smartphone camera to open the menu
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-ivory/80 hover:text-gold hover:bg-forest-dark/50 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* View Selector Tabs */}
        <div className="p-3 bg-ivory-light border-b border-forest/10 flex items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('card')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'card'
                ? 'bg-forest text-gold shadow-sm'
                : 'bg-white text-walnut/70 border border-forest/10 hover:bg-white'
            }`}
          >
            Table Stand Card (Print Ready)
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'qr'
                ? 'bg-forest text-gold shadow-sm'
                : 'bg-white text-walnut/70 border border-forest/10 hover:bg-white'
            }`}
          >
            QR Code Only
          </button>
        </div>

        {/* Content Display */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center text-center space-y-4">
          {activeTab === 'card' ? (
            <div className="space-y-3 w-full">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 shadow-xl max-w-xs mx-auto bg-forest-dark">
                <img
                  src="/shanvis-table-qr-stand.png"
                  alt="Shanvi's Resort Table Stand Card"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs text-walnut/70 max-w-sm mx-auto leading-relaxed">
                Print this card on 4×6" or 5×7" acrylic table stands for dining tables and cottage rooms.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-2xl border-2 border-forest/15 shadow-lg inline-block">
                <img
                  src="/qr-menu.png"
                  alt="Digital Menu QR Code"
                  className="w-56 h-56 object-contain mx-auto"
                />
              </div>
              <p className="text-xs text-walnut/70 max-w-xs mx-auto leading-relaxed">
                Point any smartphone camera at this code to explore all 299 dishes.
              </p>
            </div>
          )}

          {/* Wi-Fi / Local Network Notice */}
          <div className="bg-sage/40 border border-forest/10 rounded-2xl p-3 text-left w-full text-xs space-y-1 text-forest">
            <span className="font-bold flex items-center gap-1.5 text-forest">
              <Sparkles size={13} className="text-gold-dark" />
              <span>Instant Wi-Fi Testing:</span>
            </span>
            <p className="text-walnut/80 text-[11px] leading-relaxed">
              If your phone is connected to the same Wi-Fi, scanning will immediately load the live website at{' '}
              <strong className="text-forest font-semibold">{currentUrl}</strong>.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-ivory border-t border-forest/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <button
            onClick={handleCopyUrl}
            className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white hover:bg-ivory-light text-walnut border border-forest/15 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            {copiedUrl ? <Check size={14} className="text-emerald-600" /> : <ExternalLink size={14} />}
            <span>{copiedUrl ? 'URL Copied!' : 'Copy Menu URL'}</span>
          </button>

          <a
            href={activeTab === 'card' ? '/shanvis-table-qr-stand.png' : '/qr-menu.png'}
            download={activeTab === 'card' ? 'shanvis-table-qr-stand.png' : 'shanvis-qr-menu.png'}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow transition-all active:scale-95 text-center"
          >
            <Download size={14} />
            <span>{activeTab === 'card' ? 'Download Print Card' : 'Download QR PNG'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

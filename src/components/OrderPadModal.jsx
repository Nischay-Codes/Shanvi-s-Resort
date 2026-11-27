import React, { useState } from 'react';
import { X, Phone, Trash2, Plus, Minus, Copy, Check, Utensils, Sparkles } from 'lucide-react';
import { formatPrice } from '../data/menuData';
import { resortInfo } from '../data/resortData';

export default function OrderPadModal({
  isOpen,
  onClose,
  shortlist,
  onUpdateQuantity,
  onClear,
  onOpenCallModal
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const items = Object.values(shortlist);
  const totalItemsCount = items.reduce((sum, entry) => sum + (entry.quantity || 1), 0);
  const totalEstimatedPrice = items.reduce((sum, entry) => {
    const p = parseFloat(entry.item.price) || 0;
    return sum + p * (entry.quantity || 1);
  }, 0);

  const handleCopyOrder = () => {
    if (items.length === 0) return;
    const lines = [
      `*${resortInfo.name} - Order Selection*`,
      `Room / Table: ____________`,
      '',
      ...items.map(
        (entry, i) =>
          `${i + 1}. ${entry.item.name || entry.item.title} x ${entry.quantity} = ${formatPrice(
            (parseFloat(entry.item.price) || 0) * entry.quantity
          )}`
      ),
      '',
      `Total Estimated: ${formatPrice(totalEstimatedPrice)}`,
      `Dial Ext: ${resortInfo.phone.inVillaExt}`
    ];
    navigator.clipboard?.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/80 backdrop-blur-sm p-3 sm:p-6 flex items-end sm:items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gold/40 text-walnut transform transition-all my-0 sm:my-8 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest text-ivory p-4 sm:p-5 flex items-center justify-between border-b border-gold/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
              <Utensils size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory flex items-center gap-2">
                <span>Table Order Pad</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gold text-forest-dark font-bold font-sans">
                  {totalItemsCount}
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-ivory/70 font-light">
                Review your dishes before dialing in-room dining
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

        {/* Selected Dishes List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-10 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-sage/40 text-forest mx-auto flex items-center justify-center">
                <Utensils size={20} />
              </div>
              <h4 className="font-serif text-base font-bold text-forest">
                Your order pad is empty
              </h4>
              <p className="text-xs text-walnut/70 max-w-xs mx-auto leading-relaxed">
                Tap the bookmark icon on any dish while browsing the menu to collect your dishes here.
              </p>
            </div>
          ) : (
            items.map((entry) => {
              const { item, quantity } = entry;
              const unitPrice = parseFloat(item.price) || 0;
              const subtotal = unitPrice * quantity;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-ivory-light border border-forest/10 hover:border-gold/40 transition-colors"
                >
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <span
                      className={`mt-1 flex-shrink-0 w-3 h-3 rounded-sm border-2 flex items-center justify-center bg-white ${
                        item.isVeg ? 'border-emerald-600' : 'border-red-700'
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          item.isVeg ? 'bg-emerald-600' : 'bg-red-700'
                        }`}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-forest truncate">
                        {item.name || item.title}
                      </h4>
                      <span className="text-[11px] text-walnut/70">
                        {formatPrice(item.price)} each
                      </span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 bg-white border border-forest/15 rounded-full px-2 py-1 shadow-sm shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:text-gold text-walnut/70 transition-colors active:scale-90"
                      aria-label="Decrease quantity"
                    >
                      {quantity === 1 ? <Trash2 size={12} className="text-red-500" /> : <Minus size={12} />}
                    </button>
                    <span className="text-xs font-bold w-4 text-center text-forest">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:text-gold text-walnut/70 transition-colors active:scale-90"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <span className="text-xs sm:text-sm font-bold text-forest shrink-0 w-16 text-right">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Totals & Actions */}
        {items.length > 0 && (
          <div className="bg-ivory border-t border-forest/10 p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-walnut/70">Estimated Total ({totalItemsCount} items):</span>
              <span className="font-serif text-lg sm:text-xl font-bold text-forest">
                {formatPrice(totalEstimatedPrice)}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {/* Call Room Service Direct Keypad CTA */}
              <a
                href={`tel:${resortInfo.phone.tel}`}
                className="flex-1 py-3 px-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow transition-all active:scale-95 text-center"
              >
                <Phone size={14} />
                <span>Call to Order ({resortInfo.phone.display})</span>
              </a>

              {/* Copy Order to Clipboard */}
              <button
                onClick={handleCopyOrder}
                className="p-3 rounded-full bg-forest-dark hover:bg-forest text-gold border border-gold/30 hover:border-gold transition-colors active:scale-95"
                title="Copy order list"
                aria-label="Copy order list"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>

              {/* Clear List */}
              <button
                onClick={onClear}
                className="p-3 rounded-full bg-white hover:bg-red-50 text-walnut/60 hover:text-red-600 border border-forest/10 transition-colors active:scale-90"
                title="Clear order pad"
                aria-label="Clear order pad"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {copied && (
              <p className="text-[11px] text-emerald-700 font-semibold text-center animate-in fade-in">
                ✓ Order list copied to clipboard! You can paste it into WhatsApp or read it out.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

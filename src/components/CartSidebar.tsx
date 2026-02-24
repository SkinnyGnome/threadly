import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';

export const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[120] w-full max-w-md bg-brand-bg border-l border-white/5 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} />
                <h2 className="text-xl font-serif font-bold tracking-tight">YOUR CART</h2>
                <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-brand-surface rounded-full flex items-center justify-center text-brand-muted">
                    <ShoppingBag size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold mb-2">YOUR CART IS EMPTY</h3>
                    <p className="text-sm text-brand-muted font-light">
                      Looks like you haven't added anything to your collection yet.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest rounded-full hover:scale-105 transition-transform"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-brand-surface rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-serif font-bold group-hover:text-brand-muted transition-colors">
                            {item.name}
                          </h4>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-brand-muted hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] text-brand-muted font-bold tracking-widest uppercase mb-2">
                          SIZE: {item.selectedSize}
                        </p>
                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-2 hover:bg-white/5 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="p-2 hover:bg-white/5 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/5 space-y-6 bg-brand-surface/50 backdrop-blur-md">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-brand-muted uppercase mb-1">SUBTOTAL</p>
                    <p className="text-2xl font-serif font-bold">${totalPrice.toFixed(2)}</p>
                  </div>
                  <p className="text-[10px] text-brand-muted font-light italic">Shipping calculated at checkout</p>
                </div>
                
                <button className="group w-full py-5 bg-white text-black font-bold text-sm tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  CHECKOUT NOW <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

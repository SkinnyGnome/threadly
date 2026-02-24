import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Check } from 'lucide-react';
import { Product, Size } from '../types';
import { useCart } from '../CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    addToCart(product, selectedSize);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-brand-surface rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.3em] text-brand-muted mb-4 block uppercase">
                  {product.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                  {product.name}
                </h2>
                <p className="text-2xl font-light text-white/90 mb-6">
                  ${product.price}
                </p>
                <p className="text-brand-muted leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold tracking-widest uppercase">SELECT SIZE</h4>
                  {showSizeError && (
                    <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase animate-pulse">
                      Please select a size
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setShowSizeError(false);
                      }}
                      className={`
                        w-12 h-12 rounded-xl border text-xs font-bold transition-all flex items-center justify-center
                        ${selectedSize === size 
                          ? 'bg-white border-white text-black scale-110' 
                          : 'border-white/10 hover:border-white/30 text-white'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="group w-full py-5 bg-white text-black font-bold text-sm tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag size={18} />
                ADD TO COLLECTION
              </button>
              
              <div className="mt-8 flex items-center gap-6 text-[10px] font-bold tracking-widest text-brand-muted uppercase">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" /> 100% ORGANIC COTTON
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" /> ETHICALLY MADE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

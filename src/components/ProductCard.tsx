import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Eye } from 'lucide-react';
import { Product } from '../types';
import { ProductModal } from './ProductModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-surface rounded-2xl mb-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
            <div className="flex flex-col gap-3 w-full max-w-[200px]">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="w-full py-3 bg-white text-black font-bold text-[10px] tracking-widest rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-muted"
              >
                <Plus size={14} /> ADD TO CART
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="w-full py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-[10px] tracking-widest rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-white/20"
              >
                <Eye size={14} /> VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-serif font-medium group-hover:text-brand-muted transition-colors">
              {product.name}
            </h3>
            <span className="text-sm font-medium">${product.price}</span>
          </div>
          <p className="text-xs text-brand-muted font-light uppercase tracking-widest">
            {product.category}
          </p>
        </div>
      </motion.div>

      <ProductModal 
        product={isModalOpen ? product : null} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

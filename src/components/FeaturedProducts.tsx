import React from 'react';
import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedProducts = () => {
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-brand-muted mb-4 block uppercase">
              CURATED SELECTION
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              FEATURED <span className="italic font-light opacity-80">DESIGNS</span>
            </h2>
          </div>
          <Link 
            to="/shop" 
            className="group flex items-center gap-3 text-sm font-bold tracking-widest hover:text-brand-muted transition-colors"
          >
            VIEW ALL PRODUCTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

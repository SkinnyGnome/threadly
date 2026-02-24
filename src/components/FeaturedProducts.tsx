import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 4;
const AUTO_ADVANCE_MS = 4000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

export const FeaturedProducts = () => {
  const { t } = useTranslation();
  const featured = PRODUCTS.filter(p => p.featured);
  const totalPages = Math.ceil(featured.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((newPage: number, dir: number) => {
    setDirection(dir);
    setPage(newPage);
  }, []);

  const next = useCallback(() => {
    goTo((page + 1) % totalPages, 1);
  }, [page, totalPages, goTo]);

  const prev = useCallback(() => {
    goTo((page - 1 + totalPages) % totalPages, -1);
  }, [page, totalPages, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [next]);

  // Always show ITEMS_PER_PAGE products, wrapping around the featured array
  const visibleProducts = Array.from({ length: ITEMS_PER_PAGE }, (_, i) =>
    featured[(page * ITEMS_PER_PAGE + i) % featured.length]
  );

  return (
    <section className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-brand-muted mb-4 block uppercase">
              {t('featured.curatedSelection')}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              {t('featured.heading')} <span className="italic font-light opacity-80">{t('featured.subheading')}</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="group flex items-center gap-3 text-sm font-bold tracking-widest hover:text-brand-muted transition-colors"
          >
            VIEW ALL PRODUCTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative px-10">
          <button
            onClick={prev}
            aria-label="Previous products"
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            aria-label="Next products"
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
              >
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > page ? 1 : -1)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  i === page ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

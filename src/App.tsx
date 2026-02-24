/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';

import { CartProvider } from './CartContext';
import { CartSidebar } from './components/CartSidebar';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <FeaturedProducts />
    
    {/* Story Section */}
    <section className="py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <span className="text-xs font-semibold tracking-[0.3em] text-brand-muted uppercase">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              CRAFTED FOR THE <br />
              <span className="italic font-light opacity-80">DISCERNING FEW</span>
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed font-light">
              We believe that true style doesn't shout. It whispers. Our t-shirts are designed 
              with a focus on silhouette, texture, and durability. No loud logos, just 
              perfect fit and premium materials.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 border border-white/20 hover:border-white/50 rounded-full text-xs font-bold tracking-widest transition-all">
                LEARN ABOUT OUR PROCESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">JOIN THE INNER CIRCLE</h2>
        <p className="text-brand-muted mb-12 font-light">
          Be the first to know about new collection drops and exclusive events.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="flex-1 bg-brand-surface border border-white/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
          <button className="px-10 py-4 bg-white text-black font-bold text-xs tracking-widest rounded-full hover:scale-105 transition-transform">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  </motion.div>
);

const ShopPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-32"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">THE COLLECTION</h1>
        <p className="text-brand-muted max-w-xl font-light">
          Explore our full range of premium t-shirts. From everyday essentials to 
          limited edition graphic prints.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-32"
  >
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12">OUR STORY</h1>
      <div className="space-y-8 text-lg text-brand-muted font-light leading-relaxed">
        <p>
          Founded in 2024, Threadly was born out of a frustration with the 
          fast-fashion industry. We saw a world filled with disposable clothing 
          and loud, fleeting trends.
        </p>
        <p>
          We decided to go back to basics. To focus on the most fundamental piece 
          of any wardrobe: the t-shirt.
        </p>
        <p>
          Our mission is simple: to create the perfect t-shirt. One that fits 
          perfectly, feels incredible, and lasts for years, not weeks.
        </p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartSidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}


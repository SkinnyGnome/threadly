import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1920&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-brand-bg/80 to-brand-bg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-brand-muted mb-6 uppercase">
            ESTABLISHED 2024
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter leading-none mb-8 text-balance">
            THE ART OF <br />
            <span className="italic font-light opacity-80">MINIMALISM</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-brand-muted font-light mb-12 leading-relaxed">
            Premium t-shirts designed for those who appreciate the subtle details. 
            Crafted for longevity, styled for the modern era.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/shop"
              className="group relative px-10 py-5 bg-white text-black font-bold text-sm tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE COLLECTION <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/about"
              className="px-10 py-5 border border-white/20 hover:border-white/50 rounded-full text-sm font-bold tracking-widest transition-all"
            >
              OUR STORY
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-brand-muted uppercase">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

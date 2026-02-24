import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-white text-black py-2 text-[10px] font-bold tracking-[0.2em] text-center uppercase">
        {t('announcement')}
      </div>
      
      <div className="glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
              {t('nav.brand')}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-muted transition-colors">{t('nav.home')}</Link>
            <Link to="/shop" className="text-sm font-medium hover:text-brand-muted transition-colors">{t('nav.shop')}</Link>
            <Link to="/about" className="text-sm font-medium hover:text-brand-muted transition-colors">{t('nav.about')}</Link>
            <LanguageSelector />
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-4 text-base font-medium hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/shop" 
                className="block px-3 py-4 text-base font-medium hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.shop')}
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-4 text-base font-medium hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <div className="px-3 py-4">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

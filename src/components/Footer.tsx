import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-surface border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter mb-8 block">
              THREADLY
            </Link>
            <p className="text-brand-muted max-w-sm mb-8 leading-relaxed">
              Redefining the modern wardrobe through minimalist design and premium craftsmanship. 
              Join our journey towards sustainable, timeless fashion.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-brand-muted hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-8">SHOP</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Collections</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Essentials</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Graphics</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Limited Edition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-8">SUPPORT</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-xs text-brand-muted tracking-widest uppercase">
            © 2024 THREADLY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold tracking-widest uppercase text-brand-muted">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

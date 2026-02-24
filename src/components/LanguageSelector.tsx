import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'da', label: 'Dansk', nativeLabel: 'Dansk' },
    { code: 'sv', label: 'Svenska', nativeLabel: 'Svenska' },
    { code: 'no', label: 'Norsk', nativeLabel: 'Norsk' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-white/20 hover:border-white/50 transition-all hover:bg-white/5"
        aria-label={t('nav.language')}
      >
        <span>{currentLanguage?.nativeLabel}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-brand-surface border border-white/10 rounded-lg shadow-lg z-50 overflow-hidden backdrop-blur"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-all hover:bg-white/5 ${
                  i18n.language === lang.code ? 'bg-white/10 border-l-2 border-white' : ''
                }`}
              >
                {lang.nativeLabel}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

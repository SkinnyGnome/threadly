import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files for each language
// Each language must have a common.json file with all UI strings to support this language
import enCommon from './locales/en/common.json';
import daCommon from './locales/da/common.json';
import svCommon from './locales/sv/common.json';
import noCommon from './locales/no/common.json';

// Define namespaces and resources
const resources = {
  en: { common: enCommon },
  da: { common: daCommon },
  sv: { common: svCommon },
  no: { common: noCommon },
};

// Supported languages - ONLY these languages will be allowed
// To add a new language:
// 1. Create src/locales/{languageCode}/common.json
// 2. Import it above
// 3. Add to resources object
// 4. Add language code to this array
const supportedLanguages = ['en', 'da', 'sv', 'no'];

i18next
  // Use browser language detector with detection chain
  // Detection order: localStorage → browser language → HTML lang attribute
  // Only languages in supportedLanguages whitelist will be used
  .use(LanguageDetector)
  // Initialize i18next with react-i18next
  .use(initReactI18next)
  .init({
    resources,
    defaultLanguage: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    
    // Language detector configuration
    // order: Detection priority (localStorage preference checked first)
    // caches: Save detected language to localStorage for persistence
    // lookupLocalStorage: Key for localStorage (threadly-language)
    // checkWhitelist: Only accept supported languages
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'threadly-language',
      // Only accept supported languages
      checkWhitelist: true,
    },
    
    // Whitelist - only these languages are allowed
    supportedLngs: supportedLanguages,

    // Allow missing translation keys in production
    saveMissing: false,

    // Interpolation settings
    interpolation: {
      escapeValue: false, // React already prevents XSS
    },

    // React-specific settings
    react: {
      useSuspense: false,
    },
  });

export default i18next;

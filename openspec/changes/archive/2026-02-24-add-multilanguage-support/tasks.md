## 1. Setup & Dependencies

- [x] 1.1 Install i18next and react-i18next packages
- [x] 1.2 Install i18next-browser-languagedetector for browser locale detection
- [x] 1.3 Update package.json and verify all dependencies are installed

## 2. i18n Infrastructure Setup

- [x] 2.1 Create src/locales directory structure (src/locales/{en,da,sv,no}/)
- [x] 2.2 Create i18n.ts configuration file to initialize i18next with multi-language setup
- [x] 2.3 Configure i18next with react-i18next and set English as default language
- [x] 2.4 Add i18next-browser-languagedetector plugin with detection chain: localStorage → browser language → English
- [x] 2.5 Configure supported languages and whitelist (en, da, sv, no only)
- [x] 2.6 Set up localStorage persistence plugin to save/restore language preference
- [x] 2.7 Import and initialize i18n in src/main.tsx before mounting the React app

## 3. Translation Files - Common Namespace

- [x] 3.1 Create src/locales/en/common.json with English translations for navbar, home page, and common UI elements
- [x] 3.2 Create src/locales/da/common.json with Danish translations
- [x] 3.3 Create src/locales/sv/common.json with Swedish translations
- [x] 3.4 Create src/locales/no/common.json with Norwegian translations
- [x] 3.5 Verify all translation keys match across all language files

## 4. Language Selector Component

- [x] 4.1 Create src/components/LanguageSelector.tsx component with dropdown UI
- [x] 4.2 Implement language option display (English, Dansk, Svenska, Norsk)
- [x] 4.3 Add onChange handler to switch language via i18next
- [x] 4.4 Style language selector to match navbar design (flexbox, responsive)
- [x] 4.5 Add hover states and visual feedback for better UX
- [ ] 4.6 Test dropdown opens/closes and selections work correctly

## 5. UI Integration

- [x] 5.1 Import LanguageSelector component into src/components/Navbar.tsx
- [x] 5.2 Position LanguageSelector in top-right corner of navbar
- [x] 5.3 Replace hardcoded English strings in Navbar.tsx with i18n keys (use useTranslation hook)
- [x] 5.4 Replace hardcoded English strings in Hero.tsx with i18n keys
- [x] 5.5 Replace hardcoded English strings in FeaturedProducts.tsx with i18n keys
- [x] 5.6 Replace hardcoded English strings in ProductCard.tsx with i18n keys
- [x] 5.7 Replace hardcoded English strings in Cart/CartSidebar.tsx with i18n keys
- [x] 5.8 Replace hardcoded English strings in Footer.tsx with i18n keys
- [x] 5.9 Add any missing common UI translations to all language files (plurals, conditionals, etc.)

## 6. Testing & Documentation

- [ ] 6.1 Test language switching works across all components (no page reload)
- [ ] 6.2 Verify language preference persists on page refresh and new session
- [ ] 6.3 Test on mobile/tablet viewports to ensure language selector is accessible
- [ ] 6.4 Test with browser language set to Danish - verify Danish is auto-detected
- [ ] 6.5 Test with browser language set to Swedish - verify Swedish is auto-detected
- [ ] 6.6 Test with browser language set to Norwegian - verify Norwegian is auto-detected
- [ ] 6.7 Test with browser language set to unsupported language (e.g., French) - verify English fallback
- [ ] 6.8 Clear localStorage and verify browser locale detection works on first visit
- [ ] 6.9 Verify localStorage preference takes priority over browser locale detection
- [ ] 6.10 Test fallback to English when localStorage is unavailable
- [ ] 6.11 Test with browser developer tools that translations and detection are working correctly
- [ ] 6.12 Create README documenting how to add new translations for future languages
- [ ] 6.13 Add comments in i18n.ts explaining configuration options and detection order

## 7. Deployment & Cleanup

- [ ] 7.1 Build application and verify no console errors or warnings
- [ ] 7.2 Test production build works with all languages
- [ ] 7.3 Verify bundle size increase is acceptable
- [ ] 7.4 Commit all changes with clear commit message

## 6. Testing & Documentation

- [ ] 6.1 Test language switching works across all components (no page reload)
- [ ] 6.2 Verify language preference persists on page refresh and new session
- [ ] 6.3 Test on mobile/tablet viewports to ensure language selector is accessible
- [ ] 6.4 Test with browser language set to Danish - verify Danish is auto-detected
- [ ] 6.5 Test with browser language set to Swedish - verify Swedish is auto-detected
- [ ] 6.6 Test with browser language set to Norwegian - verify Norwegian is auto-detected
- [ ] 6.7 Test with browser language set to unsupported language (e.g., French) - verify English fallback
- [ ] 6.8 Clear localStorage and verify browser locale detection works on first visit
- [ ] 6.9 Verify localStorage preference takes priority over browser locale detection
- [ ] 6.10 Test fallback to English when localStorage is unavailable
- [ ] 6.11 Test with browser developer tools that translations and detection are working correctly
- [ ] 6.12 Create README documenting how to add new translations for future languages
- [ ] 6.13 Add comments in i18n.ts explaining configuration options and detection order

## 7. Deployment & Cleanup

- [ ] 7.1 Build application and verify no console errors or warnings
- [ ] 7.2 Test production build works with all languages
- [ ] 7.3 Verify bundle size increase is acceptable
- [ ] 7.4 Commit all changes with clear commit message

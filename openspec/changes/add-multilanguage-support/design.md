## Context

Threadly is a React/TypeScript frontend application with a Vite build setup. Currently, all UI text is hardcoded in English across React components. To support multiple languages, we need to introduce an internationalization (i18n) solution that can:
- Manage translation keys across components
- Switch languages dynamically without page reload
- Persist user language preference
- Support pluralization and formatting

The application is already client-side only (no backend API changes needed), making this primarily a frontend integration task.

## Goals / Non-Goals

**Goals:**
- Implement language selector dropdown in navbar (top-right corner)
- Support English, Danish, Swedish, and Norwegian languages
- Provide complete i18n infrastructure for future language additions
- Enable dynamic language switching without page reload
- Persist language preference in localStorage
- Ensure all visible UI text is translatable

**Non-Goals:**
- Backend/API translation support (not needed)
- Right-to-left (RTL) language support
- Date/time/currency localization (translations only)
- Server-side rendering or static generation

## Decisions

1. **i18n Library: i18next with react-i18next**
   - Rationale: Industry standard, widely used, excellent React integration, JSON-based translation files, easy namespace support
   - Alternatives considered: 
     - react-intl: More heavyweight, more suited for complex locale data
     - zustand-based custom solution: Too much boilerplate for this use case

2. **Translation File Structure: Nested JSON by feature**
   - Store translations in `src/locales/{language}/` with modular namespaces (e.g., `common.json`, `product.json`, `cart.json`)
   - Rationale: Keeps translation files organized and maintainable as the app grows
   - Alternative: Single large JSON per language - simpler but harder to maintain

3. **Language Selector Placement: Navbar Top-Right**
   - Add language dropdown as new component in Navbar, positioned in top-right corner
   - Rationale: Visible, accessible location; standard pattern in web apps
   - Triggers language change on selection

4. **Language Preference Storage: localStorage**
   - Store selected language in localStorage key `threadly-language`
   - Rationale: Simple, client-side only, persists across sessions
   - Alternative: User profile in backend - not needed for MVP

5. **Language Change Flow: Immediate re-render**
   - Use i18next instance to change language and React hooks pick up changes immediately
   - Store current language in a context/hook for navbar and components to consume
   - Rationale: Provides instant user feedback, no page reload needed

6. **Browser Locale Auto-detection: Enabled with English Fallback**
   - On first visit, use i18next-browser-languagedetector to detect browser language preference
   - Only apply if detected language is one of the supported languages (en, da, sv, no)
   - Fall back to English if: browser locale is unsupported, detection fails, or localStorage preference exists
   - Rationale: Better UX for returning users and users in Nordic regions; English provides safe fallback

## Risks / Trade-offs

- **Translation Maintenance**: Manual updates required when adding new features
  - Mitigation: Document translation key naming convention, create process for adding new strings
- **Bundle Size**: Adding i18next and translation files increases bundle
  - Mitigation: i18next is lightweight (~50KB), translation files are small; acceptable trade-off for feature value
- **Initial Translation Effort**: Need complete translations for 4 languages before launch
  - Mitigation: Can use professional translation service or community contributions
- **Language Not Selected on First Visit**: Users see English by default, then selector loads
  - Mitigation: Detect browser locale on first visit (i18next has built-in support) as enhancement

## Risks / Trade-offs

None currently blocking - this is a low-risk, additive feature.

## Migration Plan

1. Install i18next, react-i18next, and i18next-browser-languagedetector dependencies
2. Create locales folder structure with JSON translation files
3. Initialize i18next in app startup (main.tsx) with browser locale detection and localStorage fallback
4. Wrap app with I18nextProvider
5. Create LanguageSelector component with dropdown UI
6. Integrate LanguageSelector into Navbar
7. Replace all hardcoded English strings with i18next keys using `useTranslation()` hook in components
8. Test language switching and persistence
9. Test browser locale auto-detection with various browser language settings
10. Deploy with all translations complete

## Notes

No RTL languages are planned for current or foreseeable future, so RTL CSS layout changes are not needed.

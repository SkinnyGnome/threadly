## Why

Threadly currently serves only English-speaking users, limiting its potential market to non-English speakers in the Nordics (most of Europe has significant populations of Danish, Swedish, and Norwegian speakers). By adding multilanguage support, we can significantly expand our user base and provide a localized experience that increases user engagement and satisfaction.

## What Changes

- Add a language selector dropdown in the top-right corner of the frontpage navigation
- Implement internationalization (i18n) infrastructure to support multiple languages
- Provide complete UI translations for English, Danish, Swedish, and Norwegian
- Store user's language preference for persistence across sessions
- Dynamically switch UI language when users select a different language from the dropdown

## Capabilities

### New Capabilities
- `language-selector-component`: A dropdown component in the navbar that displays available languages and allows users to switch between English, Danish, Swedish, and Norwegian
- `i18n-infrastructure`: Internationalization system using a library like i18next or react-i18next to manage translation keys and language switching
- `language-persistence`: Store the user's selected language preference in localStorage and load it on subsequent visits

### Modified Capabilities
<!-- No existing capabilities require modification - this is additive functionality -->

## Impact

- Frontend: New component in Navbar, integration of i18n library, translation files for 4 languages
- UX: Navbar will have additional language selector dropdown in top-right corner
- Dependencies: Addition of i18n library (e.g., i18next, react-i18next)
- No API changes required - all translations are client-side

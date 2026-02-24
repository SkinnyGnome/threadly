# Adding New Languages to Threadly

This guide explains how to add support for new languages in the Threadly i18n system.

## How It Works

Threadly uses **i18next** with **react-i18next** for internationalization. The system automatically:
- Detects the user's browser language preference
- Falls back to a saved localStorage preference
- Defaults to English for unsupported languages

**Supported languages:** English (en), Danish (da), Swedish (sv), Norwegian (no)

## Adding a New Language

### Step 1: Create Translation Files

Create a new directory under `src/locales/` for your language code:

```bash
mkdir src/locales/es  # Example: Spanish with code 'es'
```

Copy the structure from an existing language folder:

```bash
cp src/locales/en/common.json src/locales/es/common.json
```

### Step 2: Translate Keys

Edit the new `common.json` file and translate all values while keeping keys unchanged:

```json
{
  "nav": {
    "brand": "THREADLY",
    "home": "INICIO",
    "shop": "TIENDA",
    "about": "ACERCA DE",
    "language": "Idioma"
  },
  ...
}
```

**Important:** Keep ALL keys exactly the same—only translate the values.

### Step 3: Update i18n Configuration

Edit `src/i18n.ts` to:

1. Import the new translation file:
```tsx
import esCommon from './locales/es/common.json';
```

2. Add to resources:
```tsx
const resources = {
  en: { common: enCommon },
  da: { common: daCommon },
  sv: { common: svCommon },
  no: { common: noCommon },
  es: { common: esCommon },  // Add this line
};
```

3. Add language code to supportedLanguages array:
```tsx
const supportedLanguages = ['en', 'da', 'sv', 'no', 'es'];
```

### Step 4: Update LanguageSelector Component

Edit `src/components/LanguageSelector.tsx` and add to the `languages` array:

```tsx
const languages = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'da', label: 'Dansk', nativeLabel: 'Dansk' },
  { code: 'sv', label: 'Svenska', nativeLabel: 'Svenska' },
  { code: 'no', label: 'Norsk', nativeLabel: 'Norsk' },
  { code: 'es', label: 'Español', nativeLabel: 'Español' },  // Add this line
];
```

### Step 5: Test

1. Start the dev server:
```bash
npm run dev
```

2. Click the language selector dropdown
3. Verify your new language appears and that clicking it switches all UI text

## Translation Key Structure

All keys are organized by feature/component:

```json
{
  "announcement": "...",      // Navbar announcement bar
  "nav": { ... },             // Navigation menu
  "hero": { ... },            // Hero section
  "featured": { ... },        // Featured products section
  "philosophy": { ... },      // Philosophy/story section
  "newsletter": { ... },      // Newsletter signup
  "shop": { ... },            // Shop page
  "product": { ... },         // Product cards
  "cart": { ... },            // Shopping cart
  "footer": { ... },          // Footer links and info
  "about": { ... }            // About page
}
```

## Browser Language Detection

The system automatically detects browser language on first visit:
- If browser language matches a supported language (en, da, sv, no, es), it's selected
- Otherwise, English is used as the default
- User's previous selection (stored in localStorage) always takes priority

## localStorage

Language preference is stored as: `threadly-language`

To manually clear: Open DevTools → Application → LocalStorage → Delete `threadly-language` entry

## Adding Plural Rules

For languages with complex pluralization, you can use i18next namespacing (add later if needed):

1. Create feature-specific translation files (e.g., `src/locales/es/product.json`)
2. Load them in i18n.ts
3. Use in components: `const { t } = useTranslation('product');`

## Common Translation Patterns

### Using Variables
```jsx
// Translation file
"cart.items": "You have {{count}} item in your cart"

// Component
const { t } = useTranslation();
t('cart.items', { count: 5 })  // "You have 5 items in your cart"
```

### Using Interpolation
Learn more: https://www.i18next.com/translation-function/interpolation

## Need Help?

- i18next docs: https://www.i18next.com/
- react-i18next docs: https://react.i18next.com/
- Browser language codes: https://en.wikipedia.org/wiki/IETF_language_tag

## ADDED Requirements

### Requirement: i18n Library Integration
The system SHALL integrate an internationalization library (i18next with react-i18next) to manage translation keys and enable dynamic language switching.

#### Scenario: Initialize i18n on app startup
- **WHEN** the application starts
- **THEN** i18next SHALL be initialized with available languages (English, Danish, Swedish, Norwegian) and English SHALL be the default

#### Scenario: Load translation files
- **WHEN** i18next initializes
- **THEN** translation files for supported languages SHALL be loaded from src/locales/{language}/

#### Scenario: Provide translation via hooks
- **WHEN** a React component uses the useTranslation() hook
- **THEN** the component SHALL receive a t() function that returns translated text for given keys

### Requirement: Translation File Organization
The system SHALL organize translations in JSON files by language and namespace.

#### Scenario: Language subdirectories
- **WHEN** accessing locales
- **THEN** directory structure SHALL be src/locales/{language}/common.json where {language} is 'en', 'da', 'sv', 'no'

#### Scenario: Common namespace
- **WHEN** components need basic UI translations
- **THEN** common.json SHALL contain keys like 'home.title', 'nav.language', 'nav.products', 'nav.cart'

#### Scenario: Feature-based namespaces
- **WHEN** functionality grows
- **THEN** additional namespace files MAY be created (e.g., product.json, cart.json) to organize translations by feature

### Requirement: Dynamic Language Switching
The system SHALL support changing language at runtime without requiring a page reload.

#### Scenario: Change i18next language
- **WHEN** user selects a new language from the dropdown
- **THEN** i18next instance SHALL update its language and all components using useTranslation() SHALL re-render with new translations

#### Scenario: Update UI immediately
- **WHEN** language is changed
- **THEN** all visible text on the page SHALL be updated within 100ms

### Requirement: Browser Locale Auto-detection
The system SHALL automatically detect the user's browser language preference on first visit and apply it if supported.

#### Scenario: Detect and apply supported browser language
- **WHEN** user visits the application for the first time with no saved language preference
- **THEN** system SHALL detect browser locale and apply it if it matches a supported language (English, Danish, Swedish, Norwegian)

#### Scenario: Fallback to English for unsupported locale
- **WHEN** user's browser locale is not one of the supported languages
- **THEN** system SHALL default to English

#### Scenario: Respect localStorage over auto-detection
- **WHEN** user has a saved language preference in localStorage
- **THEN** system SHALL load and apply the saved preference instead of auto-detecting browser locale

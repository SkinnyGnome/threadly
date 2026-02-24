## ADDED Requirements

### Requirement: Persist Language Preference
The system SHALL store the user's selected language preference in browser localStorage and restore it on subsequent visits.

#### Scenario: Save language selection
- **WHEN** user selects a language from the dropdown
- **THEN** the selected language code SHALL be saved to localStorage with key 'threadly-language'

#### Scenario: Load persisted language on return visit
- **WHEN** user visits the application again
- **THEN** the application SHALL check localStorage for 'threadly-language' and load that language if it exists

#### Scenario: Apply persisted language before render
- **WHEN** application initializes
- **THEN** persisted language preference SHALL be applied to i18next before the UI renders

### Requirement: Clear Language Preference
The system SHALL allow for clearing the stored language preference if needed.

#### Scenario: Browser error or corruption
- **WHEN** localStorage is unavailable or corrupted
- **THEN** application SHALL fall back to English as default and continue functioning normally

#### Scenario: Manual reset
- **WHEN** user clears browser data (localStorage)
- **THEN** next visit SHALL default to English until user selects a different language

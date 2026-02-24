## ADDED Requirements

### Requirement: Language Selector Dropdown Component
The system SHALL provide a language selector dropdown component positioned in the top-right corner of the navbar that allows users to select from English, Danish, Swedish, and Norwegian.

#### Scenario: Display language selector in navbar
- **WHEN** the frontpage is loaded
- **THEN** a language dropdown shall be visible in the top-right corner of the navbar

#### Scenario: Select language from dropdown
- **WHEN** user clicks on the language dropdown
- **THEN** a menu SHALL display with options for "English", "Dansk", "Svenska", and "Norsk"

#### Scenario: Change language on selection
- **WHEN** user selects a language from the dropdown
- **THEN** the UI SHALL immediately update to display all text in the selected language

#### Scenario: Display current language
- **WHEN** language selector is visible
- **THEN** the currently selected language SHALL be displayed in the dropdown button

### Requirement: Language Selector Styling
The language selector SHALL be styled to match the existing navbar design and be visually distinct as an interactive element.

#### Scenario: Responsive design
- **WHEN** viewport width is reduced (mobile, tablet)
- **THEN** language selector SHALL remain accessible and usable

#### Scenario: Visual indicator
- **WHEN** user hovers over language selector
- **THEN** cursor SHALL change to pointer and dropdown SHALL show visual feedback (e.g., highlighting)

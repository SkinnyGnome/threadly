---
description: Rules for AI-powered features in Threadly (currently not in use). Apply these rules if/when AI features are added to the project.
applyTo: "src/features/ai/**/*"
---

# Threadly – AI Feature Instructions

⚠️ **Status**: AI features are **not currently implemented** in this codebase. 

These rules are **for future use** if AI-powered features (product recommendations, descriptions, etc.) are added.

---

## When AI features are added

If AI features are added to Threadly, they will:

1. **Use Google Generative AI** (via `@google/genai` package already installed)
   - Import from: `import { GoogleGenerativeAI } from '@google/genai'`
   - Use the `GEMINI_API_KEY` environment variable
   - Create a shared client in `src/lib/gemini.ts` (to be created)

2. **Create feature code** in a new `src/features/ai/` directory (currently doesn't exist)
   - Prompts live in `src/features/ai/prompts/` as `.ts` files
   - Export a `buildPrompt(params)` function from each prompt file
   - Keep prompts short, opinionated, and on-brand (friendly, helpful, never salesy)

3. **Handle graceful degradation** — every AI feature must support three states:
   - `idle` — show fallback content
   - `loading` — show skeleton/spinner
   - `error` — show user-friendly fallback message (never expose raw API errors)

4. **Always wrap async AI calls** in try/catch blocks with proper error handling

5. **Keep token budgets strict**:
   - Product descriptions ≤ 120 tokens
   - Size recommendations ≤ 60 tokens
   - Other features as needed

6. **Testing AI features**:
   - Mock the Gemini client (at `src/lib/gemini.ts`) in tests
   - Never call real API endpoints in CI
   - Unit-test prompt builders independently
   - Add `data-testid="ai-output"` to AI-generated content

---

## Current project status

- ✅ `@google/genai` package installed
- ✅ `GEMINI_API_KEY` environment variable ready (.env.example configured)
- ❌ No `src/features/` directory yet
- ❌ No `src/lib/gemini.ts` client yet
- ❌ No AI features integrated

Create these when ready to add AI-powered features.
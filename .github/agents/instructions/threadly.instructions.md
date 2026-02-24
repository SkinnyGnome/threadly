---
description: Core project rules for Threadly — a React + TypeScript t-shirt e-commerce shop. Apply to every file in the project to ensure brand, tech stack, and coding conventions are always respected.
applyTo: "**/*"
---

# Threadly – Project Instructions

## What is Threadly?

Threadly is an e-commerce storefront for custom, tech-themed t-shirts.
Tagline: **"THE ART OF MINIMALISM"**

## Tech stack

- **Framework**: React 19 with TypeScript (strict mode)
- **Build tool**: Vite
- **Styling**: Tailwind CSS v4 — never write inline `style={}` props
- **State**: React Context (CartContext) for cart state; no Redux
- **Routing**: React Router v7 (routes defined in `src/App.tsx`)
- **Animation**: Framer Motion (`motion/react`)
- **Icons**: Lucide React

## Brand identity

| Token           | Value                                        |
| --------------- | -------------------------------------------- |
| Primary (navy)  | `#1B3A6B` — Tailwind class `brand-navy`      |
| Accent (orange) | `#F5821F` — Tailwind class `brand-orange`    |
| Surface         | `#FAFAF7` — Tailwind class `brand-surface`   |
| Muted           | `#A6A6A0` — Tailwind class `brand-muted`     |
| Font family     | Inter (headings), system-ui (body)           |

## File & folder conventions

```
src/
├── components/        # Shared UI components — PascalCase filenames (flat structure)
├── constants.ts       # Product data (PRODUCTS array)
├── types.ts          # TypeScript interfaces (Product, CartItem, Size)
├── CartContext.tsx   # Cart state management
├── App.tsx           # Routes and page layouts
├── main.tsx          # React entry point
└── index.css         # Global styles with Tailwind directives
```

**No subdirectories**, no feature slices, no lib folder. Keep components flat.

## Coding rules

- All components must be **typed** — no `any`, no implicit `any`.
- **Named exports only** — `export const ComponentName = () => { ... }`
  - Example: `export const ProductCard: React.FC<Props> = ({ product }) => { ... }`
- Use Framer Motion for all animations
- Use Lucide React for icons: `import { Plus, Eye } from 'lucide-react'`
- All product data lives in `src/constants.ts` — never hard-code inside components
- Images use Unsplash URLs: `https://images.unsplash.com/photo-...?auto=format&fit=crop&w=800&q=80`

## Product schema

All products in `src/constants.ts` must follow the `Product` interface from `src/types.ts`:

```typescript
interface Product {
  id: string;                    // Numeric string: '1', '2', '3'...
  name: string;
  description: string;
  price: number;
  image: string;                 // Unsplash URL
  category: string;              // 'Essentials' | 'Graphics'
  featured?: boolean;            // Homepage carousel or catalog only
  sizes: ('S' | 'M' | 'L' | 'XL')[]; // Available sizes
}
```

## Routes & pages

Routes are defined directly in `src/App.tsx` using React Router:
- `/` — Homepage (Hero + FeaturedProducts + Story)
- `/shop` — Shop catalog page
- Add new routes to the `<Routes>` component in App.tsx

## Do NOT

- Do not add new npm packages without asking first.
- Do not hard-code product data inside components — always read from `src/constants.ts`.
- Do not use inline styles — Tailwind only.
- Do not create subdirectories in `src/components/` — keep it flat.
- Do not create feature slices or lib folders — not used in this project.
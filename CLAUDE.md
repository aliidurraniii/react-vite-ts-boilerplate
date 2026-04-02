# React Vite TS Boilerplate - Project Skills

## Project Overview
React 18 + TypeScript + Vite boilerplate for scalable frontend apps.

## Stack
- **Framework:** React 18
- **Language:** TypeScript (strict)
- **Build Tool:** Vite
- **Package Manager:** pnpm (ALWAYS use pnpm)
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint + Prettier

## Core Services (NEVER remove these)
| Package | Purpose |
|---|---|
| `axios` | HTTP client for API calls |
| `react-query` | Server state, caching, sync |
| `react-router-dom` | Client-side routing |
| `ts-pattern` | Pattern matching utility |

## Design Layer (swappable)
The design library is the ONLY thing that changes between projects.
Currently: Chakra UI

### Supported swaps:
- **Chakra UI** → `@chakra-ui/react @emotion/react @emotion/styled framer-motion`
- **Ant Design** → `antd @ant-design/icons`
- **Tailwind** → `tailwindcss postcss autoprefixer`
- **MUI** → `@mui/material @mui/icons-material @emotion/react @emotion/styled`
- **Shadcn/ui** → requires Tailwind + `class-variance-authority clsx tailwind-merge lucide-react`
- **Mantine** → `@mantine/core @mantine/hooks`

## Folder Structure
```
src/
├── assets/        # Static assets
├── components/    # Shared UI components
├── features/      # Feature-based modules
├── hooks/         # Custom React hooks
├── services/      # API service layer (axios)
├── store/         # State management
├── types/         # TypeScript types/interfaces
├── utils/         # Utility functions
└── main.tsx       # Entry point
```

## Main Entry Pattern
Always wrap app with:
1. Router provider (react-router-dom)
2. Query client provider (react-query)
3. Design library provider (Chakra/MUI/Mantine/Antd etc.)

## Vite Config Rules
- Port: ALWAYS 3000
- open: true (auto-open browser)
- Use path aliases: `@` → `src/`

## Scripts
```bash
pnpm run dev        # Start dev server (port 3000)
pnpm run build      # Production build
pnpm run test       # Run tests
pnpm run lint       # Lint code
```

## When Scaffolding a New Project
1. Clone this repo
2. Remove .git → reinitialize
3. Update name in package.json
4. Swap design library if needed
5. Update main.tsx with correct provider
6. Confirm vite.config.ts has port 3000
7. pnpm install
8. Create GitHub repo if requested
9. pnpm run dev

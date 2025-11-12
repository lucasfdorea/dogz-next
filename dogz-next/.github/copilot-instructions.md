# Dogz-Next Project Instructions

This guide helps AI coding agents understand the essential patterns and workflows of the Dogz-Next project, a Next.js application for a dog photo sharing platform.

## Project Architecture

- **App Router Structure**: Uses Next.js 14+ App Router with TypeScript
- **Key Directories**:
  - `/src/app/*`: Page routes and layouts
  - `/src/components/`: Reusable UI components
  - `/src/actions/`: Server actions for data fetching
  - `/public/assets/`: SVG icons and static images

## Core Patterns

### Data Fetching

- Server actions used for API calls (see `src/actions/photos-get.ts`)
- Base API URL: `https://dogsapi.origamid.dev/json/api/`
- Example:

```typescript
// All server actions should use this pattern
"use server";
export default async function PhotosGet() {
  const response = await fetch("${API_URL}/photo/?_total=6&_page=1&_user=0");
  return await response.json();
}
```

### Component Organization

- Each feature has its own directory under `src/components/`
- CSS Modules for styling (e.g., `feed.module.css`)
- Components follow the pattern:
  ```tsx
  export default function ComponentName({ prop }: { prop: PropType }) {
    return <div>...</div>;
  }
  ```

### Routing Structure

- Login section: `/login/*` (criar, perdeu, resetar)
- User profile: `/perfil/[user]`
- Photo view: `/foto/[id]`
- Account management: `/conta/*` (estatisticas, postar)

## Development Workflow

1. Start development server:
   ```bash
   npm run dev   # http://localhost:3000
   ```
2. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Common Tasks

- Adding a new page: Create directory/file under `/src/app`
- Adding new components: Create component directory with TSX and module.css
- Adding server actions: Create new file under `/src/actions` with "use server" directive

## Project Conventions

- TypeScript for all new code
- CSS Modules for styling (no global styles except `globals.css`)
- SVG assets in `/public/assets/`
- Page routes follow feature-based organization

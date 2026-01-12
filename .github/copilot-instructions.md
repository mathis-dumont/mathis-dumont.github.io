# Code Quality Guidelines

## React & TypeScript
- Keep components modular, focused, and reusable
- Use TypeScript for type safety - define interfaces for all data structures
- Prefer functional components with hooks over class components
- Extract complex logic into custom hooks
- Use proper typing for props and state

## Architecture
- Separate data sources (e.g., `projects.ts`) from presentation components
- Keep business logic separate from UI components
- Use composition over prop drilling - leverage context when needed
- Organize files by feature, not by type

## Styling (Tailwind CSS)
- Follow utility-first patterns - avoid custom CSS when possible
- Use Tailwind's design tokens for consistency (spacing, colors, typography)
- Maintain a minimal aesthetic with generous whitespace
- Ensure responsive design with mobile-first approach
- Keep dark mode in mind - use dark: variants consistently

## Performance
- Use React's `memo`, `useMemo`, and `useCallback` appropriately
- Lazy load components and routes when beneficial
- Optimize images and assets
- Minimize re-renders by proper state management

## Code Style
- Use descriptive variable and function names
- Keep functions small and focused (single responsibility)
- Comment complex logic, not obvious code
- Use early returns to reduce nesting
- Maintain consistent formatting

## Accessibility
- Use semantic HTML elements
- Ensure proper heading hierarchy
- Add appropriate ARIA labels when needed
- Test keyboard navigation
- Maintain sufficient color contrast ratios

## Design Guardrails

**Critical: This portfolio follows a strict "Minimalist Researcher" aesthetic. Never modify these design principles without explicit user request.**

### Typography
- Primary font: EB Garamond (serif) for all body text and headings
- Secondary font: Inter (sans-serif) for UI elements only
- Base font size: 18px (set in `:root`)
- Line height: 1.75 (relaxed) for readability

### Color Scheme
- **Light mode**: Pure black text (`text-gray-900`), white background
- **Dark mode**: Pure white text (`text-gray-100`), dark background (`bg-dark-bg`)
- No intermediate grays for content text - only black or white
- Borders: Black in light mode (`border-gray-900`), white in dark mode (`border-gray-100`)
- All borders are 1px thin (`border` not `border-2`)

### Layout Principles
- Single-page scroll design with anchor navigation
- Maximum content width: `max-w-4xl`
- Generous vertical spacing: `py-32` between sections
- No cards, no shadows, no border-radius
- No background colors except uniform white/dark (removed special Lab background)

### Navigation
- Fixed navbar with solid background (no blur/transparency)
- Small uppercase links: `text-xs uppercase tracking-widest`
- Intersection Observer for active section highlighting
- Smooth scroll with `scroll-padding-top: 6rem`

### Components
- Horizontal separators: `h-px bg-gray-900 dark:bg-gray-100`
- Vertical bars: `border-l border-gray-900 dark:border-gray-100`
- Tags: Outlined boxes with thin borders, no fills
- Buttons/Links: Text-only with hover states (no background fills)

### What NOT to Do
- ❌ Never add card-style components with backgrounds
- ❌ Never use intermediate gray colors for main content text
- ❌ Never add shadows, gradients, or rounded corners
- ❌ Never use blur effects (backdrop-blur, etc.)
- ❌ Never add colored accents or brand colors
- ❌ Never reduce whitespace significantly
- ❌ Never change from EB Garamond serif font for content

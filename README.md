# Portfolio

Hall Enoch Asanda's portfolio site — Next.js (App Router), statically exported
for GitHub Pages.

## Stack

- Next.js 16 (App Router) + TypeScript, `output: "export"` (fully static —
  GitHub Pages serves files only, there is no server at runtime)
- Tailwind CSS v4 (CSS-variable design tokens in `app/globals.css`, theme
  switching via a `data-theme` attribute)
- `next/font` (Newsreader, Instrument Sans, JetBrains Mono, self-hosted)
- Heroicons

## Local development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_ADMIN_PASSWORD` to
try the `/admin` editor locally.

## Project structure

```
app/                  routes: / (home), /work,
components/
  layout/             Header, Footer
  home/                Hero, Services, Skills, Contact + their cards
  work/                filter tabs, project grid/cards
  modals/              shared Modal shell, Booking & Start-project modals
  ui/                  ThemeToggle, EditableFieldForm
lib/                   theme/content-store/modal contexts, email + booking

```

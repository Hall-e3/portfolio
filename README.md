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
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_ADMIN_PASSWORD` to
try the `/admin` editor locally.

## Content model & the `/admin` editor

All copy (hero text, services, projects, skills) lives in
`content/site-content.ts` as the build-time default. `/admin` (gated by a
password check — see below) lets you edit that content live in the browser;
edits are written to `localStorage` and immediately reflected on `/` and
`/work` **in that same browser only**.

This is a deliberate trade-off: GitHub Pages has no database or server to
persist edits centrally, so there's no way for one visitor's edit to appear
for everyone without a redeploy. To make an edit permanent for all visitors:

1. Go to `/admin` and make your changes.
2. Click **Export JSON** to download the current content.
3. Replace the corresponding values in `content/site-content.ts` with the
   exported JSON.
4. Commit and push — the GitHub Actions workflow rebuilds and redeploys
   automatically.

**`/admin` password**: checked entirely client-side against
`NEXT_PUBLIC_ADMIN_PASSWORD`, which is baked into the static bundle at build
time. This deters casual visitors but is **not real access control** —
anyone who reads the deployed JS can recover it. Don't use it to gate
anything sensitive.

## Resume

Add your resume PDF at `public/Hall-Enoch-Asanda-Resume.pdf` — it's linked
from the hero and contact sections but not included in this repo.

## Deploying to GitHub Pages

1. **Enable Pages**: repo Settings → Pages → Source: **GitHub Actions**.
2. **Set the admin password**: repo Settings → Secrets and variables →
   Actions → New repository secret → `NEXT_PUBLIC_ADMIN_PASSWORD`.
3. **Set the base path** (project pages only): if this repo deploys to
   `https://<user>.github.io/<repo>/` (i.e. it's *not* the special
   `<user>.github.io` repo), add a repo Actions **variable** (not secret)
   named `NEXT_PUBLIC_BASE_PATH` set to `/<repo-name>`. Leave it unset for a
   user/org page.
4. Push to `main` — `.github/workflows/deploy.yml` builds the static export
   and publishes it.

## Project structure

```
app/                  routes: / (home), /work, /admin
components/
  layout/             Header, Footer
  home/                Hero, Services, Skills, Contact + their cards
  work/                filter tabs, project grid/cards
  modals/              shared Modal shell, Booking & Start-project modals
  admin/               password gate, tabbed editor, generic CollectionEditor
  ui/                  ThemeToggle, EditableFieldForm
lib/                   theme/content-store/modal contexts, email + booking
                       helpers, admin auth
content/               typed default content + types
```

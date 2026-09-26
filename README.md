# Meezo website — Next.js 16 + TypeScript + Tailwind CSS

Port of the Meezo marketing site to Next.js (App Router), TypeScript and Tailwind CSS v4, from the original static HTML build. Same brand colours, fonts, copy, screenshots and page structure — different tech stack underneath.

## Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** (installed and wired via `@tailwindcss/postcss`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
src/
  app/
    layout.tsx        — root layout: fonts, <Header>, <Footer>, <SiteBehavior>
    globals.css        — Tailwind import + the full brand design system (tokens, components)
    page.tsx           — homepage (route: /)
    personal/page.tsx  — /personal
    payments/page.tsx  — /payments
    split-bills/page.tsx — /split-bills
    security/page.tsx  — /security
    about/page.tsx     — /about
    contact/page.tsx   — /contact
    business/page.tsx  — /business
    faq/page.tsx       — /faq
    privacy/page.tsx   — /privacy
    terms/page.tsx     — /terms
  components/
    Header.tsx         — nav, dropdowns (CSS-driven), mobile menu (React state)
    Footer.tsx          — footer, legal/regulatory copy
    SiteBehavior.tsx    — client component: tabs, FAQ accordion, scroll-reveal,
                          waitlist form, tab-visual swap (see note below)
    JsonLd.tsx          — tiny helper to inject JSON-LD structured data
public/
  assets/               — logo + all product screenshots (jpg/png)
```

Each route exports its own `metadata` (title, description, Open Graph) and the structured data (`BreadcrumbList` per inner page; `Organization`, `SoftwareApplication` and `FAQPage` on the homepage) that the original static build had in its `<head>`/inline `<script type="application/ld+json">` tags.

## A deliberate design choice: `SiteBehavior.tsx`

The original static site's interactivity (tabs, FAQ accordion, scroll-reveal, the mobile nav) was plain vanilla JS (`main.js`) attaching listeners via `querySelectorAll`. Rather than rewriting every one of those widgets as fully controlled React state across 10+ pages — which would risk subtly changing behaviour on a site whose exact look and copy matters — `SiteBehavior.tsx` ports that same logic into one client component, re-run on every route change. It's a pragmatic bridge: works identically to the original, and any individual widget (the FAQ accordion, say) can be lifted into local component state later without touching the rest of the site.

The one piece of real interactive **state** — the mobile nav open/closed — is handled properly with `useState` in `Header.tsx`, since that's a natural, self-contained fit for React.

## Design system

All colours, spacing, type scale and component styles live in `src/app/globals.css`, carried over verbatim from the original brand build — **the brand colours and fonts have not been changed**. Fonts (Geist / Geist Mono) are loaded via `next/font/google` rather than a Google Fonts `<link>` tag, which is the standard Next.js approach (self-hosted, no layout shift) — same typeface, different loading mechanism.

Tailwind is installed and configured project-wide for any new components going forward; the existing design system intentionally stays as authored CSS rather than being rewritten into utility classes, to avoid introducing visual drift while porting.

## Notes carried over from the static build

- This is a **preview/marketing build** — the waitlist form on `/business` is local-only (no backend wired up).
- Footer regulatory/contact copy reflects what was supplied at time of writing (FRN, company number, registered office, etc.) — update `src/components/Footer.tsx` if any of it changes.
- Internal navigation uses `next/link` (`<Link>`) for client-side routing; external links (social, `mailto:`) remain plain `<a>` tags.

## Deploying

Works on any Next.js host (Vercel, Netlify, a Node server, etc.). No environment variables are required for this build.

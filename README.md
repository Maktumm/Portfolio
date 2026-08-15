# Akihiko / Palmer — Next.js rebuild (GSAP edition)

A Next.js 14 (App Router) + TypeScript + Tailwind rebuild matching
https://palmer-template.framer.website/ — content, copy, pricing, and
section order pulled directly from the live reference site (the uploaded
files were a raw Framer static export: 19k+ lines of hashed classnames and
Framer's own runtime JS, not something worth porting 1:1).

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Libraries used (and why)

- **next / react / react-dom** — framework
- **tailwindcss / postcss / autoprefixer** — styling
- **gsap** + **@gsap/react** — all animation: `ScrollTrigger` reveals
  (`components/Reveal.tsx`), the infinite logo/name marquees
  (`components/Marquee.tsx`), the letter-by-letter "Practice." stagger in
  `Experience.tsx`, and the FAQ accordion height tween
- **lucide-react** — icons (menu, plus/minus, checkmarks)
- **clsx** — conditional className helper

Fonts load via `next/font/google` (Inter + Inter Tight) in `app/layout.tsx`.

## Structure

```
app/
  layout.tsx        → fonts + <html>/<body> shell
  page.tsx           → assembles all sections in reference-site order
  globals.css        → Tailwind directives + base styles
lib/
  images.ts           → mockPhoto() helper (see Images below)
components/
  Reveal.tsx          → GSAP ScrollTrigger fade/slide-up wrapper
  Marquee.tsx          → GSAP infinite horizontal scroll
  Navbar.tsx           → incl. "Based in Tokyo" micro-bar
  Hero.tsx              → layered heading + marquee name
  ClientLogos.tsx
  Work.tsx               → Featured Works
  Services.tsx
  About.tsx               → Personal Profile
  Experience.tsx           → GSAP "Practice." stagger + timeline
  Testimonials.tsx
  Awards.tsx                → tabbed stat + mini gallery
  Pricing.tsx                 → $99 / $299 / $899 tiers
  Blog.tsx
  FAQ.tsx
  Footer.tsx                    → closing marquee gallery
```

## Images

The reference site uses licensed photography we can't legally copy into a
template. Every image in this build goes through `lib/images.ts`'s
`mockPhoto(seed, w, h)`, which points to **Picsum Photos**
(https://picsum.photos) — a free placeholder-image service made exactly for
this, no licensing/attribution issues, and each `seed` is stable so the same
placeholder always renders in the same spot. Images render in grayscale by
default (`.mono-photo` — matches the source's monochrome look) and lift to
full color on hover.

**To go live:** replace `mockPhoto(...)` calls in each component with real
`next/image` sources once you have final photography, and add that domain to
`images.remotePatterns` in `next.config.js`.

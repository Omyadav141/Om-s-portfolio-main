# Premium Cinematic Portfolio Redesign — Om Yadav

Rebuild the existing static HTML portfolio (`omyadav141.github.io/myportfolio`) as a modern, cinematic, Apple-inspired single-domain site on the current TanStack Start stack. Zero content loss — every project, resume PDF, certificate, video, image, link, and section from the live site is migrated.

## Phase 1 — Content extraction (before any UI)

1. Scrape every HTML page from the live site with Firecrawl: `index.html`, `Curriculum.html`, `Explorations & Engagements.html`, `certificate.html`, `edu.html`, `intern.html`, `proj.html`, `research.html`, `sport.html`, `startup.html`, `Om_Yadav_Resume_2025.html`.
2. Pull all binary assets (PDFs, images, videos, GIFs, logos) from the repo's raw URLs into `src/assets/` (resumes go to `public/resume/` so direct links keep working).
3. Normalize everything into typed content modules under `src/features/<section>/data/*.ts` — single source of truth:
   - `profile` (name, bio, headshot, socials)
   - `experience` (Accenture, BCG, British Airways, Cognify, Tata GenAI, Intel, etc.)
   - `education` (school + college)
   - `projects` (FinEase, CricHero, IoT, AI/ML, 3D Virtual, Data Viz, etc. with covers, tags, links, modal copy)
   - `skills` (grouped: languages, ML/AI, data, tools)
   - `achievements` (SIH, AI Summit, certificates with PDFs)
   - `engagements` (talks/videos with David Lammy, Shashi Tharoor, Sundar Pichai, Ankur Vora, etc.)
   - `resume` (latest PDF + legacy versions)

## Phase 2 — Design directions

Generate 3 rendered directions in the Apple/minimal-luxury envelope (locked aesthetic, varied composition):
- **A — Cinematic Monolith:** dark slate, scroll-pinned 3D hero object, full-bleed sections, oversized serif/sans pairing.
- **B — Editorial Glass:** light/cream base, glassmorphism cards, asymmetric magazine grid, restrained motion.
- **C — Aurora Depth:** deep indigo with aurora gradients, floating WebGL particles, dense bento layout for projects/skills.

Present via `ask_questions` prototype picker. Build only after the user chooses.

## Phase 3 — Architecture

Feature-based folders, UI ↔ logic separation:

```text
src/
  features/
    hero/        (3D scene, scroll storytelling)
    about/       (animated timeline)
    projects/    (cards, filters, modal)
    skills/      (animated viz, floating icons)
    experience/  (scroll-reveal timeline)
    education/
    achievements/
    engagements/ (video grid)
    contact/     (form + socials)
    resume/      (embedded PDF viewer + download)
  components/
    ui/          (shadcn primitives — reused)
    motion/      (Reveal, Parallax, MagneticButton, SectionTitle)
    three/       (Canvas wrapper, lazy-loaded scenes)
    layout/      (Nav, ProgressRail, Footer, CustomCursor, Loader, ThemeToggle)
  hooks/         (useScrollProgress, useReducedMotion, useTheme, useLenis)
  lib/           (analytics, seo helpers)
  routes/        (__root, index, projects.$slug? optional)
```

Rules: components stateless where possible; data flows down from `features/*/data`; no duplicated state (theme + scroll progress live in context; section progress derived from a single IntersectionObserver hook).

## Phase 4 — Build (single homepage with deep sections)

- **Loader:** brand mark fade-in with progress bar, dismisses on `assets-loaded`.
- **Nav:** fixed glass top bar + right-edge section progress rail (dots that fill as you scroll); dark/light toggle; mobile drawer.
- **Hero:** full-viewport. R3F scene (lightweight: instanced geometry / shader gradient orb), parallax name + role, dual CTA (View Projects / Contact). Scroll hint.
- **Scroll storytelling:** Lenis smooth scroll + Framer Motion `useScroll`. The hero 3D object survives 2 sections, morphing scale/rotation as About reveals.
- **About:** alternating image/text rows; animated timeline rail with milestone dots.
- **Experience:** vertical timeline with company logos, scroll-pinned dates, glass cards.
- **Projects:** filter chips (All / AI-ML / Web / IoT / Data / 3D), grid of cards with 3D tilt + depth on hover, click → full-screen modal (cover media, description, tech stack, links to repo/live/PDF). All existing projects preserved.
- **Skills:** category clusters with floating tech icons (CSS transforms, GPU-friendly); animated proficiency bars on enter.
- **Education:** dual cards (school + college) with crest images.
- **Achievements & Certificates:** masonry; click opens PDF in modal viewer.
- **Engagements:** video grid (lazy `<video preload="none">`, click to expand).
- **Resume:** inline PDF preview + download button (latest `Om_Yadav_Resume_2025`); legacy versions linked.
- **Contact:** mailto + socials + optional form (frontend-only, opens mail client) — preserves existing behavior.
- **Footer:** minimal, repo + LinkedIn + GitHub.

## Phase 5 — Polish, performance, a11y

- Custom cursor (desktop only, disabled on touch / reduced motion).
- `prefers-reduced-motion`: all scroll/3D animations downgrade to fades.
- R3F canvas lazy-loaded via `React.lazy` + `Suspense`; `dpr={[1,1.5]}`; `frameloop="demand"` where possible.
- Images: responsive `srcset`, `loading="lazy"`, `decoding="async"`.
- Videos: `preload="none"`, poster frames.
- Lighthouse target: ≥90 perf desktop, ≥80 mobile; LCP < 2.5s; 60fps scroll on M1-class.
- SEO: per-route `head()` (title, description, OG image = hero render); JSON-LD `Person` schema.
- Responsive: mobile-first; the 3D hero gracefully degrades to a static gradient mesh under 768px.

## Phase 6 — Verification

- Diff old-site content against new content modules — checklist must hit 100%.
- Playwright pass: scroll through every section on 1280px and 390px, screenshot each, confirm all media loads.
- Manual: every project link, resume PDF, certificate PDF, and video opens.

## Tech additions

`@react-three/fiber`, `@react-three/drei`, `three`, `framer-motion`, `lenis`, `@fontsource/*` (chosen pair after direction pick). Lucide for icons. No backend needed.

## Out of scope (will not do unless asked)

- Cloud / database (no dynamic data needs).
- CMS-driven content (data lives in typed TS modules).
- Per-project detail routes (modals cover this; can promote to routes later).

---

Next step after approval: scrape + asset import → generate 3 design directions → you pick → build.

# Amber Collective — Portfolio Website

Contemporary architecture and interior design studio based in Bangalore, India.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Fonts**: Geist (local, bundled)

## Prerequisites

- **Node.js ≥ 20.9.0** — check with `node --version` ([download](https://nodejs.org/en/download))
- **npm ≥ 10** — bundled with Node 20+; check with `npm --version`

> If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root to switch to the correct version automatically.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser — the page hot-reloads as you edit files.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page (/)
│   ├── work/
│   │   ├── page.tsx        # Work index (/work)
│   │   └── [slug]/
│   │       └── page.tsx    # Project detail (/work/[slug])
│   ├── studio/
│   │   └── page.tsx        # Studio page (/studio)
│   └── contact/
│       └── page.tsx        # Contact page (/contact)
├── components/             # Reusable React components
├── context/
│   └── LanguageContext.tsx # EN/KN language toggle context
└── data/
    └── projects.ts         # Project data — edit here to update content
```

## Adding / Replacing Images

Place project images in:

```
public/
├── brand/
│   ├── amber.png           # Studio logo used in the navigation bar (replace with real logo)
│   └── amber-vector.png    # Vector-style PNG logo used in the home page hero (replace with final exported asset)
└── images/
    └── projects/
        ├── wood-stone-lounge/
        │   ├── 01.jpg      # Cover image
        │   └── 02.jpg      # Gallery image
        ├── soft-minimal-bedroom/
        │   └── 01.jpg
        ├── floating-timber-stair/
        │   └── 01.jpg
        ├── open-plan-living/
        │   ├── 01.jpg
        │   └── 02.jpg
        ├── heritage-verandah-exterior/
        │   └── 01.jpg
        ├── terracotta-garden-facade/
        │   └── 01.jpg
        ├── white-charcoal-corner/
        │   └── 01.jpg
        ├── window-seat-detail/
        │   └── 01.jpg
        └── double-height-living/
            └── 01.jpg
```

Image naming: use sequential numbers (01.jpg, 02.jpg, …). The first image (01.jpg) is always used as the cover / hero image.

## Renaming Projects

Edit `src/data/projects.ts` to update project titles, descriptions, facts, image paths, and Kannada translations. No page code changes required.

## Language Toggle

The site supports English and Kannada. The toggle is visible in the navigation bar. Kannada content is currently scaffolded with placeholder translations — replace `titleKn`, `narrativeKn`, and `categoryKn` fields in `src/data/projects.ts`, and update the `StudioClient.tsx` and other component strings as needed.

## SEO

Metadata is defined per-page using Next.js `generateMetadata`. Update the default title and description in `src/app/layout.tsx` and per-page in each `page.tsx` file.

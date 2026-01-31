# Hulk Playground

A small, static-first personal site scaffolded with **Astro**.

This repo is my sandbox: fast iteration, clean structure, and zero drama.

## What this is

- A minimalist website with three pages: **Home**, **About**, **Projects**
- Designed to deploy cleanly under a GitHub project path (e.g. `/hulk-playground/`)
- No analytics, no cookies, no heavy frameworks — just HTML/CSS and good defaults

## Stack

- **Astro** (static output)
- TypeScript support (config-level)
- GitHub Actions workflow scaffold (self-hosted runner compatible)

## Local development

```bash
npm install
npm run dev
```

Astro will print a local URL (usually `http://localhost:4321`).

## Build / preview

```bash
npm run build
npm run preview
```

## GitHub Pages base path

When deploying as a **project site** (not a user site), set `BASE_PATH` to the repo name:

```bash
BASE_PATH=hulk-playground npm run build
```

Optionally set `SITE_URL` for canonical URLs:

```bash
SITE_URL=https://<owner>.github.io BASE_PATH=hulk-playground npm run build
```

## Notes

This is intentionally small. If something needs to be added, it should earn its place.


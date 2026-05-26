# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog (Keen's Blog) deployed to GitHub Pages at `https://okeen.top`. Built with VuePress 2 + vuepress-theme-hope, using Vite as the bundler. Content is written in Chinese and focused on IT infrastructure topics (virtualization, networking, monitoring).

## Commands

| Command | Purpose |
|---|---|
| `pnpm run docs:dev` | Start local dev server |
| `pnpm run docs:clean-dev` | Dev server with clean cache (use when config changes aren't reflecting) |
| `pnpm run docs:build` | Production build (output: `src/.vuepress/dist`) |
| `pnpm run docs:update-package` | Update VuePress packages |

No test suite is configured. Use `pnpm run docs:build` to verify the site compiles without errors.

## Architecture

```
src/
  README.md                    # Homepage (BlogHome layout with hero banner)
  posts/                       # Blog post markdown files
  .vuepress/
    config.ts                  # Main VuePress config (title, lang, fonts, base path)
    theme.ts                   # hopeTheme config (blog, comments, mdEnhance plugins)
    navbar.ts                  # Navigation bar
    sidebar.ts                 # Auto-generated sidebar from posts/
    styles/
      palette.scss             # Theme color (#5C5C66), font overrides
      index.scss               # Custom CSS for headings, excerpts, content
      config.scss              # Tag/category color palette
    public/
      logo*.svg                # Site logos/favicon
      imgs/                    # Blog post images (organized by post slug)
```

## Blog Post Frontmatter

Posts use vuepress-theme-hope frontmatter:

```yaml
---
isOriginal: true/false
date: YYYY-MM-DD
author: AuthorName        # optional
category: CategoryName
tag: [tag1, tag2]
cover: cover-image-url    # optional
---
```

Post images go in `src/.vuepress/public/imgs/<post-slug>/` and are referenced with relative paths like `/imgs/<post-slug>/image.png`.

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy-docs.yml`): pnpm install → build (with 8GB Node heap) → deploy `src/.vuepress/dist` to `gh-pages` branch.

## Key Configuration Details

- **Comments**: Waline at `https://waline.okeen.top` (configured in `theme.ts`)
- **mdEnhance plugins enabled**: footnotes, code tabs, tabs, tasklist, PlantUML, figure, lazy-load, img size, mark
- **Package manager**: pnpm 9.6.0 (use `pnpm`, not npm/yarn)
- **Node version**: 20 (matches CI)

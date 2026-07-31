# Chaitanya.lol

Personal portfolio and build log for Krishna Chaitanya — product manager, AI builder, and 0–1 operator.

**Live:** [chaitanya.lol](https://chaitanya.lol)

## What is here

- A concise product story and working philosophy
- Selected B2B, B2C, and AI product work
- Shipped side projects with live links
- Long-form notes, including the honest story behind a startup that reached 10,000+ downloads and then shut down
- Optional Last.fm “now playing” activity

## Built with

- Next.js 15
- React 19
- Tailwind CSS
- Markdown posts with `gray-matter` and `remark`

## Run locally

```bash
git clone https://github.com/MrForward/Portfolio-site.git
cd Portfolio-site
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Last.fm credentials are optional. Without them, the portfolio still runs; only the listening widget is unavailable.

## Update content

Most copy and project links live in [`data/content.js`](./data/content.js). Blog posts live in [`posts/`](./posts) as Markdown with frontmatter:

```markdown
---
title: "Post title"
date: "2026-01-01"
description: "One-line summary"
---
```

Project images belong in `public/projects/`. Add or reorder project objects in `data/content.js` to change the portfolio grid.

## Project structure

```text
components/   Shared UI and layout
data/         Portfolio copy and project data
lib/          Markdown and Last.fm helpers
pages/        Site routes and API route
posts/        Long-form writing
public/       Images, icons, robots, sitemap, and llm.txt
styles/       Global styles
```

## Production

The site is deployed on Vercel. Before publishing content changes, run:

```bash
npm run build
```

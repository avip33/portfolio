# avinashpapineni.com

Personal website and blog built with Next.js 16.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Content:** MDX with next-mdx-remote
- **Database:** Neon (PostgreSQL) for view counts
- **ORM:** Drizzle
- **Deployment:** Vercel

## Local Development

```bash
# Install dependencies
bun install

# Run dev server
bun dev

# Build for production
bun run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
DATABASE_URL="postgresql://..."  # Neon connection string
```

## Writing Posts

Create MDX files in `content/writing/`:

```mdx
---
title: "Post Title"
date: "2026-01-20"
description: "Brief description for SEO"
published: true
---

Your content here...
```

MDX supports React components - add custom components in `src/lib/mdx.tsx`.

## Database Migrations

```bash
# Generate migration
bunx drizzle-kit generate --name migration_name

# Apply to local/dev branch
DATABASE_URL="local_url" bunx drizzle-kit migrate

# Apply to production
DATABASE_URL="prod_url" bunx drizzle-kit migrate
```

## Project Structure

```
├── content/writing/       # MDX blog posts
├── src/
│   ├── app/
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── writing/       # Blog listing & posts
│   │   └── api/views/     # View counter API
│   ├── components/
│   │   ├── header.tsx
│   │   ├── theme-toggle.tsx
│   │   └── view-counter.tsx
│   └── lib/
│       ├── db/            # Database schema & connection
│       ├── posts.ts       # Post loading utilities
│       └── mdx.tsx        # MDX renderer
└── drizzle/               # Migration files
```

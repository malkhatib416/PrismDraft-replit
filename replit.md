# PrismDraft

PrismDraft is an editorial landing page for a content workspace that helps teams plan, draft, review, and publish with human judgment intact.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/prismdraft/src/pages/home.tsx` — home page sections and editorial illustrations
- `artifacts/prismdraft/src/index.css` — PrismDraft visual system, responsive layout, and motion
- `artifacts/prismdraft/src/App.tsx` — root route
- `lib/api-spec/openapi.yaml` — reserved API contract for a future product workspace build

## Architecture decisions

- The current PrismDraft artifact is intentionally presentation-only: CTAs use anchors or email and do not imply working product flows.
- The visual language uses editorial paper, ink, vermillion, teal, and mustard accents to distinguish the product from generic SaaS dashboards.
- Product functionality, authentication, billing, generation, and publishing are intentionally deferred until the home experience is approved.

## Product

The current build is a responsive, scrollable PrismDraft home page communicating the product's editorial method, contextual images, approval gate, and visible credits. It does not include product functionality yet.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Keep CTAs honest while the product surface is presentation-only; do not add fake sign-in, generation, or checkout behavior to the home page.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

#  Country Explorer — Next.js Edition

> **Week 4 — Assignment 2**
> The Week 3 Country Explorer rebuilt in **Next.js (App Router) + TypeScript + Tailwind CSS**, now with a real detail page for every country, server-side data fetching, and clean separation between Server and Client Components.

---

##  Assignment Features

- **Two routes**: `/` (country list) and `/country/[code]` (country detail by `cca3` code)
- **Root `layout.tsx`** with shared navigation on every page
- **List page is a Server Component** — data is fetched on the server before the page is sent (no client-side fetch on initial load)
- **Detail page** displays name, capital, population, region, languages, and border countries as `<Link>`s to their own detail pages
- **`loading.tsx` and `error.tsx`** for the detail route
- **Search & region filter is a Client Component** (`'use client'`) — everything else stays a Server Component
- **Non-existent country codes** are handled gracefully via `not-found.tsx`

---

##  Project Structure

```
app/
├── layout.tsx                  # Root layout with shared nav
├── page.tsx                    # Home — Server Component, fetches all countries
├── error.tsx                   # Root-level error boundary (Client Component)
├── globals.css
└── country/
    └── [code]/
        ├── page.tsx            # Country detail — Server Component
        ├── loading.tsx         # Loading UI shown on navigation
        ├── error.tsx           # Error boundary (Client Component)
        └── not-found.tsx       # Shown when country code is invalid

components/
└── CountryFilters.tsx          # Search + region filter — Client Component ('use client')

lib/
└── api.ts                      # Server-side fetch helpers (getCountries, getCountry)

types/
└── country.ts                  # TypeScript types for Country and CountryDetail
```

---

##  Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

##  Tech Stack

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org) | 16 (App Router) |
| [React](https://react.dev) | 19 |
| [TypeScript](https://www.typescriptlang.org) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |

---

##  Data Source

Country data is fetched from the [REST Countries API](https://restcountries.conventus.de/v3.1).

| Endpoint | Used For |
|---|---|
| `GET /v3.1/all?fields=name,capital,population,region,flags,cca3` | Fetching all countries for the list page |
| `GET /v3.1/alpha/{code}?fields=name,capital,population,region,flags,cca3,languages,borders` | Fetching a single country for the detail page |

---

##  Acceptance Criteria

- [x] Two or more routes including the dynamic `[code]`; shared layout/nav on all pages
- [x] List data fetched in a Server Component (no `'use client'` on it; no list network call in the browser on first load)
- [x] Search/filter is `'use client'`; the rest are not needlessly client
- [x] `loading.tsx` shows on navigation; breaking the fetch triggers `error.tsx`
- [x] Border links navigate via `<Link>`; a bad `[code]` is handled gracefully

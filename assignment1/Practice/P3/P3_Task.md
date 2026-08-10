# please on github,view this file in code mode.Not in preview mode. 

# P3 Task - Nested Layout Tree

## Component Layout Tree

app/
├── layout.tsx (Root Layout)
│   ├── <Navbar />
│   └── {children}
│       ├── page.tsx (Home - /)
│       ├── about/page.tsx (/about)
│       ├── contact/page.tsx (/contact)
│       └── dashboard/
│           ├── layout.tsx (Nested Dashboard Layout)
│           │   └── {children}
│           └── page.tsx (/dashboard)

## How It Works

- `app/layout.tsx` is the top-level layout that wraps every page in the app.
- The `<Navbar />` component stays mounted constantly when navigating between pages, so it doesn't re-render or reset state.
- Next.js only replaces the `{children}` prop with the content of the specific `page.tsx` being visited.

## Deeper Question

**Which pages get the extra nested chrome from `dashboard/layout.tsx` and which don't?**

- **Gets it**: Only pages inside the `dashboard` directory (like `/dashboard` or any sub-routes like `/dashboard/analytics`). These pages end up wrapped inside both `app/layout.tsx` and `app/dashboard/layout.tsx`.
- **Doesn't get it**: All other pages outside the dashboard folder (such as `/`, `/about`, and `/contact`). They are only wrapped by `app/layout.tsx`.

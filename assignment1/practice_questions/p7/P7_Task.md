# P7 — Navigation Pipeline

## What happens when a user clicks a `<Link>` to an async route?

```text
User clicks <Link>
       ↓
1. Prefetch
       ↓
2. Client-side navigation
       ↓
3. loading.tsx appears
       ↓
4. Server renders the async page
       ↓
5. New page/segment replaces the old one
```

### 1. Prefetch

Next.js can prefetch the linked route when the `<Link>` enters the viewport or is hovered.

### 2. Client-side navigation

When the user clicks the `<Link>`, Next.js handles the navigation without requesting a completely new document.

### 3. `loading.tsx`

If the destination page is async and takes time to finish, `loading.tsx` is shown while the page is waiting.

### 4. Server render

The server finishes the async work and renders the destination page.

### 5. Segment swap

Next.js replaces only the part of the application that changed.

Example:

```text
Before:

Layout
├── Navbar          ← stays
└── About           ← old children


After:

Layout
├── Navbar          ← reused
└── Dashboard       ← new children
```

This explains why there is no full browser reload even though a loading UI can appear.

---

## DEEPER

### Which segments are reused and which are re-rendered?

Example:

```text
app/
├── layout.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

When navigating:

```text
/about → /contact
```

Next.js reuses:

```text
layout.tsx
Navbar
```

and replaces:

```text
about/page.tsx → contact/page.tsx
```

### DEEPER Answer

> The shared layout segment is reused and stays mounted, while the page segment that changed is re-rendered and swapped.

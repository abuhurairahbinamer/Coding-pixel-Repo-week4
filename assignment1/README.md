# Assignment 1 — Routing & Layout Drills

A Next.js (App Router) exercise demonstrating Next.js core routing file conventions, layout structure, client-side navigation, loading UI (`loading.tsx`), and error boundaries (`error.tsx`).

---

## 🚀 Features & Assignment Checklist

- [x] **App Router with 4 Routes**: 
  - Home (`/`)
  - About (`/about`)
  - Contact (`/contact`)
  - Dashboard (`/dashboard`)
- [x] **Shared Layout & Navigation**:
  - `app/layout.tsx` wraps all pages with a persistent top navigation bar ([`Navbar`](file:///d:/CMIT_Internships/week4/assignment1/components/Navbar.tsx)).
  - Uses `next/link` `<Link>` components to ensure instant navigation without full page reloads.
- [x] **Loading UI (`loading.tsx`)**:
  - Implemented in `app/dashboard/loading.tsx`.
  - Simulates 2-second data loading in `app/dashboard/page.tsx` to clearly render loading fallback on navigation.
- [x] **Error Boundary (`error.tsx`)**:
  - Implemented in `app/dashboard/error.tsx`.
  - Features an interactive **"Force Error"** button ([`ErrorButton`](file:///d:/CMIT_Internships/week4/assignment1/app/dashboard/ErrorButton.tsx)) on the Dashboard page to trigger and demonstrate error handling on demand with reset capability.

---

## 📁 Project Structure

```text
assignment1/
├── app/
│   ├── about/
│   │   └── page.tsx          # About route
│   ├── contact/
│   │   └── page.tsx          # Contact route
│   ├── dashboard/
│   │   ├── ErrorButton.tsx   # Client component to trigger error state
│   │   ├── error.tsx         # Error boundary component
│   │   ├── loading.tsx       # Loading fallback component
│   │   └── page.tsx          # Dashboard page (Async server component)
│   ├── globals.css           # Global CSS styles
│   ├── layout.tsx            # Root layout with shared Navbar
│   └── page.tsx              # Home page
├── components/
│   └── Navbar.tsx            # Shared navigation component with <Link>
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To verify and create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

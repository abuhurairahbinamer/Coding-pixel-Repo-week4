# P6 — Client Island

## Question

Explain the Client island: the filter is `'use client'` but sits on a Server-rendered page — what exactly does `'use client'` mark, and what does it NOT force to be client?


## Answer

- **What `'use client'` marks:** It defines a boundary that marks that specific module and the entire sub-tree of components it **imports** as Client Components.
- **What it does NOT force to be client:** It does **not** travel upwards to turn parent components client-side, nor does it affect siblings or Server Components passed into it via props or `children`.

---

### Code Example

```text
app/page.tsx (Server Component — fetches data)
   │
   └── components/CountryFilters.tsx (Client Component — handles UI state)
```

- **`app/page.tsx` (Server Component):**
  ```tsx
  const countries = await getCountries();
  return <CountryFilters countries={countries} />;
  ```
  The page has no `'use client'`, so it stays a Server Component and executes data fetching securely on the server.

- **`components/CountryFilters.tsx` (Client Component):**
  ```tsx
  "use client";
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region>("All");
  ```
  `'use client'` boundary starts here to allow React hooks (`useState`) and interactive event handling.

---

## CHECK

Adding `'use client'` to `CountryFilters` does **NOT** turn the list page client-side; `page.tsx` contains no `'use client'` and continues to server-fetch.

---

## DEEPER

**Q: You can pass a Server Component INTO a Client Component as `children` — why does that not violate the boundary?**

**A:** Because the parent Server Component **evaluates and renders the Server Component on the server first**. The Client Component never imports the server file; The Server Component is rendered on the server, and its rendered result is passed into the Client Component's children slot.

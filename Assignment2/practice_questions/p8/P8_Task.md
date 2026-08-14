# P8 — Border-Link Navigation

## Answer

When the user is on France's page (`/country/FRA`) and clicks Spain's border link:

1. The `<Link>` navigates to `/country/ESP`.
2. The shared `layout.tsx` and navigation stay mounted.
3. The dynamic `[code]` detail segment re-renders with `code = "ESP"`.
4. `getCountries()` runs on the server and fetches the country data.
5. `getByCode(countries, "ESP")` finds Spain.
6. Spain's details and border links are rendered.

## CHECK

The URL changes to `/country/ESP`, the navigation remains, and Spain's name, capital, population, region, languages, and borders appear.

## DEEPER

If the border link is prefetched, Next.js can begin loading Spain's route/data before the user clicks it, so the navigation can be faster.

# P7 — Param Handling

## Answer

Before fetching, validate `params.code` to make sure it is a non-empty, exactly three-letter code.If it is not valid we will call notfound()

```tsx
if (!/^[A-Za-z]{3}$/.test(code)) {
  notFound();
}
```

If the format is valid, fetch the countries and look up the code:

```tsx
const countries = await getCountries();
const country = getByCode(countries, code);

if (!country) {
  notFound();
}
```

## CHECK

- `/country/FRA` → renders France.
- `/country/ZZZ` → valid three-letter format, but no country exists → `notFound()`.
- `/country/XYZ1` → invalid format → `notFound()` before fetching.

## DEEPER

Malformed codes should be rejected before the fetch because no API request is needed. A valid-looking but nonexistent code must be checked after the fetch because only the fetched data can show that the country does not exist."Before" is cheaper because we dont have to make api call so it saves time and enhances performance.

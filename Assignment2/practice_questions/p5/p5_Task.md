# P5 — Detail Route File Mapping

> P5 task is already applied in Application (`app/country/[code]`)

## Deeper

A **404** means the country does not exist, so it should use `notFound()` and show `not-found.tsx`; an **unreachable API** is a server/network failure, so it should throw an error and show `error.tsx`.
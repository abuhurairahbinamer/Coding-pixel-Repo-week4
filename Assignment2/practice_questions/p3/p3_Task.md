# P3 --- Server Component List Fetch

## Answer

Fetching the country list in a **Server Component** means the API
request runs on the **Next.js server during rendering**, not in the
browser.

The browser receives the rendered HTML/RSC payload, so there is **no
direct `restcountries` API request in the browser on the first load**.

## Check

1.  Open `http://localhost:3000/`.
2.  Open Chrome DevTools → **Network**.
3.  Clear the Network log.
4.  Reload the page.
5.  In the Network filter, type:

``` text
restcountries.conventus.de
```

6.  The Network panel should show:

``` text
0 / [total requests] requests
```

This means **0 requests matched `restcountries.conventus.de`**, proving
the browser did not directly fetch the country list.

## Deeper

When navigating client-side to a country detail page, the detail fetch
still runs on the **Next.js server** because the detail page is also a
Server Component. The browser receives the resulting RSC payload rather
than directly calling the country API.

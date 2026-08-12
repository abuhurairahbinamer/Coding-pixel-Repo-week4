# P1 — Server vs Client Component Triage

## Component Labels

| Piece | Component Type | One-Word Reason |
|---|---|---|
| List fetch | Server Component | Data |
| Detail fetch | Server Component | Data |
| Search box | Client Component | Interaction |
| Region filter | Client Component | Interaction |
| Nav header | Server Component | Markup |

## Deeper

The server-rendered list passes the fetched country data **as props** to the
client-side search/filter component. The list itself remains a Server Component —
only the interactive search/filter part is a Client Component (`'use client'`).

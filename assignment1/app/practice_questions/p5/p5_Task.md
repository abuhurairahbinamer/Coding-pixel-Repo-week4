## error.tsx catches errors thrown while rendering its route's page or child components, and it must be a Client Component because the error UI uses client-side features such as reset() and event handlers.

## Deeper
## An error in a parent layout.tsx cannot be caught by that route's error.tsx because error.tsx is rendered inside that layout, so the layout must successfully render before the error boundary itself can exist; therefore, we need a higher-level boundary such as global-error.tsx to catch the layout's error.

## Parent layout -->  error.tsx  -->  page.tsx
## After fix (Make sure to run in Production mode)
## global-error.tsx --> Parent layout -->  error.tsx  -->  page.tsx
     

     
 

'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong in Layout.tsx!</h2>
        <p>{error.message}</p>
        <button className="p-3 bg-blue-600 hover:bg-blue-600/80 cursor-pointer rounded-2xl" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  )
}
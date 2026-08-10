'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button className="p-3 bg-blue-600 hover:bg-blue-600/80 cursor-pointer rounded-2xl" onClick={() => reset()}>Try again</button>
    </div>
  )
}
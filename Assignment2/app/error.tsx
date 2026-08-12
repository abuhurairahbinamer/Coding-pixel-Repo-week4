"use client";

export default function Error({
  reset,
  error
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-2 text-gray-600">
       {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
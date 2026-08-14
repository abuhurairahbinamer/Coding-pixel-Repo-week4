import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Country Not Found
      </h1>

      <p className="mt-3 text-gray-600">
        The country you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Back to countries
      </Link>
    </div>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountry } from "../../../lib/api";
import { borderLinks } from "@/app/practice_questions/p2/p2_Task";
type Props = {
  params: Promise<{
    code: string;
  }>;
};

export default async function CountryPage({
  params,
}: Props) {
  const { code } = await params;
  const country = await getCountry(code);
  
  if (!country) {
    notFound();
  }
  const borders=borderLinks(country.borders);
  const capital = country.capital?.[0] ?? "N/A";

  const languages = country.languages
    ? Object.values(country.languages)
    : [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to countries
      </Link>

      <div className="grid gap-8 rounded-xl border bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <img
            src={country.flags.png}
            alt={
              country.flags.alt ??
              country.name.common
            }
            className="w-full rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {country.name.common}
          </h1>

          <div className="mt-6 space-y-3">
            <p>
              <strong>Capital:</strong> {capital}
            </p>

            <p>
              <strong>Population:</strong>{" "}
              {country.population.toLocaleString()}
            </p>

            <p>
              <strong>Region:</strong>{" "}
              {country.region}
            </p>

            <p>
              <strong>Languages:</strong>{" "}
              {languages.length > 0
                ? languages.join(", ")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">
          Border Countries
        </h2>

        {borders &&
        borders.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {borders.map((border) => (
              <Link
                key={border.code}
                href={border.href}
                className="rounded border bg-white px-4 py-2 hover:bg-gray-100"
              >
                {border.code}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            This country has no land borders.
          </p>
        )}
      </section>
    </div>
  );
}
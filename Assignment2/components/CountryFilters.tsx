"use client";

import { useState } from "react";
import Link from "next/link";
import type { Country } from "../types/country";

type Region =
  | "All"
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania";

type Props = {
  countries: Country[];
};

const regions: Region[] = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

export default function CountryFilters({ countries }: Props) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region>("All");

  const filteredCountries = countries.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesRegion =
      region === "All" || country.region === region;

    return matchesName && matchesRegion;
  });

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search country..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg border bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 md:w-1/2"
        />

        <select
          value={region}
          onChange={(event) =>
            setRegion(event.target.value as Region)
          }
          className="rounded-lg border bg-white px-4 py-2"
        >
          {regions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          No countries found.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country) => (
            <Link
              key={country.cca3}
              href={`/country/${country.cca3}`}
              className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <img
                src={country.flags.svg}
                alt={
                  country.flags.alt ??
                  country.name.common
                }
                className="h-40 w-full object-cover"
              />

              <h2 className="mt-4 text-lg font-bold">
                {country.name.common}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Capital: {country.capital?.[0] ?? "N/A"}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Population:{" "}
                {country.population.toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Region: {country.region}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
import { getCountries } from "../lib/api";
import CountryFilters from "../components/CountryFilters";

export default async function Home() {
  const countries = await getCountries();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">
        Country Explorer
      </h1>

      <p className="mt-2 text-gray-600">
        Explore countries around the world.
      </p>

      <div className="mt-8">
        <CountryFilters countries={countries} />
      </div>
    </div>
  );
}
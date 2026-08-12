import type { Country, CountryDetail } from "../types/country";

const API_URL = "https://restcountries.conventus.de/v3.1";

export async function getCountries(): Promise<Country[]> {
  const response = await fetch(
    `${API_URL}/all?fields=name,capital,population,region,flags,cca3`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
}

export async function getCountry(
  code: string
): Promise<CountryDetail | null> {
  const response = await fetch(
    `${API_URL}/alpha/${encodeURIComponent(code)}?fields=name,capital,population,region,flags,cca3,languages,borders`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 400) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch country");
  }

  const data: CountryDetail = await response.json();
  return data;
}
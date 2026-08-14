import type { Country, CountryDetail } from "../types/country";
import {cache} from 'react'
const API_URL = "https://restcountries.conventus.de/v3.1";
 
export const getCountries = cache(async () => { 
  const response = await fetch( 
    `${API_URL}/all?fields=name,capital,population,region,flags,cca3,languages,borders` 
  ); 
 
  if (!response.ok) { 
    throw new Error("Failed to fetch countries"); 
  } 
 
  return response.json(); 
})
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
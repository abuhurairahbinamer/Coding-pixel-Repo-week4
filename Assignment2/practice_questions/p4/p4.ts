import { CountryDetail } from "@/types/country"
export const getByCode=(countries:CountryDetail[], code:string) : CountryDetail | null=>{

    return countries.find(c => c.cca3.toUpperCase() === code.toUpperCase()) ?? null 

}
//Deeper
//I wiil use notFound() because if getByCode() returns null, it means the requested country does not exist; that is a 404/not-found case, not a server/application error.
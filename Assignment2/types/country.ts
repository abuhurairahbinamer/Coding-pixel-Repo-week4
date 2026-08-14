export type Country = {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
};

export type CountryDetail = Country & {
  languages?: Record<string, string>;
  borders?: string[];
};
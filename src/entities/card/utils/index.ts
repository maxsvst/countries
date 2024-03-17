import { CountryInfoArgs, ICountryInfo } from "../types";

export const countryInfo = ({
  population,
  region,
  capital,
}: CountryInfoArgs): ICountryInfo[] => [
  { property: "Population", value: population.toLocaleString("ru-RU") },
  { property: "Region", value: region },
  { property: "Capital", value: capital },
];

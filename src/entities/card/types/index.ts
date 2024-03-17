import { Regions } from "../../../features/region-country-filter/types";

export interface ICard {
  name: string;
  flag: string;
  population: number;
  capital: string;
  region: Regions;
}

export interface ICountryInfo {
  property: string;
  value: CountryInfoValue;
}

export type CountryInfoArgs = Omit<ICard, "name" | "flag">;

export type CountryInfoValue = number | string | Regions;

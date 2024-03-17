import { Regions } from "../../../features/region-country-filter/types";

export interface ICountry {
  region: Regions;
  flags: { svg: string };
  capital: string;
  name: { common: string };
  population: number;
}

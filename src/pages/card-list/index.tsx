import React from "react";
import style from "./styles.module.scss";
import Card from "../../entities/card";
import {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} from "../../app/country";
import { useSelector } from "react-redux";
import { selectCountryName, selectCountryRegion } from "../../app/countrySlice";
import { Regions } from "../../features/region-country-filter";
import Filter from "../../widgets/filter";
import EmptyData from "../../shared/ui/emty-data";

export interface ICountry {
  region: Regions;
  flags: { svg: string };
  capital: string;
  name: { common: string };
  population: number;
}

export default function CardsList() {
  const countryName = useSelector(selectCountryName);
  const countryRegion = useSelector(selectCountryRegion);

  const { data: allCountries = [], isError: allError } =
    useGetAllCountriesQuery();
  const { data: filteredByNameCountries = [], isError: filterByNameError } =
    useGetCountryByNameQuery(countryName, { skip: !countryName.trim() });
  const { data: filteredByRegionCountries = [], isError: filterByRegionError } =
    useGetCountryByRegionQuery(countryRegion, { skip: !countryRegion });

  const currentData = (): { data: ICountry[]; isError: boolean } => {
    if (!!countryName.trim()) {
      return { data: filteredByNameCountries, isError: filterByNameError };
    } else if (!!countryRegion) {
      return { data: filteredByRegionCountries, isError: filterByRegionError };
    } else {
      return { data: allCountries, isError: allError };
    }
  };

  const cardsStyle =
    currentData().data.length < 3 && currentData().data.length > 0
      ? style.lessThanThreeCards
      : style.cards;

  return (
    <>
      <Filter />
      <div className={cardsStyle}>
        {currentData().isError ? (
          <EmptyData />
        ) : (
          currentData().data.map((country: ICountry) => (
            <Card
              region={country.region}
              flag={country.flags.svg}
              capital={country.capital}
              name={country.name.common}
              population={country.population}
              key={country.name.common}
            />
          ))
        )}
      </div>
    </>
  );
}

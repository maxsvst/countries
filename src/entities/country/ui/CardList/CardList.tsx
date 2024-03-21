import React from "react";
import { useSelector } from "react-redux";

import { EmptyData } from "@/shared/ui";

import {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} from "../../api";
import { ICountry, selectCountryName, selectCountryRegion } from "../../model";
import { CountryCard } from "../card";

import style from "./styles.module.scss";

export function CardList() {
  const countryName = useSelector(selectCountryName);
  const countryRegion = useSelector(selectCountryRegion);

  const { data: unfilteredCountries = [], isError: unfilteredError } =
    useGetAllCountriesQuery(); // TODO: Что-то сделать
  const { data: filteredByNameCountries = [], isError: filterByNameError } =
    useGetCountryByNameQuery(countryName, { skip: !countryName.trim() });
  const { data: filteredByRegionCountries = [], isError: filterByRegionError } =
    useGetCountryByRegionQuery(countryRegion, { skip: !countryRegion });

  const currentData = (): { data: ICountry[]; isError: boolean } => {
    if (countryName.trim()) {
      return { data: filteredByNameCountries, isError: filterByNameError };
    } else if (countryRegion) {
      return { data: filteredByRegionCountries, isError: filterByRegionError };
    } else {
      return { data: unfilteredCountries, isError: unfilteredError };
    }
  };

  const cardsStyle =
    currentData().data.length < 3 && currentData().data.length > 0
      ? style.lessThanThreeCards
      : style.cards;

  return (
    <>
      {currentData().isError ? (
        <EmptyData />
      ) : (
        <div className={cardsStyle}>
          {currentData().data.map((country: ICountry) => (
            <CountryCard
              region={country.region}
              flag={country.flags.svg}
              capital={country.capital}
              name={country.name.common}
              population={country.population}
              key={country.name.common}
            />
          ))}
        </div>
      )}
    </>
  );
}

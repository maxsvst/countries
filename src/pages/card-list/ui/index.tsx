import React from "react";
import style from "./styles.module.scss";
import Card from "../../../entities/card/ui";
import {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} from "../../../app/providers/StoreProvider/api/countryApi";
import { useSelector } from "react-redux";
import {
  selectCountryName,
  selectCountryRegion,
} from "../../../app/providers/StoreProvider/config/countrySlice";
import Filter from "../../../widgets/filter";
import EmptyData from "../../../shared/ui/empty-data";
import { ICountry } from "../types";

export default function CardsList() {
  const countryName = useSelector(selectCountryName);
  const countryRegion = useSelector(selectCountryRegion);

  const {
    data: unfilteredCountries = [],
    isError: unfilteredError,
  } = useGetAllCountriesQuery(); // TODO: Что-то сделать
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
      return { data: unfilteredCountries, isError: unfilteredError };
    }
  };

  const cardsStyle =
    currentData().data.length < 3 && currentData().data.length > 0
      ? style.lessThanThreeCards
      : style.cards;

  return (
    <>
      <Filter />
      {currentData().isError ? (
        <EmptyData />
      ) : (
        <div className={cardsStyle}>
          {currentData().data.map((country: ICountry) => (
            <Card
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

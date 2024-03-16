import React, { useLayoutEffect } from "react";
import style from "./Cards.module.scss";
import Card from "../../widgets/Card/Card";
import { useAppDispatch } from "../../app/hooks";
import {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} from "../../app/country";
import { useSelector } from "react-redux";
import { selectCountryName, selectCountryRegion } from "../../app/countrySlice";
// import {
//   clearCountriesState,
//   getAllCountries,
//   selectCountries,
// } from "../../app/countriesSlice";
// import { useSelector } from "react-redux";

export default function Cards() {
  const dispatch = useAppDispatch();
  const countryName = useSelector(selectCountryName);
  const countryRegion = useSelector(selectCountryRegion);

  const {
    data: allCountries = [],
    // error,
    // isLoading,
  } = useGetAllCountriesQuery();
  const {
    data: filteredByNameCountries = [],
    // error,
    // isLoading
  } = useGetCountryByNameQuery(countryName);
  const {
    data: filteredByRegionCountries = [],
    // error,
    // isLoading,
  } = useGetCountryByRegionQuery(countryRegion);
  // const countries = useSelector(selectCountries);

  // useLayoutEffect(() => {
  //   dispatch(getAllCountries());
  //   return () => {
  //     dispatch(clearCountriesState());
  //   };
  // }, [dispatch]);

  const currentData = (): any => {
    if (!!countryName.trim()) {
      return filteredByNameCountries;
    } else if (!!countryRegion) {
      return filteredByRegionCountries;
    } else {
      return allCountries;
    }
  };

  return (
    <>
      <div
        className={
          currentData().length < 3 && currentData().length > 0
            ? style.lessThanThreeCards
            : style.cards
        }
      >
        {!!currentData().length ? (
          currentData().map((country: any) => (
            <Card
              region={country.region}
              flag={country.flags.svg}
              capital={country.capital}
              name={country.name.common}
              population={country.population}
              key={country.name.common}
            />
          ))
        ) : (
          <span>Результатов нет</span>
        )}
      </div>
    </>
  );
}

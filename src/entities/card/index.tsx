import React from "react";
import style from "./styles.module.scss";
import { Regions } from "../../features/region-country-filter";

export interface ICard {
  name: string;
  flag: string;
  population: number;
  capital: string;
  region: Regions;
}

export type CountryInfoValue = number | string | Regions;

export interface ICountryInfo {
  property: string;
  value: CountryInfoValue;
}

export default function Card({
  name,
  flag,
  population,
  capital,
  region,
}: ICard) {
  const countryInfo = [
    { property: "Population", value: population },
    { property: "Region", value: region },
    { property: "Capital", value: capital },
  ];

  return (
    <div className={style.card} key={name}>
      <img src={flag} className={style.flag} alt="flag" />
      <div className={style.cardDescription}>
        <span>{name}</span>
        <div className={style.contryInfo}>
          {countryInfo.map(({ property, value }: ICountryInfo) => (
            <div key={property}>
              <span className={style.infoProperty}>{property}</span>
              <span className={style.infoValue}> {value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

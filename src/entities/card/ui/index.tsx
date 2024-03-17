import React from "react";
import style from "./styles.module.scss";
import { countryInfo } from "../utils";
import { ICard, ICountryInfo } from "../types";

export default function Card({
  name,
  flag,
  population,
  capital,
  region,
}: ICard) {
  return (
    <div className={style.card} key={name}>
      <img src={flag} className={style.flag} alt="flag" />
      <div className={style.cardDescription}>
        <span className={style.contryName}>{name}</span>
        <div className={style.contryInfo}>
          {countryInfo({ population, capital, region }).map(
            ({ property, value }: ICountryInfo) => (
              <div key={property}>
                <span className={style.infoProperty}>{property}</span>
                <span className={style.infoValue}> {value}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import style from "./Card.module.scss";
import { ICard, ICountryInfo } from "./ICard";

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
            // TODO: Добавить уникальный ключ
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

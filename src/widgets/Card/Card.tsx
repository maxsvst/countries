import React, { useState, useLayoutEffect } from "react";
import style from "./Card.module.scss";
import { ICard } from "./ICard";

export default function Card({
  name,
  flag,
  population,
  capital,
  region,
}: ICard) {
  const [countriesList, setCountriesList] = useState<any>([]);

  useLayoutEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountriesList(data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(countriesList);

  return (
    <div className={style.card} key={name}>
      <img src={flag} className={style.flag} alt="flag" />
      <div className={style.cardDescription}>
        <span>{name}</span>
        <div className={style.contryInfo}>
          <div>
            <span className={style.infoProperty}>Population:</span>
            <span className={style.infoValue}> {population}</span>
          </div>
          <div>
            <span className={style.infoProperty}>Region:</span>
            <span className={style.infoValue}> {region}</span>
          </div>
          <div>
            <span className={style.infoProperty}>Capital:</span>
            <span className={style.infoValue}> {capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

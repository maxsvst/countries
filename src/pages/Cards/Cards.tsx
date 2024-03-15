import React, { useState, useEffect } from "react";
import style from "./Cards.module.scss";
import Card from "../../widgets/Card/Card";

export default function Cards() {
  const [countriesList, setCountriesList] = useState<any>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountriesList(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className={style.cards}>
        {countriesList.map((country: any) => (
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
    </>
  );
}

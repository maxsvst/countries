import React, { useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "../features/counter/Counter";
import style from "./styles/global.module.css";
import Header from "../widgets/Header/Header";
import Card from "../widgets/Card/Card";

function App() {
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
    <>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0",
        }}
      >
        <input placeholder="Search for the country" />
        <input placeholder="Pick a region" />
      </div>
      <div
        id="cards"
        style={{
          display: "grid",
          gridTemplateColumns:
            "auto-fill, 200px auto-fill,200px auto-fill, 200px auto-fill, 200px",
          rowGap: "50px",
          columnGap: "50px",
        }}
      >
        {countriesList.map((country: any) => (
          <Card
            region={country.region}
            flag={country.flags.svg}
            capital={country.capital}
            name={country.name.common}
            population={country.population}
          />
        ))}
      </div>
    </>
  );
}

export default App;

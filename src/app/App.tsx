import React from "react";
import Cards from "../pages/card-list/ui";
import Header from "../widgets/header";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Cards />
    </div>
  );
}

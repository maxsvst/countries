import React from "react";

import { CountryListPage } from "@/pages/Home";

import { Header } from "../widgets/Header";

import style from "./styles.module.scss";

export default function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <CountryListPage />
    </div>
  );
}

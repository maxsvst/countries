import React from "react";

import { SearchCountryInput } from "@/features/SearchCountry";
import { DropdownInput } from "@/features/RegionCountryFilter/ui";

import style from "./styles.module.scss";

export function Filter() {
  return (
    <div className={style.filter}>
      <SearchCountryInput />
      <DropdownInput />
    </div>
  );
}

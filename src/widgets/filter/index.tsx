import React from "react";
import Input from "../../features/search-country/ui";
import DropdownInput from "../../features/region-country-filter/ui";
import style from "./styles.module.scss";

export default function Filter() {
  return (
    <div className={style.filter}>
      <Input />
      <DropdownInput />
    </div>
  );
}

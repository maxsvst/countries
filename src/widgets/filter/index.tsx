import React from "react";
import Input from "../../features/serach-country";
import DropdownInput from "../../features/region-country-filter";
import style from "./styles.module.scss";

export default function Filter() {
  return (
    <div className={style.filter}>
      <Input />
      <DropdownInput />
    </div>
  );
}

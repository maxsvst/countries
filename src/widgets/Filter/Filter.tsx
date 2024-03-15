import React from "react";
import Input from "./Input/Input";
import DropdownInput from "./DropdownInput/DropdownInput";
import style from "./Filter.module.scss";

export default function Filter() {
  return (
    <div className={style.filter}>
      <Input />
      <DropdownInput />
    </div>
  );
}

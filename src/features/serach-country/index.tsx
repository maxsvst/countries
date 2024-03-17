import React, { ChangeEvent } from "react";
import style from "./styles.module.scss";
import { useAppDispatch } from "../../app/hooks";
import {
  setCountryName,
  selectCountryName,
  setCountryRegion,
} from "../../app/countrySlice";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

export interface ICard {
  name: string;
  flag: string;
  population: number;
  capital: string;
  region: string;
}

export interface ICountryInfo {
  property: string;
  value: string | number;
}

export default function Input() {
  const dispatch = useAppDispatch();
  const inputValue = useSelector(selectCountryName);

  const handleSearchCountryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCountryName(e.target.value));
    inputValue.trim() && dispatch(setCountryRegion(null));
  };

  // const debouncedHandleSearchCountryInputChange = debounce(
  //   handleSearchCountryInputChange,
  //   300
  // );

  return (
    <input
      className={style.input}
      value={inputValue}
      onChange={handleSearchCountryInputChange}
      placeholder="Search for the country..."
    />
  );
}

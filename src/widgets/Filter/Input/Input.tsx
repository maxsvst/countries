import React, {
  useState,
  useEffect,
  useDeferredValue,
  ChangeEvent,
} from "react";
import style from "./Input.module.scss";
import { useAppDispatch } from "../../../app/hooks";
import { useGetCountryByNameQuery } from "../../../app/country";
import { selectCountryName, setCountryName } from "../../../app/countrySlice";
import { useSelector } from "react-redux";
// import {
//   clearCountriesState,
//   getFilteredByNameCountries,
// } from "../../../app/countriesSlice";

export default function Input() {
  const dispatch = useAppDispatch();
  const inputValue = useSelector(selectCountryName);
  // const [inputState, setInputState] = useState<string>("");
  // const {} = useGetCountryByNameQuery(inputState);
  // const debouncedInputState = useDeferredValue(inputState); // Пока такой debounce

  // useEffect(() => {
  //   !!debouncedInputState.trim() &&
  //     dispatch(getFilteredByNameCountries(debouncedInputState));
  //   return () => {
  //     dispatch(clearCountriesState());
  //   };
  // }, [dispatch, debouncedInputState]);

  const handleSearchCountryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCountryName(e.target.value));
  };

  return (
    <input
      className={style.input}
      value={inputValue}
      onChange={handleSearchCountryInputChange}
      placeholder="Search for the country..."
    />
  );
}

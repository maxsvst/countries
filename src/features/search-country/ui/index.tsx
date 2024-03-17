import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./styles.module.scss";
import { useAppDispatch } from "../../../app/providers/StoreProvider/hooks/hooks";
import { setCountryName, setCountryRegion } from "../../../app/providers/StoreProvider/config/countrySlice";
import { useDebounce } from "../hooks/useDebounce";

export default function Input() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedInputValue = useDebounce(inputValue, 400);

  useEffect(() => {
    dispatch(setCountryName(debouncedInputValue));
  }, [dispatch, debouncedInputValue]);

  const handleSearchCountryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputValue.trim()) {
      dispatch(setCountryRegion(null));
    }
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

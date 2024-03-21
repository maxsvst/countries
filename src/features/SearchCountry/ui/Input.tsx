import React, { ChangeEvent, useEffect, useState } from "react";

import style from "./styles.module.scss";
import { useDebounce } from "@/shared/lib";
import { setCountryName, setCountryRegion } from "@/entities/country/model";

export function Input() {
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

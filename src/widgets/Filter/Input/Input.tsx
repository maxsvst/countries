import React, {
  useState,
  useEffect,
  useDeferredValue,
  ChangeEvent,
} from "react";
import style from "./Input.module.scss";

export default function Input() {
  const [inputState, setInputState] = useState<string>("");
  const debouncedInputState = useDeferredValue(inputState); // Пока такой debounce

  useEffect(() => {
    !!debouncedInputState.trim() &&
      fetch(`https://restcountries.com/v3.1/name/${debouncedInputState}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
  }, [debouncedInputState]);

  const handleSearchCountryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  return (
    <input
      className={style.input}
      value={inputState}
      onChange={handleSearchCountryInputChange}
      placeholder="Search for the country..."
    />
  );
}

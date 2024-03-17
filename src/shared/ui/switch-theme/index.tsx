import React from "react";
import style from "./styles.module.scss";
import { useTheme } from "../../hooks/useTheme";

export default function SwitchThemeButton() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  return (
    <div onClick={() => handleTheme()} className={style.themeWrapper}>
      <span className={style.headerTeme}>{theme} mode</span>
    </div>
  );
}

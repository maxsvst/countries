import React from "react";

import { useTheme } from "@/shared/model";

import style from "./styles.module.scss";

export function SwitchThemeButton() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  const themeButtonText = theme === "Light" ? "Dark" : "Light";

  return (
    <div onClick={() => handleTheme()} className={style.themeWrapper}>
      <span className={style.headerTeme}>{themeButtonText} mode</span>
    </div>
  );
}

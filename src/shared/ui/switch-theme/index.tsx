import React from "react";
import style from "./styles.module.scss";

export default function SwitchThemeButton() {
  return (
    <div className={style.themeWrapper}>
      <span className={style.headerTeme}>Dark mode</span>
    </div>
  );
}

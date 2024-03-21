import React from "react";

import { ScrollToTopButton, SwitchThemeButton } from "@/shared/ui";

import style from "./styles.module.scss";

export function Header() {
  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.header}>
          <span className={style.headerTitle}>Where in the world?</span>
          <SwitchThemeButton />
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}

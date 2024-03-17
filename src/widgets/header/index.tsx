import React from "react";
import style from "./styles.module.scss";
import SwitchThemeButton from "../../shared/ui/switch-theme";
import ScrollToTopButton from "../../shared/ui/scroll-to-top";

export default function Header() {
  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.header}>
          <span className={style.headerTitle}>Where in the world?</span>
          {/* <SwitchThemeButton /> */}
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}

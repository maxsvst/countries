import React from "react";
import style from "./Header.module.scss";

function Header() {
  return (
    <div className={style.headerWrapper}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>Where in the world?</h2>
        <div>
          иконка темы
          <span> mode</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import style from "./Header.module.scss";

function Header() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style.headerWrapper}>
        <div className={style.header}>
          <span className={style.headerTitle}>Where in the world?</span>
          <div className={style.themeWrapper}>
            <span className={style.headerTeme}>Dark mode</span>
          </div>
          <button className={style.upButton} onClick={handleClick}>
            ↑
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import style from "./styles.module.scss";

export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={style.upButton} onClick={handleClick}>
      ↑
    </button>
  );
}

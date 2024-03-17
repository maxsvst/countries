import React from "react";
import style from "./styles.module.scss";
import { FaArrowUp } from "react-icons/fa";
import { handleClick } from "../../utils";

export default function ScrollToTopButton() {
  return (
    <FaArrowUp
      className={style.upButton}
      onClick={handleClick}
      width={20}
      height={20}
    />
  );
}

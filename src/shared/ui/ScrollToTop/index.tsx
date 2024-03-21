import React from "react";
import { FaArrowUp } from "react-icons/fa";

import { handleClick } from "@/shared/model";

import style from "./styles.module.scss";

export function ScrollToTopButton() {
  return (
    <FaArrowUp className={style.upButton} onClick={handleClick} width={20} height={20} />
  );
}

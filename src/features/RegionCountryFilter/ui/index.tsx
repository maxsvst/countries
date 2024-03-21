import { Dropdown } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import { selectCountryRegion } from "@/entities/country/model";
import { MenuItems } from "@/shared/ui";

import style from "./styles.module.scss";
import { filterDropdownText } from "../lib";

export function DropdownInput() {
  const currentRegion = useSelector(selectCountryRegion);

  return (
    <Dropdown overlay={<MenuItems />}>
      <button className={style.filterButton}>
        <span className={style.filterButtonText}>
          {filterDropdownText(currentRegion)}
        </span>
      </button>
    </Dropdown>
  );
}

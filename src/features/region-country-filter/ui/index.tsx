import React from "react";
import { Dropdown } from "antd";
import style from "./styles.module.scss";
import { selectCountryRegion } from "../../../app/providers/StoreProvider/config/countrySlice";
import { useSelector } from "react-redux";
import { filterDropdownText } from "../utils";
import MenuItems from "../../../shared/ui/menu-items";

export default function DropdownInput() {
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

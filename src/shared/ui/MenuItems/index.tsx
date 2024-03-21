import { Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/app/store";
import {
  selectCountryRegion,
  setCountryName,
  setCountryRegion,
} from "@/entities/country";
import { highlightCurrentRegion, REGIONS } from "@/features/region-country-filter";
import { Regions } from "@/shared/model";

export function MenuItems() {
  const dispatch = useAppDispatch();
  const currentRegion = useSelector(selectCountryRegion);

  const menuItemClickHandler = (region: Regions) => {
    dispatch(setCountryRegion(region));
    dispatch(setCountryName(""));
  };

  return (
    <Menu>
      {REGIONS.map((region: Regions) => (
        <Menu.Item
          key={region}
          // className={style.menuItem}
          style={highlightCurrentRegion(currentRegion, region)}
          onClick={() => menuItemClickHandler(region)}
        >
          {region}
        </Menu.Item>
      ))}
    </Menu>
  );
}

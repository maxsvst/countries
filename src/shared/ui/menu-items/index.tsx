import React from "react";
import { Menu } from "antd";
import { REGIONS } from "../../../features/region-country-filter/constants";
import { Regions } from "../../../features/region-country-filter/types";
import { useAppDispatch } from "../../../app/providers/StoreProvider/hooks/hooks";
import {
  selectCountryRegion,
  setCountryName,
  setCountryRegion,
} from "../../../app/providers/StoreProvider/config/countrySlice";
import { highlightCurrentRegion } from "../../../features/region-country-filter/utils";
import { useSelector } from "react-redux";

export default function MenuItems() {
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
          style={highlightCurrentRegion(currentRegion, region)}
          onClick={() => menuItemClickHandler(region)}
        >
          {region}
        </Menu.Item>
      ))}
    </Menu>
  );
}

import React, { useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { Regions } from "./IDropdownInput";
import style from "./DropdownInput.module.scss";
import { useAppDispatch } from "../../../app/hooks";
import { useGetCountryByRegionQuery } from "../../../app/country";
import {
  selectCountryRegion,
  setCountryRegion,
} from "../../../app/countrySlice";
import { useSelector } from "react-redux";
// import {
//   clearCountriesState,
//   getFilteredByRegionCountries,
// } from "../../../app/countriesSlice";

export default function DropdownInput() {
  // const [currentRegion, setCurrentregion] = useState<Regions | null>(null);

  const dispatch = useAppDispatch();
  const currentRegion = useSelector(selectCountryRegion);

  // useEffect(() => {
  //   !!currentRegion && dispatch(getFilteredByRegionCountries(currentRegion));
  //   return () => {
  //     dispatch(clearCountriesState());
  //   };
  // }, [dispatch, currentRegion]);

  const highlightCurrentRegion = (region: Regions) => {
    return currentRegion === region
      ? { fontWeight: "bold" }
      : { fontWeight: "initial" };
  };

  const menu = (
    <Menu>
      <Menu.Item
        style={highlightCurrentRegion(Regions.Africa)}
        onClick={() => dispatch(setCountryRegion(Regions.Africa))}
      >
        Africa
      </Menu.Item>
      <Menu.Item
        style={highlightCurrentRegion(Regions.America)}
        onClick={() => dispatch(setCountryRegion(Regions.America))}
      >
        America
      </Menu.Item>
      <Menu.Item
        style={highlightCurrentRegion(Regions.Asia)}
        onClick={() => dispatch(setCountryRegion(Regions.Asia))}
      >
        Asia
      </Menu.Item>
      <Menu.Item
        style={highlightCurrentRegion(Regions.Europe)}
        onClick={() => dispatch(setCountryRegion(Regions.Europe))}
      >
        Europe
      </Menu.Item>
      <Menu.Item
        style={highlightCurrentRegion(Regions.Oceania)}
        onClick={() => dispatch(setCountryRegion(Regions.Oceania))}
      >
        Oceania
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <button className={style.filterButton}>
        <span className={style.filterButtonText}>Filter By Region</span>
      </button>
    </Dropdown>
  );
}

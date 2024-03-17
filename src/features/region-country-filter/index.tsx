import React from "react";
import { Menu, Dropdown } from "antd";
import style from "./styles.module.scss";
import { useAppDispatch } from "../../app/hooks";
import {
  selectCountryRegion,
  setCountryName,
  setCountryRegion,
} from "../../app/countrySlice";
import { useSelector } from "react-redux";

export enum Regions {
  Africa = "Africa",
  America = "America",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export default function DropdownInput() {
  const dispatch = useAppDispatch();
  const currentRegion = useSelector(selectCountryRegion);

  const highlightCurrentRegion = (region: Regions) => {
    return currentRegion === region
      ? { fontWeight: "bold" }
      : { fontWeight: "initial" };
  };

  const menuItemClickHandler = (region: Regions) => {
    dispatch(setCountryRegion(region));
    dispatch(setCountryName(""));
  };

  const menu = (
    <Menu>
      <Menu.Item
        key={Regions.Africa}
        style={highlightCurrentRegion(Regions.Africa)}
        onClick={() => menuItemClickHandler(Regions.Africa)}
      >
        Africa
      </Menu.Item>
      <Menu.Item
        key={Regions.America}
        style={highlightCurrentRegion(Regions.America)}
        onClick={() => menuItemClickHandler(Regions.America)}
      >
        America
      </Menu.Item>
      <Menu.Item
        key={Regions.Asia}
        style={highlightCurrentRegion(Regions.Asia)}
        onClick={() => menuItemClickHandler(Regions.Asia)}
      >
        Asia
      </Menu.Item>
      <Menu.Item
        key={Regions.Europe}
        style={highlightCurrentRegion(Regions.Europe)}
        onClick={() => menuItemClickHandler(Regions.Europe)}
      >
        Europe
      </Menu.Item>
      <Menu.Item
        key={Regions.Oceania}
        style={highlightCurrentRegion(Regions.Oceania)}
        onClick={() => menuItemClickHandler(Regions.Oceania)}
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

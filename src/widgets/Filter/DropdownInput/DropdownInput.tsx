import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { Regions } from "./IDropdownInput";
import style from "./DropdownInput.module.scss";

export default function DropdownInput() {
  const [currentRegion, setCurrentregion] = useState<Regions | null>(null);

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setCurrentregion(Regions.Africa)}>
        Africa
      </Menu.Item>
      <Menu.Item onClick={() => setCurrentregion(Regions.America)}>
        America
      </Menu.Item>
      <Menu.Item onClick={() => setCurrentregion(Regions.Asia)}>Asia</Menu.Item>
      <Menu.Item onClick={() => setCurrentregion(Regions.Europe)}>
        Europe
      </Menu.Item>
      <Menu.Item onClick={() => setCurrentregion(Regions.Oceania)}>
        Oceania
      </Menu.Item>
    </Menu>
  );

  console.log(currentRegion);

  return (
    <Dropdown overlay={menu}>
      <button className={style.filterButton}>
        <span className={style.filterButtonText}>Filter By Region</span>
      </button>
    </Dropdown>
  );
}

import { Regions } from "../types";

export const highlightCurrentRegion = (
  currentRegion: Regions | null,
  region: Regions
) => {
  return currentRegion === region
    ? { fontWeight: "bold", fontFamily: "Montserrat" }
    : { fontWeight: "initial", fontFamily: "Montserrat" };
};

export const filterDropdownText = (currentRegion: Regions | null): string =>
  currentRegion ? currentRegion : "Filter By Region";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Regions } from "../widgets/Filter/DropdownInput/IDropdownInput";

export interface ICountriesState {
  countryName: string;
  countryRegion: Regions | null;
}

const initialState: ICountriesState = {
  countryName: "",
  countryRegion: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountryName: (state: ICountriesState, action: PayloadAction<string>) => {
      state.countryName = action.payload;
    },
    setCountryRegion: (
      state: ICountriesState,
      action: PayloadAction<Regions>
    ) => {
      state.countryRegion = action.payload;
    },
    clearCountriesState: (state: ICountriesState) => {
      Object.assign(state, { initialState });
    },
  },
});

export const selectCountryName = (state: RootState) =>
  state.country.countryName;
export const selectCountryRegion = (state: RootState) =>
  state.country.countryRegion;

export const { clearCountriesState, setCountryName, setCountryRegion } =
  countriesSlice.actions;

export default countriesSlice.reducer;

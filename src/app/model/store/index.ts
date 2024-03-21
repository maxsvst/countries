import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { countryApi } from "@/entities/country/api";
import { countriesSlice } from "@/entities/country/model/store";

export const index = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    country: countriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(index.dispatch); // refetchOnFocus/refetchOnReconnect

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export * from "./index";

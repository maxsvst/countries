import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { countryApi } from "./country";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesSlice } from "./countrySlice";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    country: countriesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch); // refetchOnFocus/refetchOnReconnect

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

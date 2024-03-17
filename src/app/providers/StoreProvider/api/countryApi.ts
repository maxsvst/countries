import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../../../shared/config";
import { Regions } from "../../../../features/region-country-filter/types";
import { ICountry } from "../../../../pages/card-list/types";

export const countryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllCountries: builder.query<ICountry[], void>({
      query: () => "all?fields=region,flags,capital,name,population",
    }),
    getCountryByName: builder.query<ICountry[], string>({
      query: (name) => `name/${name && name}`,
    }),
    getCountryByRegion: builder.query<ICountry[], Regions | null>({
      query: (region) => `region/${region && region}`,
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} = countryApi;

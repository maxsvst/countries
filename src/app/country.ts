import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../shared/config";
import { Regions } from "../features/region-country-filter";

export const countryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: (_: void) => "all?fields=region,flags,capital,name,population",
    }),
    getCountryByName: builder.query({
      query: (name: string) => `name/${name && name}`,
    }),
    getCountryByRegion: builder.query({
      query: (region: Regions | null) => `region/${region && region}`,
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} = countryApi;

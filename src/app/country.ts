import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Regions } from "../widgets/Filter/DropdownInput/IDropdownInput";

export const countryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
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

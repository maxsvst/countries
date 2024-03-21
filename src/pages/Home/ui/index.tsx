import React from "react";

import { CountryCardsList } from "@/entities/country/ui";
import { CountryFilter } from "@/widgets/Filter";

export const Page = () => (
  <>
    <CountryFilter />
    <CountryCardsList />
  </>
);

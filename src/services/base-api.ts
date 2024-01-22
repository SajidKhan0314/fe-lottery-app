// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Store + configuration
import { BASE_URL } from "config";

// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toursApi = createApi({
  reducerPath: "toursApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getTours: builder.query<any, void>({
      query: () => "/tours",
    }),
  }),
});

export const { useGetToursQuery } = toursApi;

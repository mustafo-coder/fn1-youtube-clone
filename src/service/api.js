import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos"
    })
  })
})

export const {useGetTodosQuery} = api
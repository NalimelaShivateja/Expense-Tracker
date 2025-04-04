import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
})

const baseApi = createApi({ baseQuery: baseQuery, endpoints: () => ({}) })

export default baseApi;
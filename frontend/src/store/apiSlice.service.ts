import baseApi from "./api/base-api.service";

export const apiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    googleLogin: builder.query({
      query: () => "/auth/google",
    }),
  })
})

export default apiSlice;
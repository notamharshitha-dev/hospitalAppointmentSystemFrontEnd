import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userAccountApi = createApi({
  reducerPath: 'userAccountApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://twbackend-v5op.onrender.com/patient'}),
  endpoints: (builder) => ({
    getUserAccountDetails: builder.query({
      query: () => ({
            url:`/${window.localStorage.getItem("userid")}`,
            method:"GET"
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserAccountDetailsQuery } = userAccountApi
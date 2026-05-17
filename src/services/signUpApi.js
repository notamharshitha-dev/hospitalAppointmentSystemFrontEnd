import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const signUpAPi = createApi({
  reducerPath: 'signUpAPi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hpa-backend-8nxf.onrender.com/signUp' }),
  endpoints: (builder) => ({
    getUserSignUpByName: builder.mutation({
      query: (newUser) => ({
            url:"/",
            method:"POST",
            body:newUser
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserSignUpByNameMutation } = signUpAPi
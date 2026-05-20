import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const doctorsApi = createApi({
  reducerPath: 'doctorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://twbackend-v5op.onrender.com' }),
  endpoints: (builder) => ({
     getAllDoctorsByName: builder.query({
      query: () => "/doctors",
    }),
   /* getContactByName: builder.mutation({
      query: () => ({
            url:"/",
            method:"POST",
            body:contact
      }),
    }),*/
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDoctorsByNameQuery,useLazyGetAllDoctorsByNameQuery } = doctorsApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://twbackend-v5op.onrender.com/contact' }),
  endpoints: (builder) => ({
    getContactByName: builder.mutation({
      query: (contact) => ({
            url:"/",
            method:"POST",
            body:contact
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactByNameMutation } = contactApi
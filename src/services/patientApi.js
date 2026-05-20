import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://twbackend-v5op.onrender.com'}),
  endpoints: (builder) => ({
    sendpatientAppointmentDetails: builder.mutation({
      query: (patientAppointmentDetails) => ({
            url:"/appointmentBooking",
            method:"POST",
            body:patientAppointmentDetails
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendpatientAppointmentDetailsMutation  } = patientApi
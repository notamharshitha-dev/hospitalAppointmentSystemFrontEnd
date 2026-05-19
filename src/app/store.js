import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { signUpAPi } from '../services/signUpApi'
import { loginApi } from '../services/loginApi'
import { contactApi } from '../services/contactApi'
import { doctorsApi } from '../services/doctorsApi'
import { patientApi } from '../services/patientApi'
export const store = configureStore({
  reducer: {
    //[pokemonApi.reducerPath]: pokemonApi.reducer,
    [signUpAPi.reducerPath]:signUpAPi.reducer,
    [loginApi.reducerPath]:loginApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer,
    [doctorsApi.reducerPath]:doctorsApi.reducer,
    [patientApi.reducerPath]:patientApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpAPi.middleware,loginApi.middleware,contactApi.middleware,doctorsApi.middleware,patientApi.middleware),
})
setupListeners(store.dispatch)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({

        baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,

        prepareHeaders: (headers, { getState }: any) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getAdminDetails: builder.query({
            query: () => ({
                url: 'admins/profile',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetAdminDetailsQuery } = authApi
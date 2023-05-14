import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {

        headers.set('accept-language', `en`);
        return headers;
    },
});

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: baseQuery,
    tagTypes: ['Project'],

    endpoints: (builder) => ({
        fetchProjects: builder.query({
            query: (params) => ({
                url: `/projects`,
                params,

            }),
            transformResponse: (response: any) => {
                return response.data;
            },
        }),
        createProject: builder.mutation({
            query: (project) => ({
                url: `/project/create`,
                method: 'POST',
                body: project
            }),
        }),
    }),
})

// Export hooks for usage in functional components
export const {
    useFetchProjectsQuery,
    useCreateProjectMutation
}
    = projectApi

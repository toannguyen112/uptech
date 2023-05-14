import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './projects/projectSlice'
import postReducer from './posts/postSlice'
import authReducer from './auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './rtk-query/api/auth';

export const store = configureStore({
    reducer: {
        project: projectReducer,
        posts: postReducer,
        auth: authReducer,

        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
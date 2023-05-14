import { createSlice } from '@reduxjs/toolkit'
import { adminLogin, adminRegister, adminLogout, adminProfile } from './authAction';
import { getCookie } from 'cookies-next';

let token;

if (typeof window !== 'undefined') {
    token = getCookie('adminToken')
        ? getCookie('adminToken')
        : null
}

const initialState = {
    loading: false,
    info: null,
    token,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.info = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(adminRegister.pending, (state: any, action) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(adminRegister.fulfilled, (state: any, action: any) => {
            state.loading = false
            state.success = true
        });
        builder.addCase(adminRegister.rejected, (state: any, action) => {
            state.loading = false
            state.error = action.payload
        });

        builder.addCase(adminLogin.pending, (state: any, action) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(adminLogin.fulfilled, (state: any, action: any) => {
            state.loading = false
            state.success = true
            state.info = action.payload.data.data
            state.token = action.payload.data.token
        });
        builder.addCase(adminLogin.rejected, (state: any, action) => {
            state.loading = false
            state.error = action.payload;
        });

        builder.addCase(adminLogout.pending, (state: any, action) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(adminLogout.fulfilled, (state: any, action: any) => {
            state.loading = false
            state.success = true
            state.info = null
            state.token = null
        });
        builder.addCase(adminLogout.rejected, (state: any, action) => {
            state.loading = false
            state.error = action.payload;
        });

        builder.addCase(adminProfile.pending, (state: any, action) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(adminProfile.fulfilled, (state: any, action: any) => {
            state.loading = false
            state.success = true
            state.info = action.payload.data
        });
        builder.addCase(adminProfile.rejected, (state: any, action) => {
            state.loading = false
            state.error = action.payload;
        });


    },
})

export default authSlice.reducer
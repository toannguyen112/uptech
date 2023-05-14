import axios from '../../configAxios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

interface Prop {
    username: string
    password: string
}

export const adminLogin = createAsyncThunk(
    'admin/login',
    async (form: Prop, { rejectWithValue }: any) => {
        try {
            const { data } = await axios.post(`admins/login`, { ...form });

            setCookie('adminToken', data.data.token);
            return data;

        } catch (error: any) {
            console.log(error);

            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const adminRegister = createAsyncThunk(
    'admin/register',
    async (form: Prop, { rejectWithValue }: any) => {
        try {
            await axios.post(`admins/register`, { ...form }
            )
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const adminLogout = createAsyncThunk(
    'admin/logout',
    async ({ rejectWithValue }: any) => {
        try {
            const token = getCookie('adminToken');

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.post(`admins/logout`, {}, config);
            deleteCookie('adminToken');

        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const adminProfile = createAsyncThunk(
    'admin/profile',
    async ({ rejectWithValue }: any) => {
        try {
            const token = getCookie('adminToken');

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const { data } = await axios.get(`admins/profile`, config);
            return data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
import axios from '../../configAxios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProjects = createAsyncThunk(
    'project/fetchProjects',
    async ({ rejectWithValue }: any) => {
        try {

            const res = await axios.get(`/projects`);
            return res.data.data;


        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async ({ id }: any, { rejectWithValue }: any) => {
        try {
            await axios.get(`/posts/show/${id}`).then((res) => {
                console.log(res);
            });
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const updatePostById = createAsyncThunk(
    'posts/udpatePostById',
    async ({ id }: any, { rejectWithValue }: any) => {
        try {
            await axios.get(`/posts/update/${id}`)
                .then((res) => {
                    console.log(res);
                });
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async ({ id }: any, { rejectWithValue }: any) => {
        try {
            await axios.get(`/posts/delete/${id}`)
                .then((res) => {
                    console.log(res);
                });
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
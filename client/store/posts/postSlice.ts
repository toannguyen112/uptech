import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postAction'
export interface PostState {
    data: any,
    loading: false,
    error: null,
    success: false,
}

const initialState: PostState = {
    data: {},
    loading: false,
    error: null,
    success: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state: any, action) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(fetchPosts.fulfilled, (state: any, action: any) => {
            state.loading = false
            state.success = true
            state.data = action.payload
        });
        builder.addCase(fetchPosts.rejected, (state: any, action) => {
            state.loading = false
            state.error = action.payload;
        });
    },

})

export default postSlice.reducer
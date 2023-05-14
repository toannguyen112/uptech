import { createSlice } from '@reduxjs/toolkit'
import { fetchProjects } from './projectAction'
export interface ProjectState {
    data: object,
    loading: false,
    error: null,
    success: false,
}

const initialState: ProjectState = {
    data: {},
    loading: false,
    error: null,
    success: false
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state: any, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProjects.fulfilled, (state: any, action: any) => {
            state.success = true;
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProjects.rejected, (state: any, action) => {
            state.loading = true;
            state.error = action.payload;
        });
    },
})

export const selectProjects = (state: any) => state.data

export default projectSlice.reducer
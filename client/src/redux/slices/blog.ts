import {createSlice} from "@reduxjs/toolkit";
import {BlogState} from "../../types/interfaces/blog";
import {loadBlog, loadBlogDetail} from "../actions/blog";

const initialState: BlogState = {
    loading: false,
    blog: null,
    blogDetail: null
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadBlog.pending, (state: BlogState, action) => {
                state.loading = true;
            })
            .addCase(loadBlog.rejected, (state: BlogState, action) => {
                state.loading = false;
                state.blog = null;
            })
            .addCase(loadBlog.fulfilled, (state: BlogState, action) => {
                state.loading = false;
                state.blog = action.payload.theories;
            })
            .addCase(loadBlogDetail.pending, (state: BlogState, action) => {
                state.loading = true;
            })
            .addCase(loadBlogDetail.rejected, (state: BlogState, action) => {
                state.loading = false;
                state.blogDetail = null;
            })
            .addCase(loadBlogDetail.fulfilled, (state: BlogState, action) => {
                state.loading = false;
                state.blogDetail = action.payload.theory;
            })
    }
});

export default blogSlice.reducer;

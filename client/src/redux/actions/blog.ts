import {createAsyncThunk} from "@reduxjs/toolkit";
import BlogService from '../../services/blog.service';
import {
    LoadBlogListResponse,
    LoadBlogDetailCall,
    LoadBlogDetailResponse
} from "../../types/interfaces/blog";

export const loadBlog = createAsyncThunk(
    'blog/load-list',
    async (payload, thunkAPI) => {
        try {
            const response: LoadBlogListResponse = await BlogService.loadBlog();

            return {
                theories: response.data
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const loadBlogDetail = createAsyncThunk(
    'blog/load-detail',
    async ({id}: LoadBlogDetailCall, thunkAPI) => {
        try {
            const response: LoadBlogDetailResponse = await BlogService.loadBlogDetail({
                id: id
            });

            return {
                theory: response.data
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
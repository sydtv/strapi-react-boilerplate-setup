import {configureStore} from "@reduxjs/toolkit";
import blogReducer from './slices/blog';

export const store = configureStore({
    reducer: {
        blog: blogReducer
    },
    devTools: import.meta.env.MODE === 'development'
});

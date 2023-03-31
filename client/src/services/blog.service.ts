import http from "../http-common";
import {endpoints} from "../config/endpoints";
import {
    LoadBlogDetailCall,
    LoadBlogDetailResponse,
    LoadBlogListResponse,
} from "../types/interfaces/blog";
import {
    ApiResponse
} from "../types/interfaces/api";

class BlogService {
    async loadBlog() {
        const res: ApiResponse<LoadBlogListResponse> = await http.get(endpoints.blog.loadBlog);

        return res.data;
    }

    async loadBlogDetail({id}: LoadBlogDetailCall) {
        const res: ApiResponse<LoadBlogDetailResponse> = await http.get(`${endpoints.blog.loadBlog}/${id}`);

        return res.data;
    };
}

export default new BlogService();
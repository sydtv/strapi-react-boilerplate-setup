export interface BlogState {
    loading: boolean,
    blog: null | Array<BlogItem>,
    blogDetail: null | BlogItem
}

export interface BlogItem {
    id: number,
    attributes: {
        title: string,
        text: string,
        createdAt: string,
        updatedAt: string,
        locale: string
    }
}

export interface LoadBlogListResponse {
    data: Array<BlogItem>
}

export interface LoadBlogDetailCall {
    id: string
}

export interface LoadBlogDetailResponse {
    data: BlogItem
}
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {Link} from "react-router-dom";
import {loadBlog} from "../../redux/actions/blog";

function Blog() {
    const blogItems = useAppSelector(state => state.blog.blog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadBlog());
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            {blogItems && blogItems.length > 0 ?
                blogItems.map((blogItem) => (
                    <div key={blogItem.id}>
                        <Link to={`/${blogItem.id}`}>
                            {blogItem.attributes.title}
                        </Link>
                    </div>
                )) :
                <p>No blog items found</p>
            }
        </div>
    )
}

export default Blog;
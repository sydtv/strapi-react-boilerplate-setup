import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {loadBlogDetail} from "../../redux/actions/blog";
import {Link, useParams} from "react-router-dom";

function BlogDetail() {
    let {blogId} = useParams();
    const blogItem = useAppSelector(state => state.blog.blogDetail);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (blogId) {
            dispatch(loadBlogDetail({
                id: blogId
            }));
        }
    }, [blogId]);

    return (
        <div>
            <Link to={'/'}>
                Back to overview
            </Link>
            {blogItem ?
                <div>
                    <div>
                        <h1>{blogItem.attributes.title}</h1>
                    </div>
                    <p>{blogItem.attributes.text}</p>
                </div> :
                <p>No blog item found</p>
            }
        </div>
    )
}

export default BlogDetail;
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const AllPosts = ({prompts, title}) => {

    return (
        <div className="container col-8 flex-column m-5">
            <div className="row card flex-column justify-content-center">
                <h2 className="row justify-content-center">Post Feed</h2>
                <div className="row flex-row justify-content-space-between">
                    <div className="ms-3">view your posts</div>
                    <div className="me-3"><Link to='/writepost'>add a post</Link></div>
                </div>
            </div>
            <div className="row card post-item flex-column mt-3 p-3">
                <div className="blog-post">
                    <h3 className="row">blog post title</h3>
                    <div className="row">Post content will go here.
                    </div>
                </div>
                <div className="row flex-column comment-section mt-3">
                    <div className="row comment-header">comments</div>
                    <div className="row comment flex-column mt-2 ms-3">
                        <div>comment number one</div>
                        <div className="comment-user-info">comment user // date</div>
                    </div>
                    <div className="row comment flex-column mt-2 ms-3">
                        <div>comment number two</div>
                        <div className="comment-user-info">comment user // date</div>
                    </div>
                    <div className="row justify-content-end">add comment</div>
                </div>
            </div>
            <div className="row card post-item flex-column mt-3 p-3">
                <div className="blog-post">
                    <h3 className="row">blog post title</h3>
                    <div className="row">Post content will go here.
                    </div>
                </div>
                <div className="row flex-column comment-section mt-3">
                    <div className="row comment-header">comments</div>
                    <div className="row comment flex-column mt-2 ms-3">
                        <div>comment number one</div>
                        <div className="comment-user-info">comment user // date</div>
                    </div>
                    <div className="row comment flex-column mt-2 ms-3">
                        <div>comment number two</div>
                        <div className="comment-user-info">comment user // date</div>
                    </div>
                    <div className="row justify-content-end">add comment</div>
                </div>
            </div>
        </div>
    );
};

export default AllPosts;
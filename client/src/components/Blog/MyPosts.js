import React from "react";
import { Link } from 'react-router-dom';

const MyPosts = () => {
    return (
            <div className="container col-8 flex-column m-5">
                <div className="row card flex-column justify-content-center">
                    <h2 className="row justify-content-center">Bubble Wrap - My Posts</h2>
                    <div className="row flex-row justify-content-space-between">
                        <div className="ms-3">view your posts</div>
                        <div className="me-3">add a post</div>
                    </div>
                </div>
                <div className="row card flex-column mt-3 p-3">
                    <h3 className="row">
                        <Link to='/postdetail'>post title</Link></h3>
                    <div className="row">Post content will go here.</div>
                    <div className="row flex-column comment-section mt-1">
                        <div className="row">comments</div>
                        <div className="row">Comment number one</div>
                    </div>
                </div>
            </div>
    );
};

export default MyPosts;
import React from "react";

const AllPosts = () => {
    return (
            <div className="container col-8 flex-column m-5">
                <div className="row card justify-content-center">
                    <h2>Blog</h2>
                </div>
                <div className="row card flex-column mt-3 p-3">
                    <h3 className="row">blog post title</h3>
                    <div className="row">Post content will go here.</div>
                    <div className="row flex-column comment-section mt-1">
                        <div className="row">comments</div>
                        <div className="row">Comment number one</div>
                    </div>
                </div>
            </div>
    );
};

export default AllPosts;
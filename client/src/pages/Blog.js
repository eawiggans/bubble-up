import React from "react";
import AllPosts from '../components/Blog/AllPosts';
import SinglePost from '../components/Blog/SinglePost';
import WritePost from '../components/Blog/WritePost';
import MyPosts from "../components/Blog/MyPosts";
const Blog = () => {
    return (
      <div className="container justify-content-center mt-5">
        {/* <AllPosts /> */}
        <SinglePost />
        {/* <WritePost /> */}
        {/* <MyPosts /> */}
      </div>
    );
  };
  
  export default Blog;
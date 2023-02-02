import React from "react";
import AllPosts from '../components/Blog/AllPosts';
import SinglePost from '../components/Blog/SinglePost';
import MyPosts from "../components/Blog/MyPosts";
const Blog = () => {
    return (
      <div className="container justify-content-center mt-5">
        <AllPosts />
        {/* <SinglePost /> */}
        {/* <MyPosts /> */}
      </div>
    );
  };
  
  export default Blog;
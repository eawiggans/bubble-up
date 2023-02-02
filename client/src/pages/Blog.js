import React from "react";
import AllPosts from '../components/Blog/AllPosts';
import SinglePost from '../components/Blog/SinglePost';
const Blog = () => {
    return (
      <div className="container justify-content-center mt-5">
        <AllPosts />
        {/* <SinglePost /> */}
      </div>
    );
  };
  
  export default Blog;
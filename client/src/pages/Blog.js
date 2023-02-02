import React from "react";
import InterviewFeed from '../components/Blog/InterviewFeed';
import SinglePost from '../components/Blog/SinglePost';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_INTERVIEWS } from '../utils/queries';

const Blog = () => {

  const { loading, data } = useQuery(GET_ALL_INTERVIEWS);

  const interviews = data?.interviewInfo || []; 

    return (
      <div className="container justify-content-center mt-5">
        {/* <InterviewFeed 
        interviewInfo={interviews}/> */}
        {/* <SinglePost /> */}
      </div>
    );
  };
  
  export default Blog;
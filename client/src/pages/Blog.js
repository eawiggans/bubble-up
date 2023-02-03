import React from "react";
import InterviewFeed from '../components/Blog/InterviewFeed';
import SinglePost from '../components/Blog/SinglePost';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_INTERVIEWS } from '../utils/queries';

const Blog = () => {

  const { loading, data } = useQuery(QUERY_INTERVIEWS);

  const interviews = data?.interviewInfo || []; 

    return (
      <div className="container justify-content-center mt-5">
        <InterviewFeed 
        interviewInfo={interviews}/>
        {/* <SinglePost /> */}
      </div>
    );
  };
  
  export default Blog;
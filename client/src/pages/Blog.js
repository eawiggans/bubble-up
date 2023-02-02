import React from "react";
import InterviewFeed from '../components/Blog/InterviewFeed';
import SinglePost from '../components/Blog/SinglePost';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_INTERVIEWS } from '../utils/queries';

const Blog = () => {

          // Execute the query on component load
  const { loading, data } = useQuery(GET_ALL_INTERVIEWS);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
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
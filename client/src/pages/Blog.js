import React from 'react';
import AllPosts from '../components/Blog/AllPosts';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_PROMPTS } from '../../utils/queries';

const Blog = () => {

  const { loading, data } = useQuery(QUERY_PROMPTS);
  const prompts = data?.prompts || [];

  if (Auth.loggedIn()) {
    return (
      <div className="container justify-content-center mt-5">
      {loading ? (
            <div>Loading...</div>
          ) : (
            <AllPosts prompts={prompts} title='Top Questions'/>
          )}
      </div>
    );
  }
};
export default Blog;

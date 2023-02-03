import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SinglePost from './SinglePost';

const AllPosts = ({ prompts, title }) => {
    console.log(prompts);
//   if (!prompts.length) {
//       return <h3 className="mt-5">No Profiles Yet</h3>;
//     }

  return (
    <div className="container col-8 flex-column m-5">
      <div className="row card flex-column justify-content-center">
        <h2 className="row justify-content-center">{title}</h2>
        <div className="row flex-row justify-content-space-between">
          <div className="ms-3">view your posts</div>
          <div className="me-3">
            <Link to="/writepost">add a post</Link>
          </div>
        </div>
      </div>
      <div>
        {prompts.map((prompts) => (
          <SinglePost prompts={prompts}/>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;

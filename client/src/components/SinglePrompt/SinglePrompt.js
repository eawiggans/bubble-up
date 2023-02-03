import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
const SinglePrompt = ({ prompt }) => {
  console.log(prompt);
  if (!prompt.solutions.length) {
    return (
        <div className="container col-8 flex-column m-5">
      <div className="row card flex-column justify-content-center">
        <h2 className="row justify-content-center pt-3 px-3">{prompt.prompt}</h2>
        <div className="row flex-row justify-content-space-between">
          <div className="ms-3 mb-2">
            <Link to="/me">view your posts</Link>
          </div>
          <div className="me-3 mb-2">
            <Link to="/writepost">add a post</Link>
          </div>
        </div>
        <div className="blog-post"></div>
        <div className="row flex-column comment-section">
          <hr></hr>
          <h2 className="text-align-center mt-3">no comments yet :(</h2>
        </div>
      </div>
    </div>
    )
  } else
  return (
    <div className="container col-8 flex-column m-5">
      <div className="row card flex-column justify-content-center">
        <h2 className="row justify-content-center pt-3">{prompt.prompt}</h2>
        <div className="row flex-row justify-content-space-between">
          <div className="ms-3 mb-2">
            <Link to="/me">view your posts</Link>
          </div>
          <div className="me-3 mb-2">
            <Link to="/writepost">add a post</Link>
          </div>
        </div>
        <div className="blog-post"></div>
        <div className="row flex-column comment-section">
          <hr></hr>
          <h2 className="text-align-center mt-4">Discussion</h2>

          <div className="row comment flex-column mt-2 mx-3">
            {prompt.solutions.map((solutions) => (
              <Comment key={solutions._id} solutions={solutions} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePrompt;

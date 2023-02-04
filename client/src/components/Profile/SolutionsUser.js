import React from 'react';
import Comment from '../SinglePrompt/Comment';
const SolutionsUser = ({ user }) => {
  return (
    <div className="container col-8 flex-column m-5">
      <div className="row card flex-column justify-content-center">
        <div className="row flex-column">
            <div className="row flex-column comment-section">
              <div className="row comment flex-column mt-2 mx-3">
                {user.solutions.map((solutions) => (
                  <Comment key={solutions._id} solutions={solutions} id />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SolutionsUser;

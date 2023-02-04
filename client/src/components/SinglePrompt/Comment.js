import React from 'react';

const Comment = ({ solutions }) => {
  console.log(solutions);
  return (
    <div className="card-thin my-2">
      <div className="corner-border px-1 row justify-content-space-between">
      <div>
        {solutions.username}
      </div>
      <div>
        {solutions.createdAt || "timestamp"}
      </div>
      </div>
      <div className="p-2 row">
        <p className="mb-1 comment-body">{solutions.response}</p>
      </div>
    </div>
  );
};

export default Comment;

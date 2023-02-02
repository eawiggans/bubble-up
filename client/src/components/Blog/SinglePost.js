import React from 'react';

const SinglePost = ({prompts}) => {
    // console.log(prompts.data);
  return (
    <div className="row card post-item flex-column mt-3 p-3">
      <div className="blog-post">
        <h3 className="row">{prompts.prompt}</h3>
        <div className="row">Post content will go here.</div>
      </div>
      <div className="row flex-column comment-section mt-3">
        <div className="row comment-header">comments</div>
        <div className="row comment flex-column mt-2 ms-3">
          <div>comment number one</div>
          <div className="comment-user-info">comment user // date</div>
        </div>
        <div className="row comment flex-column mt-2 ms-3">
          <div>comment number two</div>
          <div className="comment-user-info">comment user // date</div>
        </div>
        <div className="row justify-content-end">add comment</div>
      </div>
    </div>
  );
};

export default SinglePost;

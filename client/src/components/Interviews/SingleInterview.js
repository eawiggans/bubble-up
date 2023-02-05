import React from 'react';
// import { Link } from 'react-router-dom';

const SingleInterview = ({ interviews }) => {

    return (

        <div className="row card interview-post-item flex-column mt-3 p-3">
            <div className="blog-post">
            <div>
              <h3 className="row">{interviews.username}'s interview at {interviews.location}</h3>
            </div>
                <div><b>Subject:</b> {interviews.subject} </div>
                <div><b>Prompt received:</b> {interviews.prompt}</div>
                <div><b>Response:</b> {interviews.response}</div>
                <div><b>Interviewer feedback:</b> {interviews.resFeedback}</div>
                {/* <div className="btn btn-secondary">
            <Link to={`/interview/${interviews._id}`}>
              <b>Join the discussion</b>
            </Link>
          </div> */}
            </div>
        </div>

    );
};

export default SingleInterview;
import React from 'react';
import { Link } from 'react-router-dom';

const SingleInterview = ({ interviews }) => {
    console.log(interviews);
    return (

        <div className="row card interview-post-item flex-column mt-3 p-3">
            <div className="blog-post">
                <h3 className="row">interview experience</h3>
                <div>username: {interviews.username}</div>
                <div>location of interview: {interviews.location}</div>
                <div>subject: {interviews.subject}</div>
                <div>prompt received: {interviews.prompt}</div>
                <div>interviewee response: {interviews.response}</div>
                <div>interviewer feedback: {interviews.resFeedback}</div>
                <div className="btn btn-secondary">
            <Link to={`/interview/${interviews._id}`}>
              <b>Join the discussion</b>
            </Link>
          </div>
            </div>
        </div>

    );
};

export default SingleInterview;
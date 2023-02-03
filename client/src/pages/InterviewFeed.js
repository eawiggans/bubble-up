import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const InterviewFeed = ({ interviews }) => {


    // if (!interviews.length) {
    //     return <h3 className="mt-5">No Posts Yet</h3>
    // }

    return (
        <div className="container justify-content-center mt-5">
            <div className="container justify-content-center mt-5">
                <div className="container col-8 flex-column m-5">
                    <div className="row card flex-column justify-content-center">
                        <h2 className="row justify-content-center">Interview Experiences</h2>
                        <div className="row flex-row justify-content-space-between">
                            <div className="ms-3">view your posts</div>
                            <div className="me-3"><Link to='/writepost'>add a post</Link></div>
                        </div>
                    </div>

                    {interviews && interviews.map((interviewInfo) => (
                        <div className="row card interview-post-item flex-column mt-3 p-3">
                            <div key={interviewInfo._id} className="blog-post">
                                <h3 className="row">interview experience</h3>
                                <div>position applied for: {interviewInfo.position}</div>
                                <div>location of interview: {interviewInfo.location}</div>
                                <div>prompt received: {interviewInfo.prompt}</div>
                                <div>interviewee response: {interviewInfo.response}</div>

                            </div>
                            <div className="row flex-column comment-section mt-3">
                                <div className="row comment-header">feedback</div>
                                <div className="row comment flex-column mt-2 ms-3">
                                    <div>comment number one</div>
                                    <div className="comment-user-info">comment user // date</div>
                                </div>
                                <div className="row comment flex-column mt-2 ms-3">
                                    <div>comment number two</div>
                                    <div className="comment-user-info">comment user // date</div>
                                </div>
                                <div className="row justify-content-end">add feedback</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterviewFeed;
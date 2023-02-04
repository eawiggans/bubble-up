import React from 'react';
import { Link } from 'react-router-dom';
import SingleInterview from './SingleInterview';

const AllInterviews = ({ interviews, title }) => {

  return (
    <div className="container col-8 flex-column m-5">

      <div className="row card flex-column justify-content-center">
                        <h2 className="row justify-content-center">{title}</h2>
                        <div className="row flex-row justify-content-space-between">
                            <div className="ms-3">view your posts</div>
                            <div className="me-3"><Link to='/writepost'>add a post</Link></div>
                        </div>
                    </div>
      <div>
        {interviews.map((interviews) => (
          <SingleInterview key={interviews._id} interviews={interviews} />
        ))}
      </div>
    </div>
  );
};

export default AllInterviews;
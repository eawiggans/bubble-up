import React from 'react';
import Auth from '../../utils/auth';
import AllUserInterviews from '../Interviews/AllInterviews';

const InterviewsUser = ({ interviews }) => {
  const currentUsername = Auth.getProfile().data.username;
  const userInterviews = interviews.filter((interview) => interview.username === currentUsername);

  return (
    <div className="container justify-content-center">
      <AllUserInterviews interviews={userInterviews} title="Add Interview" />
    </div>
  );
};

export default InterviewsUser;

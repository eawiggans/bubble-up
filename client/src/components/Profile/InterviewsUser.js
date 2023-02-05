import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import AllUserInterviews from '../Interviews/AllInterviews'
import { QUERY_ALL_INTERVIEWS } from '../../utils/queries';

const InterviewsUser = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_INTERVIEWS);
    const interviews = data?.getAllInterviewInfo || [];

    const currentUsername = Auth.getProfile().data.username;
    const userInterviews = interviews.filter((interview) => interview.username === currentUsername);

    console.log('userInterviews: ', userInterviews);
  return (
  <div className='container justify-content-center'>
    {loading ? (
      <div className='mt-5'>Give us a second...</div>
    ) : error ? (
      <div className='mt-5'>{error.message}</div>
    ) : (
      <AllUserInterviews interviews={userInterviews} title='Add Interview' />
    )}
  </div>
);
};

export default InterviewsUser;

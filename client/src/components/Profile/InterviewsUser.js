import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import AllInterviews from '../Interviews/AllInterviews'
import { QUERY_ALL_INTERVIEWS } from '../../utils/queries';

const InterviewsUser = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_INTERVIEWS);
    const interviews = data?.getAllInterviewInfo || [];
    let interviewsArray = [];
    interviewsArray.push(interviews)
    
    const currentUsername = Auth.getProfile().data.username;
    const userInterviews = interviewsArray.filter((interview) => interview.username === currentUsername);

    console.log('userInterviews: ', userInterviews);
  return (
  <div className='container justify-content-center mt-5'>
    {loading ? (
      <div className='mt-5'>Give us a second...</div>
    ) : error ? (
      <div className='mt-5'>{error.message}</div>
    ) : (
      <AllInterviews interviews={userInterviews} title='Interview Experiences' />
    )}
  </div>
);
};

export default InterviewsUser;

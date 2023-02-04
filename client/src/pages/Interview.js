import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_INTERVIEW } from '../utils/queries';
import SingleInterview from '../components/Interviews/SingleInterview'

const Interview = () => {
    const { interviewId } = useParams();
  const { loading, error, data } = useQuery(QUERY_INTERVIEW, {
    variables: { interviewId: interviewId },
  }); 
  const interview = data?.getInterviewInfo || {};
  
  // Change header
    let header = 'Interview Experience'

//   if (prompt.solutions.length === 0) {
//     header = "no comments yet :("
//   } else {
//     header = "Discussion"
//   }

  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }
  if (Auth.loggedIn()) {
    return <div className="container justify-content-center mt-5">
            {loading ? 
                <div className="mt-5">One sec...</div>
                 : error ? 
                    <div className="mt-5">{error.message}
                    </div> : 
                    
                <SingleInterview interview={interview} header={header}/>
                }
            </div>;
  }
};

export default Interview;
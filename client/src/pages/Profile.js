import React, { useState } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import { useMutation, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function Profile() {
  const { username: userParam } = useParams();

  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || {};
  console.log(user);

  const profileURL = `https://source.boringavatars.com/beam/150/${user._id}?colors=7dcfff,7aa2f7,bb9af7,b4f9f8,73daca,9ece6a`;

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  if (!Auth.loggedIn()) {
    return (
      <div className="container mt-5">
        <div className="container col-4 flex-column mt-5 p-3">
          <h2 className="row justify-content-center">Uh Oh!</h2>
          <p className="row justify-content-center">
            Please<Link to="/login">&nbsp;log in&nbsp;</Link> to view your profile
          </p>
        </div>
      </div>
    );
  }
  if (loading) {
    return <div>One sec...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="container mt-5 justify-content-center flex-column">
        <div className="row mt-5 justify-content-center">
          <img src={profileURL} alt="Profile Pic" className="mb-4"></img>
        </div>
        <div className="row align-items-center flex-column">
          <h1 className="mb-5">
            {user.firstName} {user.lastName}
          </h1>
        </div>
        
        <div className='container justify-content-center'>
          <div onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
            Interviews
          </div>
          <div onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
            Solutions
          </div>
          <div onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
            Finished Prompts
          </div>
          <div onClick={() => toggleTab(4)} className={toggleState === 4 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
            Todo Prompts
          </div>
        </div><hr className='m-0'></hr>
        <div className={toggleState === 1 ? 'content content-active' : 'content'}>Interviews</div>
        <div className={toggleState === 2 ? 'content content-active' : 'content'}>Solutions</div>
        <div className={toggleState === 3 ? 'content content-active' : 'content'}>Complected Prompts</div>
        <div className={toggleState === 4 ? 'content content-active' : 'content'}>Prompts</div>
      </div>
    );
  }
}

export default Profile;

import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import { QUERY_PROMPTS } from '../utils/queries';
import Auth from '../utils/auth';

import SolutionsUser from '../components/Profile/SolutionsUser';
import CompletedPrompts from '../components/Profile/CompletedPrompts';
import TodoPrompts from '../components/Profile/TodoPrompts';
import InterviewsUser from '../components/Profile/InterviewsUser'

function Profile() {
  const { username: userParam } = useParams();

  const { loading: loadingMe, error: errorMe, data: dataMe } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });
  const { loading: loadingPrompts, error: errorPrompts, data: dataPrompts } = useQuery(QUERY_PROMPTS);
  
  const user = dataMe?.me || {};
  const prompts = dataPrompts?.getPrompts || [];
  // console.log(prompts);

  const profileURL = `https://source.boringavatars.com/beam/150/${user.username}?colors=7dcfff,7aa2f7,bb9af7,b4f9f8,73daca,9ece6a`;

  const [toggleState, setToggleState] = useState(3);
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
  if (loadingMe) {
    return <div>One sec...</div>;
  }
  if (errorMe) {
    return <div>{errorMe}</div>;
  } else {
    return (
      <div className="container mt-5 justify-content-center flex-column">
        <div className="row mt-5 justify-content-center">
          <img src={profileURL} alt="Profile Pic" className="mb-4 select-none"></img>
        </div>
        <div className="row align-items-center flex-column">
          <h1 className="mb-5 name-header select-none">
            {user.firstName} {user.lastName}
          </h1>
        </div>
        
        <div className='container justify-content-center'>
          <div onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
          <b className='select-none'>My Interviews</b>
          </div>
          <div onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
          <b className='select-none'>My Solutions</b>
          </div>
          <div onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
          <b className='select-none'>Finished Prompts</b>
          </div>
          <div onClick={() => toggleTab(4)} className={toggleState === 4 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
          <b className='select-none'>Todo Prompts</b>
          </div>
          <div onClick={() => toggleTab(5)} className={toggleState === 5 ? 'tabs row active-tabs px-4 mx-3 py-2' : 'row tabs px-4 mx-1 py-2'}>
          <b className='select-none'>Stats</b>
          </div>
        </div><hr className='m-0'></hr>
        <div className={toggleState === 1 ? 'content content-active justify-content-center' : 'content justify-content-center'}><InterviewsUser /></div>
        <div className={toggleState === 2 ? 'content content-active justify-content-center' : 'content justify-content-center'}><SolutionsUser user={user} prompts={prompts} /></div>
        <div className={toggleState === 3 ? 'content content-active justify-content-center' : 'content justify-content-center'}><CompletedPrompts user={user} prompts={prompts} /></div>
        <div className={toggleState === 4 ? 'content content-active justify-content-center' : 'content justify-content-center'}><TodoPrompts user={user} prompts={prompts} /></div>
        <div className={toggleState === 5 ? 'content content-active justify-content-center' : 'content justify-content-center'}>Stats</div>
      </div>
    );
  }
}

export default Profile;

import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_USER } from '../utils/mutations';
import Auth from '../utils/auth';



function Profile() {
  // const { loading, data } = useQuery(QUERY_USER);

  // const user = data?.user || [];

  // if (!Auth.loggedIn()) {
  //   return (
  //     <div className='container mt-5'>
  //       <div className='container col-4 flex-column mt-5 p-3'>
  //         <h2 className='row justify-content-center'>Uh Oh!</h2>
  //         <p className='row justify-content-center'>Please<Link to="/login">&nbsp;log in&nbsp;</Link> to view your profile</p></div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     code below will go here when login functionality is hooked up!
  //    this is written so far for viewing your own profile only
  //   )
  // }
  return (
    <div className='container mt-5'>

      <div className='container profile-container flex-row  m-5'>

        <div className='card user-card flex-column col-3 me-5 p-3'>
          <div className='pt-3'>
            <h3 className='profile-subheads'>user</h3>
            <div>name: user.firstName&nbsp;user.lastName</div>
            <div>username: user.username</div>
            <div className='row justify-content-end'><a href="LINK HERE">edit user info</a></div>
          </div>
          
          <div className='pt-3'>
            <h3 className='profile-subheads'>stats</h3>
            <div>last quiz: quiz name / quiz score</div>
            <div>current average: average quiz score</div>
            <div className='row justify-content-end'><Link to='/scoreboard'>view scoreboard</Link></div>
          </div>

          <div className='pt-3'>
            <h3 className='profile-subheads'>posts</h3>
            <div>recent posts: recent post title, recent post title, recent post title</div>
            <div className='row justify-content-end'><Link to='/blog'>view blog</Link></div>
          </div>
        </div>

        <div className='activity-cards flex-column col-8'>

          <div className='card flex-column row justify-content-center p-3'>
            
              <div className="row justify-content-center">
                <h2>Ready to test yourself?</h2>
              </div>
              <div className="row justify-content-center">
                <Link to='/'><button className="btn btn-primary mt-2">Take a quiz!</button></Link>
              </div>
          </div>

          <div className='card row justify-content-center mt-3 p-3'>
            <h2>Your Last Quiz</h2>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;
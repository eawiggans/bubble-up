import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_USER } from '../utils/mutations';
import Auth from '../utils/auth';



function Profile() {
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
  //     code below will go here when hooked up!
  //    this is written so far for viewing your own profile only
  //   )
  // }
    return (
        <div className='container mt-5'>
          <div className='container profile-container flex-row  m-5'>
            
            <div className='card user-card flex-column col-3 me-5 p-3'>

                <div>
                  <h3 className='profile-subheads'>User Info</h3>
                  <div></div>
                </div>
                <div>
                  <h3 className='profile-subheads'>Stats</h3>
                  <div></div>
                </div>
            </div>
            <div className='card activity-card flex-column col-8 p-3'>
            <div className='row justify-content-center'><h2>Activities</h2></div>
            <div className='row flex-column'>
              <div className="row justify-content-center"><p>Ready to test yourself?</p></div>
              <div className="row justify-content-center">
            <Link to='/'><button className="btn btn-primary mt-2">Take a quiz!</button></Link>
          </div>
            </div>
            </div>
          </div>
        </div>
      );
    };

export default Profile;
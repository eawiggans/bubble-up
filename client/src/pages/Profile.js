import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function Profile() {
  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.user || [];
  console.log(user);

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
  } else {
    return (
      <div className="container mt-5 justify-content-center">
        <div className="row mt-5">
            <img src="https://source.boringavatars.com/beam/150/justin?colors=7dcfff,7aa2f7,bb9af7,b4f9f8,73daca,9ece6a" alt="Profile Pic"></img>
        </div>
      </div>
    );
  }
}

export default Profile;

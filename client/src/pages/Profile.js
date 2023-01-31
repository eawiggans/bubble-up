import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Profile(props) {
    return (
        <div className='container mt-5'>
          <div className='container profile-container m-5 row'>
            <div className='past card col-4 me-2'>
                <div className='row ms-5 mt-1'><h3>Past</h3></div>
            </div>
            <div className='present card col-4 me-2'>
            <div className='row ms-5 mt-1'><h3>Present</h3></div>
            </div>
            <div className='future card col-4'>
            <div className='row ms-5 mt-1'><h3>Future</h3></div>
            </div>
          </div>
        </div>
      );
    };

export default Profile;
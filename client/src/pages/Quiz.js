// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

import MultChoice from '../components/MultChoice/MultChoice'

const Quiz = () => {

//   if (!Auth.loggedIn()) {
//     return <Navigate to="/" />;
//   }

    return (
        <div className='full-dvh'>
            <div className="container col-4 card justify-content-center force-v-center  p-3">
                <div className="row justify-content-center flex-column">
                <MultChoice />
                </div>
            </div>
        </div>

    );

}


export default Quiz;
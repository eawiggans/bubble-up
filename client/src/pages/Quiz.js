// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

import MultChoice from '../components/MultChoice/MultChoice'
import Algorithm from '../components/Algorithm/Landing'

const Quiz = () => {

//   if (!Auth.loggedIn()) {
//     return <Navigate to="/" />;
//   }

    return (
        <div className='full-dvh'>
            <div className="container  card justify-content-center force-v-center ">
                <div className="row justify-content-center flex-column">
                {/* <MultChoice /> */}
                <Algorithm />
                </div>
            </div>
        </div>

    );

}


export default Quiz;
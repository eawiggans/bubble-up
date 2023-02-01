// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

const Quiz = () => {

//   if (!Auth.loggedIn()) {
//     return <Navigate to="/" />;
//   }

const handleFormSubmit = async (event) => {

}
    return (
        <div className='full-dvh'>
            <div className="container col-4 card justify-content-center force-v-center flex-column p-3">
                <div className="row justify-content-center">
                    <form className="container flex-column" onSubmit={handleFormSubmit}></form>
                </div>
            </div>
        </div>
    );

}


export default Quiz;
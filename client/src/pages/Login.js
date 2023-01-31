import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div class="container col-4 card justify-content-center flex-column p-3 mt-5">
        <div class="row justify-content-center">
          <h1>Log In</h1>
        </div>
        <div class="row justify-content-center mb-1">
        <Link to="/signup">Not signed up?</Link>
        </div>
        <form className="container flex-column" onSubmit={handleFormSubmit}>
          <div className="row justify-content-center">
            <input
              placeholder="First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="row justify-content-center">
            <input
              placeholder="Last Name"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="row justify-content-center">
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="row justify-content-center">
            <input
              placeholder="username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="row justify-content-center">
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
          <div className="row justify-content-center">
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  // Logout function
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // if logged in Nav
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (

        // - if questionsDone is less than 5, no blog tab - //

        <div className="container justify-content-space-between">
          <div className="row ps-1">
            <Logo />
            <h1 className="mb-0 mx-3">Bubble Up</h1>
          </div>
          <div className="row flex-row">
            <Link to="/scores">
              <h3 className="mb-0 px-2">Scores</h3>
            </Link>
            <button className="btn btn-secondary mx-2" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      // Logged out Nav
      return (
        <div className="container justify-content-space-between">
          <div className="row ps-1 py-1">
            <Logo />
            <h1 className="mb-0 mx-3 select-none">Bubble Up</h1>
          </div>
          <div className="row flex-row pe-1">
            <Link to="/login">
              <h3 className="mb-0 px-2">Login</h3>
            </Link>
          </div>
        </div>
      );
    }
  }

  return <nav className="navbar p-0">{showNavigation()}</nav>;
}

export default Navbar;

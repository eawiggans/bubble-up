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
        <div className="container justify-content-space-between">
          <Logo />
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
          <Logo />
          <div className="row flex-row">
            <Link to="/signup">
              <h4 className="mb-0 px-2">Signup</h4>
            </Link>
            <Link to="/login">
              <h4 className="mb-0 px-2">Login</h4>
            </Link>
          </div>
        </div>
      );
    }
  }

  return <nav className="navbar">{showNavigation()}</nav>;
}

export default Navbar;

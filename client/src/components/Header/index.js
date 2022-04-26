import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <div>
          <Link className="title" to="/">
            <h1 className='title'>Simple Fix</h1>
          </Link>
          <p className="pHeader">Looking for a residential construction worker?</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="loginBtn" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
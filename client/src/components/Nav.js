import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './AuthFirebase';

const Nav = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://i.postimg.cc/15ZKqvzv/favicon-32x32.png"
      />
     <Auth />
      <div className="navDiv">
        <Link to="/" className="divItem">
          Home
        </Link>
        <Link to="/profile" className="divItem">
          Profile
        </Link>
        <Link to="/store" className="divItem">
          Store
        </Link>
        <Link to="/city" className="divItem">
          City
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

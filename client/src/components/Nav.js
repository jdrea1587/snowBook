import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="title">SnowBook</h1>
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

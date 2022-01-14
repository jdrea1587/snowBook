import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <h4 className="title">SnowBook</h4>
      <div className="navDiv">
        <Link className="divItem" to="/">
          Home
        </Link>
        <Link className="divItem" to="/profile">
          Profile
        </Link>
        <Link className="divItem" to="/store">
          Store
        </Link>
        <Link className="divItem" to="/city">
          City
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

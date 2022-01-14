import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <h4 className="title">SnowBook</h4>
      <div className="navDiv">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/store">Store</Link>
        <Link to="/city">City</Link>
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <span className="sitename">Math Magicians</span>
    <Link to="/">Home</Link>
    <Link to="/calculations">Calculator</Link>
    <Link to="/quotes">Quotes</Link>
  </nav>
);

export default Navbar;

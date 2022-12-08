import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="container">
    <h1>Maths Magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="has-border">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

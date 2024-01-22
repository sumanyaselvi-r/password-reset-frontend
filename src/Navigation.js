// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forgot-password">Forgot Password</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

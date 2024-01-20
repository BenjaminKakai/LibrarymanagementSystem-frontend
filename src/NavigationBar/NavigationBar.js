// src/NavigationBar/NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Importing the CSS file

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/catalog" className="nav-link">Catalog</Link>
      <Link to="/issues" className="nav-link">Issues</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>
      {/* Additional links can be added here */}
    </nav>
  );
};

export default NavigationBar;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css'; // Make sure the path matches your CSS file's location

const NavigationBar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for an authentication token and the user's role
    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');
    setIsAuthenticated(!!authToken); // Convert authToken presence to boolean
    setIsAdmin(userRole === 'admin');
  }, []);

  const handleLogout = () => {
    // Clear authentication token and user role from local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    // Update state to reflect that the user is no longer authenticated or an admin
    setIsAuthenticated(false);
    setIsAdmin(false);
    // Navigate to the home page
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/books" className="nav-link">Catalog</Link>
      {isAuthenticated && <Link to="/profile" className="nav-link">Profile</Link>}
      {isAdmin && <Link to="/admin" className="nav-link">Admin Dashboard</Link>}
      <div className="nav-right"> {/* Wrapper to push the logout button to the far right */}
        {isAuthenticated ? (
          <button onClick={handleLogout} className="nav-link-button">Logout</button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

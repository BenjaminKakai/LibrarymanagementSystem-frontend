// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(''); // State for storing authentication errors

  // Async login function
  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        // If the response is not ok, throw an error with the response status
        throw new Error(`Login failed: ${response.statusText}`);
      }
      const userData = await response.json();
      setCurrentUser(userData); // Set user data on successful login
      localStorage.setItem('authToken', userData.token); // Simulate auth token storage
      setAuthError(''); // Reset any previous error
    } catch (error) {
      // Handle errors, such as network issues or JSON parsing problems
      console.error('Login error:', error);
      setAuthError(error.message); // Set authentication error to display in UI
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken'); // Clear auth token storage
    setAuthError(''); // Clear any authentication error
  };

  const value = {
    currentUser,
    login,
    logout,
    authError // Provide the auth error for consumption in components
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

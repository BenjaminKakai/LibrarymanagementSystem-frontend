import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState(''); // State for managing error messages

  useEffect(() => {
    const fetchUserDetails = async () => {
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await fetch('http://localhost:8081/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${authToken}`, // Adjust according to your auth method
          },
        });

        if (!response.ok) {
          // If the response is not ok, throw an error to catch and display it
          const errorText = await response.text();
          throw new Error(`Failed to fetch user details: ${errorText || response.statusText}`);
        }

        const data = await response.json();
        setUserDetails(data);
        setError(''); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError(error.message); // Set error message to display in UI
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      {error && <div className="error-message">Error: {error}</div>} {/* Display error message if present */}
      {userDetails.username && <p>Username: {userDetails.username}</p>}
      {userDetails.email && <p>Email: {userDetails.email}</p>}
      {/* Display additional user details here */}
    </div>
  );
};

export default UserProfile;

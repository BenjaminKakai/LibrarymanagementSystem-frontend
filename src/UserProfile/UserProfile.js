// src/UserProfile/UserProfile.js

import React from 'react';
import './UserProfile.css'; // Importing the CSS file

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <p>Username: [User's Username]</p>
      <p>Email: [User's Email]</p>
      {/* Additional user information and settings here */}
    </div>
  );
};

export default UserProfile;

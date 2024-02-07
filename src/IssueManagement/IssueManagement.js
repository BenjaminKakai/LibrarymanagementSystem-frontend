// src/IssueManagement/IssueManagement.js

import React, { useState } from 'react';
import './IssueManagement.css'; // Make sure this path matches your CSS file location

const IssueManagement = () => {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentReadId, setCurrentReadId] = useState('');
  const [error, setError] = useState(''); // State to store error messages
  const [successMessage, setSuccessMessage] = useState(''); // State to store success messages

  const handleAssignBook = async (event) => {
    event.preventDefault();
    setError(''); // Reset error messages before new operation
    setSuccessMessage(''); // Reset success messages before new operation
    try {
      const authToken = localStorage.getItem('authToken'); // Assume auth token is stored in local storage
      const response = await fetch('http://localhost:8081/api/currentReads/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` // Ensure this matches your authentication method
        },
        body: JSON.stringify({ userId, bookId, startDate, endDate }),
      });

      if (!response.ok) {
        throw new Error('Book assignment failed: ' + response.statusText);
      }

      const data = await response.json();
      console.log('Book assigned successfully:', data);
      setSuccessMessage('Book assigned successfully.'); // Set success message
      // Optionally reset form fields here if needed
    } catch (error) {
      console.error('An error occurred:', error);
      setError(error.message); // Set error message to display in UI
    }
  };

  const handleReturnBook = async (event) => {
    event.preventDefault();
    setError(''); // Reset error messages before new operation
    setSuccessMessage(''); // Reset success messages before new operation
    try {
      const authToken = localStorage.getItem('authToken'); // Assume auth token is stored in local storage
      const response = await fetch(`http://localhost:8081/api/currentReads/return/${currentReadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authToken}` // Ensure this matches your authentication method
        },
      });

      if (!response.ok) {
        throw new Error('Returning book failed: ' + response.statusText);
      }

      console.log('Book returned successfully');
      setSuccessMessage('Book returned successfully.'); // Set success message
      // Optionally reset form fields here if needed
    } catch (error) {
      console.error('An error occurred:', error);
      setError(error.message); // Set error message to display in UI
    }
  };

  return (
    <div className="issue-management-container">
      <h1>Issue Management</h1>
      {error && <div className="error-message">Error: {error}</div>} // Display error message if any
      {successMessage && <div className="success-message">{successMessage}</div>} // Display success message if any
      <form onSubmit={handleAssignBook}>
        <h3>Assign Book to User</h3>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="Book ID" />
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        <button type="submit">Assign Book</button>
      </form>

      <form onSubmit={handleReturnBook}>
        <h3>Return Book</h3>
        <input type="text" value={currentReadId} onChange={(e) => setCurrentReadId(e.target.value)} placeholder="Current Read ID" />
        <button type="submit">Return Book</button>
      </form>
    </div>
  );
};

export default IssueManagement;

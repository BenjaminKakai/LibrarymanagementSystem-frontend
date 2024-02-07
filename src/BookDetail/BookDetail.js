// src/BookDetail/BookDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css'; // Ensure this path matches the location of your CSS file

const BookDetail = () => {
  const { id } = useParams(); // Extract the book ID from the URL
  const [book, setBook] = useState(null); // State to hold book details
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(''); // State to store any error messages

  useEffect(() => {
    setLoading(true); // Set loading to true when starting to fetch
    fetch(`http://localhost:8081/api/books/${id}`)
      .then(response => {
        if (!response.ok) {
          // Check if response is not ok and throw error
          throw new Error('Failed to fetch book details: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setBook(data); // Set the fetched data to the book state
        setError(''); // Clear any previous errors
      })
      .catch(error => {
        console.error("There was an error fetching the book details:", error);
        setError(error.message); // Set error message to display in UI
      })
      .finally(() => setLoading(false)); // Set loading to false when fetch is complete
  }, [id]); // Effect dependency on id ensures it runs when id changes

  // Display loading text until the fetch operation is complete
  if (loading) return <div>Loading...</div>;

  // Display error message if an error occurred during fetch
  if (error) return <div className="error-message">Error: {error}</div>;

  // Render book details
  return (
    <div className="book-detail-container">
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      {/* You can add more details here as needed */}
    </div>
  );
};

export default BookDetail;

// src/BookCatalog/BookCatalog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookCatalog.css'; // Adjust the path according to your file structure

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(''); // State to store error messages

  useEffect(() => {
    fetch('http://localhost:8081/api/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch books: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
        setError(''); /* Clear any previous errors on successful fetch */
      })
      .catch(error => {
        console.error("There was an error fetching the books:", error);
        setError(error.message); /* Set error state to display in the UI */
      });
  }, []);

  return (
    <div className="book-catalog">
      <h2>Book Catalog</h2>
      {error && <div className="error-message">Error: {error}</div>} {/* Display error message if any */}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.name}</Link> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCatalog;

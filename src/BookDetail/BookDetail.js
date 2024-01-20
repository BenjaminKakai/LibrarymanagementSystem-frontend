// src/BookDetail/BookDetail.js

import React from 'react';
import './BookDetail.css'; // Importing the CSS file

const BookDetail = () => {
  return (
    <div className="book-detail-container">
      <h1>Book Title</h1>
      <p>Author: [Author Name]</p>
      <p>ISBN: [ISBN Number]</p>
      {/* Additional book details here */}
    </div>
  );
};

export default BookDetail;

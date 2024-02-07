// src/AdminDashboard/AdminDashboard.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth if needed

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Use the useAuth hook to access currentUser

  // Authentication check (simplified version)
  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      navigate('/login'); // Redirect non-authenticated or non-admin users
    }
    // Assuming you have authenticated endpoints that only allow admin access
    const fetchResources = async () => {
      try {
        const booksResponse = await fetch('http://localhost:8081/api/books', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        const booksData = await booksResponse.json();
        setBooks(booksData);

        const usersResponse = await fetch('http://localhost:8081/api/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      }
    };

    fetchResources();
  }, [navigate, currentUser]);

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Books Management</h2>
        {/* List books and provide management options like add, edit, delete */}
        {books.map(book => (
          <div key={book.id}>{book.name} - {book.author}</div>
        ))}
      </section>
      <section>
        <h2>Users Management</h2>
        {/* List users and provide management options like edit roles, delete users */}
        {users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}
      </section>
    </div>
  );
};

export default AdminDashboard;

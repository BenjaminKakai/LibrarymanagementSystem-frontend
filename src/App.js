import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './NavigationBar/NavigationBar';
import HomePage from './HomePage/HomePage';
import BookCatalog from './BookCatalog/BookCatalog';
import BookDetail from './BookDetail/BookDetail';
import IssueManagement from './IssueManagement/IssueManagement';
import Login from './Login/Login';
import Register from './Register/Register';
import UserProfile from './UserProfile/UserProfile';
import AdminDashboard from './AdminDashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookCatalog />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/issues" element={<IssueManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

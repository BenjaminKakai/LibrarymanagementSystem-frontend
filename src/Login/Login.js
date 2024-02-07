import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store login error messages
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message on new submission

    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        // Instead of throwing an error, set the error state to display the message
        const errorText = await response.text(); // Attempt to read the error message from the response
        setError(`Login failed: ${errorText || response.statusText}`);
        return; // Exit the function early to avoid further execution
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Assuming the token is returned in the data object
      localStorage.setItem('authToken', data.token);

      // Redirect to dashboard or another route after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('An error occurred:', error);
      // Set a generic error message if the catch block is executed
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {error && <div className="login-error">{error}</div>} {/* Display error message if error state is set */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

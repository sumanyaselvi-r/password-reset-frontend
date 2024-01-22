// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add login logic here (e.g., API call)
    console.log('Login submitted:', formData);
  };
  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/api/login', formData);
      
      setFormData({
        username: '',
        
        password: '',})
      
    } catch (error) {
      console.error('Error logging in:', error);
      
      setErrors('Invalid username or password');
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
  
    <div className='container' >
      <h2>Login</h2>
    
      <form onSubmit={handleSubmit} className='formcontainer'>
        
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='username'
            required
          />
          {errors.username && <span className="error">{errors.username}</span>}
       
        <br />
        
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Password'
          />
          {errors.password && <span className="error">{errors.password}</span>}
       
        <br />
        <button type="submit" onClick={handleLogin}>Login</button>
        
      </form>
      <p>
        Don't have an account? <Link to="/">SignUp</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Successful"
      >
        <h2>LoginSuccessful!</h2>
        <p>Your account has been created successfully.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
    </>
  );
};

export default Login;

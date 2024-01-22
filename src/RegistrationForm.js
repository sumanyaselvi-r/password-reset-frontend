// src/Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add registration logic here (e.g., API call)
    console.log('Registration submitted:', formData);
  };
  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      console.log('Registration successful!');
      setModalIsOpen(true);
      setFormData({
        username: '',
        email: '',
        password: '',
       
      });
      


    } catch (error) {
      console.error('Error registering:', error);
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className='formcontainer'>
      <div className="mb-3">
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder='username'
            onChange={handleChange}
            required
          />
          {errors.username && <span className="error">{errors.username}</span>}
      
        <br />
      
        
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='email'
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
       
        <br />
     
   
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
      
       
     
        <button type="submit" onClick={handleRegister}>Signup</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Successful"
      >
        <h2>Registration Successful!</h2>
        <p>Your account has been created successfully.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Registration;

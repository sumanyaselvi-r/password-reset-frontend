// ResetPassword.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      if (password !== confirmPassword) {
        setMessage('Passwords do not match');
        return;
      }

      const response = await axios.post(`http://localhost:5000/api/reset-password/:${token}`, {
        password,
        confirmPassword,
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to reset password');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label>
        New Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;

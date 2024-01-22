// src/App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Registration from './RegistrationForm';
import Login from './Login';
import ForgotPassword from './ForgetPassword';
import ResetPassword from './RestPassword';

const App = () => {
  return (
    
      <div>
      
        
        <Routes>
          <Route path="/" element={<Registration/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:token" element={<ResetPassword/>}/>
          </Routes>
      </div>
    
  );
};

export default App;

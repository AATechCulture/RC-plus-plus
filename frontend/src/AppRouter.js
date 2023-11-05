// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/logins/login-signup';
import Homepage from './components/Home/Homepage'; // Import Homepage component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Homepage />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter; // Export AppRouter component

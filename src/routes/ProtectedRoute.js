import React from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken } from '../JWT_Token/validateToken';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const validation = token ? validateToken(token) : { valid: false };

  if (!validation.valid) {
    console.error(validation.error); // Optional: Log error for debugging
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

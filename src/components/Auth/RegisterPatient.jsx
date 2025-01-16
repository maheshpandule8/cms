import React, { useState } from 'react';
import authService from '../../services/authService';

const RegisterPatient = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register({ ...formData, role: 'PATIENT' });
      alert('Patient registered successfully!');
    } catch (error) {
      alert('Error registering patient');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Register Patient</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPatient;

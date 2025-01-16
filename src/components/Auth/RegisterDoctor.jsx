import React, { useState } from 'react';
import authService from '../../services/authService';

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    specialization: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register({ ...formData, role: 'DOCTOR' });
      alert('Doctor registered successfully!');
    } catch (error) {
      alert('Error registering doctor');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Register Doctor</h2>
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
      <input
        type="text"
        placeholder="Specialization"
        value={formData.specialization}
        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterDoctor;

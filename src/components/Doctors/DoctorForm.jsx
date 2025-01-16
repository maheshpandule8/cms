import React, { useState } from 'react';
import doctorService from '../../services/doctorService';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    experience: '',
    clinicAddress: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await doctorService.addDoctor(formData);
      alert('Doctor added successfully!');
    } catch (error) {
      alert('Error adding doctor');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="doctor-form">
      <h2>Add Doctor</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Specialization"
        value={formData.specialization}
        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
      />
      <input
        type="text"
        placeholder="Experience (in years)"
        value={formData.experience}
        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
      />
      <input
        type="text"
        placeholder="Clinic Address"
        value={formData.clinicAddress}
        onChange={(e) => setFormData({ ...formData, clinicAddress: e.target.value })}
      />
      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default DoctorForm;

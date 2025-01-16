import React, { useState } from 'react';
import appointmentService from '../../services/appointmentService';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await appointmentService.createAppointment(formData);
      alert('Appointment created successfully!');
    } catch (error) {
      alert('Error creating appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Book Appointment</h2>
      <input
        type="text"
        placeholder="Patient Name"
        value={formData.patientName}
        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Doctor Name"
        value={formData.doctorName}
        onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      />
      <textarea
        placeholder="Reason for Appointment"
        value={formData.reason}
        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
      ></textarea>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;

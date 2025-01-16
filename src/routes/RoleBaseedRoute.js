import React from 'react';
import { Navigate } from 'react-router-dom';
import PatientDashboard from '../pages/PatientDashboard';
import DoctorDashboard from '../pages/DoctorDashboard';
import NurseDashboard from '../pages/NurseDashboard';


const RoleBasedRoutes = ({ role }) => {
  switch (role) {
    case 'PATIENT':
      return <PatientDashboard />;
    case 'NURSE':
      return <NurseDashboard />;
    case 'DOCTOR':
      return <DoctorDashboard />;
    default:
      return <Navigate to="/login" />;
      
  }
};

export default RoleBasedRoutes;

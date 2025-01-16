 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
 import Login from './components/Auth/Login';
import DoctorForm from './components/Doctors/DoctorForm';

import RegisterDoctor from './components/Auth/RegisterDoctor';
import { useSelector } from 'react-redux';
import AppointmentForm from './components/Appointments/AppoinrmentForm';
import Register from './components/Auth/Register';

const App = () => {
  const { user } = useSelector((state) => state.auth); // Ensure this is used inside a Redux context.

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />

          <Route path="/register-doctor" element={<RegisterDoctor />} />

          {/* Protected Routes */}
          {user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/appointment" element={<AppointmentForm/>} />
              <Route path="/doctor-form" element={<DoctorForm />} />
            </>
          )}

          {/* Catch-all Route */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './routes/ProtectedRoute';

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard/>
//           </ProtectedRoute>
          
//         }
//       />
//     </Routes>
//   </Router>
// );

// export default App;


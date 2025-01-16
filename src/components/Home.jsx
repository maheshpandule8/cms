import React from 'react';
import { useSelector } from 'react-redux';
import RoleBasedRoutes from '../routes/RoleBaseedRoute';


const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home">
      {user ? (
        <RoleBasedRoutes role={user.role} />
      ) : (
        <p>Please log in to access the system.</p>
      
      )}
    </div>
  );
};

export default Home;

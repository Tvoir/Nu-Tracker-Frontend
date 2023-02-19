import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import { useLogout } from '../hooks/useLogout';
import '../assets/style/navbar.css';

const DashNavbar = () => {
  const { user, isLoading } = useUserContext();
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  if (isLoading) {
    return null;
  }

  return (
    <nav className='navbar'>
      <div className="brand">
        <Link to="/">Nu-Tracker</Link>
      </div>
      {user && (
        <>
          <div className="user">
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/add-entry">Add Entry</Link>
            {/* <Link to="/view-entry">View Entries</Link> */}
          </div>
        </>
      )}
    </nav>
  );
};

export default DashNavbar;



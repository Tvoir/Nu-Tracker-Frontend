import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';

const Home = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  // Redirect to dashboard if user is logged in
  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome to Nu-Tracker</h1>
      <div>
        <p>Please</p>
        <Link to='/login'>Log In</Link>
        <p>or</p>
        <Link to='/signup'>Sign Up</Link>
        <p>to use the app.</p>
      </div>
    </div>
  );
};

export default Home;


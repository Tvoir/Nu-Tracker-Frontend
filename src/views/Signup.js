import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import '../assets/style/signup.css';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const { isLoading, errorMessage, handleSignup } = useSignup();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formValues);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className='signup'>
          <label className='space2' htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='signup'>
          <label className='space2' htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='signup'>
          <label className='space2' htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='signup'>
          <label className='space2' htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formValues.confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <div id="container2">
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Signup'}
        </button>
        </div>
      </form>
      <p className='txt'>
        Already have an account? <Link className='link'to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;


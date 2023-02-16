import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import '../assets/style/login.css';

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const { isLoading, errorMessage, handleLogin } = useLogin();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formValues);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='login'>
          <label className='space' htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='login'>
          <label className='space' htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <div id="container">
        <button id="container" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        </div>
      </form>
      <p className='txt'>
        Don't have an account yet? <Link className='link' to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;

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
    <div className='home'>
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
    <img src='https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' alt='login page'/>
    </div>
  );
};

export default Login;

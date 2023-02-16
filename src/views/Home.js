import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/home.css';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Calorie Tracker App</h1>
      <div className='link'>
        <p>Please</p>
        <Link className='link' to='/login'>Log In</Link>
        <p>or</p>
        <Link className='link'to='/signup'>Sign Up</Link>
        <p>to use the app.</p>
      </div>
      <img src='https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80' alt="home page"></img>
    </div>
  );
};

export default Home;


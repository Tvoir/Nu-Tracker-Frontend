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
      <div>
      <h1 className='title'>About Us </h1>
        <h2>Nu-Tracker.</h2>
      {/* <br /> */}
        <p className='body'>We want to support you on your journey for tracking a healthy diet and healthy lifestyle! As a startup, we believe the best way to hold one accountable on their healthy journey is to allow them to see their food broken down into different components. Everyone's end goal is different and with this app, you will be able to envision yourself at that goal. Our app stores your data and makes it simple to track your exact input for the day. So, start today and achieve your goal!   </p>
      </div>
    </div>
    
  );
};

export default Home;


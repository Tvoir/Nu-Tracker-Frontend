import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD:frontend/src/index.js
import './css/calendar.css';
import './css/about.css'
import reportWebVitals from './reportWebVitals';
=======
import { CalorieProvider } from './context/calorieContext';
import { UserContextProvider } from './context/userContext';
>>>>>>> 6fa6931f9f64bf6bb3a6d54b06b79e5070eb8e40:src/index.js

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CalorieProvider>
        <App />
      </CalorieProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

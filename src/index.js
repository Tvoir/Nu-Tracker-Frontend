import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalorieProvider } from './context/calorieContext';
import { UserProvider } from './context/userContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CalorieProvider>
        <App />
      </CalorieProvider>
    </UserProvider>
  </React.StrictMode>
);
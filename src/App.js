import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import { useLogin } from './hooks/useLogin';
// import { useLogout } from './hooks/useLogout';
import { useSignup } from './hooks/useSignup';

function App() {
  const { handleLogin, isLoading: isLoginLoading } = useLogin();
  // const { handleLogout } = useLogout();
  const { handleSignup, isLoading: isSignupLoading } = useSignup();

  return (
    <Router>
      {/* <Navbar handleLogout={handleLogout} /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login handleLogin={handleLogin} isLoading={isLoginLoading} />} />
        <Route path="/signup" element={<Signup handleSignup={handleSignup} isLoading={isSignupLoading} />} />
      </Routes>
    </Router>
  );
}

export default App;


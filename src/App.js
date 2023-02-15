import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUserContext } from './contexts/userContext';
import Signup from './components/Signup';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

function App() {
  const { user } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page redirects to login if user is not authenticated */}
        {/* <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} /> */}
        
        {/* Login and signup routes */}
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

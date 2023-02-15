import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { CalorieContext } from '../contexts/calorieContext';

const useLogout = () => {
  const { setUser } = useContext(UserContext);
  const { setEntries } = useContext(CalorieContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    setEntries([]);
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return logout;
};

export default useLogout;

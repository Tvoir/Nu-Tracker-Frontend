import { useContext, useState } from 'react';
import { useUserContext } from './useUserContext';
import axios from 'axios';

export const useLogin = () => {
  const [user, setUser] = useContext(useUserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/login', { username, password });
      setUser({
        ...user,
        loggedIn: true,
        token: response.data.token
      });
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login };
};

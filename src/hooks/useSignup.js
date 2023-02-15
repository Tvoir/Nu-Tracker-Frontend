import { useState } from 'react';
import axios from 'axios';
import { useUserContext } from './useUserContext';

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserData } = useUserContext();

  const signup = async (username, email, password) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.post('localhost:5000/signup', {
        username,
        email,
        password,
      });

      setUserData(res.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
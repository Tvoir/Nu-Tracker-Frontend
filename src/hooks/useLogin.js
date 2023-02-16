import { useContext } from 'react';
import { useUserContext } from './useUserContext';

export const useLogin = () => {
  const { setUserData } = useUserContext();

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setUserData(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLogin };
};


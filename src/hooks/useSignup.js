import { useState } from 'react';
import axios from 'axios';
import { useUserContext } from './useUserContext';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { setUserData } = useUserContext();

  const handleSignup = async (formValues) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { username, email, password } = formValues;
      const res = await axios.post('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      setUserData(res.data);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    errorMessage,
    handleSignup,
  };
};

import { useContext } from 'react';
import { useUserContext } from './useUserContext';
import axios from 'axios';

export const useLogin = () => {
  const { setUserData } = useUserContext();

  const handleLogin = async (formValues) => {
    console.log(formValues)
    try {
      const response = await axios.post('http://localhost:5000/login', formValues);
      const data = response.data;
      if (response.status === 200) {
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



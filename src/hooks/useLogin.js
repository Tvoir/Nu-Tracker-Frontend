import { useContext } from 'react';
import { useUserContext } from './useUserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { setUserData } = useUserContext();
  const navigate = useNavigate()

  const handleLogin = async (formValues) => {
    console.log(formValues)
    try {
      const response = await axios.post('http://localhost:5000/login', formValues);
      const data = response.data;
      if (response.status === 200) {
        setUserData(data);
        navigate('/dashboard')

      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLogin };
};



import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useUserContext = () => {
  const { state, dispatch } = useContext(UserContext);
  const user = state.userData

  const setUserData = (userData) => {
    localStorage.setItem('access_token', userData.access_token);
    console.log(localStorage.setItem('access_token', userData.access_token))
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch({ type: 'SET_USER_DATA', payload: userData });
  };

  const setLoading = (isLoading) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return { user, setUserData, setLoading, setError };
};

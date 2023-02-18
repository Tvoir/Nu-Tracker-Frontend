import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useUserContext = () => {
  const { state, dispatch } = useContext(UserContext);
  const user = state.userData;

  const setUserData = (userData) => {
    if (userData) {
      localStorage.setItem('access_token', userData.access_token);
      localStorage.setItem('user', JSON.stringify(userData));
    }
    dispatch({ type: 'SET_USER_DATA', payload: userData });
  };
  

  const setLoading = (isLoading) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    dispatch({ type: 'SET_USER_DATA', payload: null });
  };

  return { user, setUserData, setLoading, setError, logout };
};

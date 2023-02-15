import { useContext } from 'react';
import { userContext } from '../context/userContext';

export const useUserContext = () => {
  const { user, login, logout } = useContext(userContext);

  return { user, login, logout };
};
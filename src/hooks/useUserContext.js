import { useContext } from 'react';
import { UserContext } from './UserContext';

export const useUserContext = () => {
  const { user, login, logout } = useContext(UserContext);

  if(!context) {
    throw Error('useUserContext must be used inside an UserContextProvider')
  }

  return { user, login, logout };
};
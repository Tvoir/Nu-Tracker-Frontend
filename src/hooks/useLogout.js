import { useCallback, useEffect } from 'react';
import { useUserContext } from './useUserContext';
import { useCalorieContext } from './useCalorieContext';

export const useLogout = () => {
  const { user, setUserData } = useUserContext();
  const { clearEntries } = useCalorieContext();

  const logout = useCallback(async () => {
    setUserData(null);
    clearEntries();
    if (user === null) {
      localStorage.setItem('access_token', '');
    }
  }, [setUserData, clearEntries, user]);

  useEffect(() => {
    logout();
  }, [logout]);

  return logout;
};



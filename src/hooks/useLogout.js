import { useCallback, useEffect } from 'react';
import { useUserContext } from './useUserContext';
import { useCalorieContext } from './useCalorieContext';

export const useLogout = () => {
  const { user, setUserData } = useUserContext();
  const { clearEntries } = useCalorieContext();

  const logout = useCallback(async () => {
    setUserData(null);
    clearEntries();
    localStorage.clear();
  }, [setUserData, clearEntries]);

  useEffect(() => {
    if (user === null) {
      logout();
    }
  }, [user, logout]);

  return logout;
};


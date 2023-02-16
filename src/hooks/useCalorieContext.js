import { useContext } from 'react';
import { CalorieContext } from '../contexts/calorieContext';

export const useCalorieContext = () => {
  const { state, dispatch } = useContext(CalorieContext);

  const getEntries = (userId) => {
    dispatch({ type: 'SET_LOADING' });

    fetch(`/api/entries/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'GET_ENTRIES', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const addEntry = (userId, entry) => {
    dispatch({ type: 'SET_LOADING' });

    fetch(`/api/entries/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'ADD_ENTRY', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const deleteEntry = (userId, entryId) => {
    dispatch({ type: 'SET_LOADING' });

    fetch(`/api/entries/${userId}/${entryId}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch({ type: 'DELETE_ENTRY', payload: entryId });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  return {
    entries: state.entries,
    error: state.error,
    isLoading: state.isLoading,
    getEntries,
    addEntry,
    deleteEntry,
  };
};

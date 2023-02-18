import { useContext } from 'react';
import axios from 'axios';
import { CalorieContext } from '../context/calorieContext';

export const useCalorieContext = () => {
  const { state, dispatch } = useContext(CalorieContext);

  const getEntries = (userId) => {
    dispatch({ type: 'SET_LOADING' });

    const url = userId ? `http://localhost:5000/diary/${userId}` : 'http://localhost:5000/diary';
    axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((response) => {
        dispatch({ type: 'GET_ENTRIES', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const addEntry = (userId, entry) => {
    dispatch({ type: 'SET_LOADING' });

    axios.post(`localhost:5000/diary`, entry, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((response) => {
        dispatch({ type: 'ADD_ENTRY', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const deleteEntry = (userId, entryId) => {
    dispatch({ type: 'SET_LOADING' });

    axios.delete(`localhost:5000/diary/${entryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
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

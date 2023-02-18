import { useContext } from 'react';
import axios from 'axios';
import { CalorieContext } from '../context/calorieContext';

export const useCalorieContext = () => {
  const { state, dispatch } = useContext(CalorieContext);

  const getEntries = async (userId) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get(`http://localhost:5000/diary/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
      });
      const data = response.data;
      console.log(data);
      dispatch({ type: 'GET_ENTRIES', payload: data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const addEntry = (userId, entry) => {
    dispatch({ type: 'SET_LOADING' });

    axios.post(`http://localhost:5000/diary`, entry, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
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

    axios.delete(`http://localhost:5000/diary/${entryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
    })
      .then(() => {
        dispatch({ type: 'DELETE_ENTRY', payload: entryId });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const clearEntries = () => {
    dispatch({ type: 'CLEAR_ENTRIES' });
  };

  return {
    entries: state.entries,
    error: state.error,
    isLoading: state.isLoading,
    getEntries,
    addEntry,
    deleteEntry,
    clearEntries,
  };
};
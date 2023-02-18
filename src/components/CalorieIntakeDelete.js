import React from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';

const CalorieIntakeDelete = ({ id }) => {
  const { deleteEntry } = useCalorieContext();

  const handleDelete = () => {
    deleteEntry(id);
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default CalorieIntakeDelete;

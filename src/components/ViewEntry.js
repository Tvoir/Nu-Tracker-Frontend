import React, { useEffect, useMemo } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';

const ViewEntry = () => {
  const { entries, getEntries, deleteEntry } = useCalorieContext();

  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (storedUser) {
      getEntries(storedUser.id);
    }
  }, [getEntries, storedUser]);

  const handleDelete = useMemo(() => (entryId) => {
    if (storedUser) {
      deleteEntry(storedUser.id, entryId);
    }
  }, [deleteEntry, storedUser]);

  return (
    <div>
      <h1>View Entries</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h2>{entry.meal}</h2>
          <p>Calories: {entry.calories}</p>
          <p>Date: {entry.date}</p>
          <button onClick={() => handleDelete(entry.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ViewEntry;
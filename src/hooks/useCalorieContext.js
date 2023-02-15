import { useContext } from 'react';
import { CalorieContext } from './calorieContext';

const useCalorieContext = () => {
  const { entries, setEntries } = useContext(CalorieContext);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const updateEntry = (entry) => {
    const updatedEntries = entries.map((e) => (e.id === entry.id ? entry : e));
    setEntries(updatedEntries);
  };

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((e) => e.id !== id);
    setEntries(filteredEntries);
  };

  return {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
  };
};

export default useCalorieContext;

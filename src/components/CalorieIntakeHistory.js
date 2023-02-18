import React, { useEffect, useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
// import { useUserContext } from '../hooks/useUserContext';

const CalorieIntakeHistory = () => {
  const { getEntries, entries } = useCalorieContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getEntries(userId);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  return (
    <div>
      <h2>Calorie Intake History</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Food</th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Protein</th>
              <th>Carbohydrates</th>
            </tr>
          </thead>
          <tbody>
            {entries.slice(-10).map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.food}</td>
                <td>{entry.calories}</td>
                <td>{entry.fat}</td>
                <td>{entry.protein}</td>
                <td>{entry.carbohydrates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CalorieIntakeHistory;
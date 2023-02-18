import React, { useEffect, useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Dashboard = () => {
  const { getEntries, entries } = useCalorieContext();
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    if (entries) {
      const data = entries.map((entry) => ({
        name: entry.date,
        calories: entry.calories,
      }));
      setGraphData(data);
    }
  }, [entries]);

  return (
    <div>
      <h2>Calorie Intake History</h2>
      <LineChart
        width={800}
        height={400}
        data={graphData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
};

export default Dashboard;

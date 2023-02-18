import React, { useEffect, useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
import { useUserContext } from '../hooks/useUserContext';
import CalorieIntakeHistory from '../components/CalorieIntakeHistory';
import CalorieIntakeDelete from '../components/CalorieIntakeDelete';
import CalorieIntakeForm from '../components/CalorieIntakeForm';
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
    console.log('Fetching entries')
    const userId = localStorage.getItem('userId');
    console.log('userId:', userId)
    getEntries(userId);
  }, []);

  useEffect(() => {
    console.log('Entries changed:', entries)
    if (entries && entries.length) {
      const data = entries.map((entry) => ({
        name: entry.date,
        calories: entry.calories,
      }));
      setGraphData(data);
    }
  }, [entries]);

  return (
    <div>
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
      <div>
        <CalorieIntakeHistory/>
        <CalorieIntakeForm/>
        <CalorieIntakeDelete/>
      </div>
    </div>
  );
};

export default Dashboard;
import { useContext } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartStats = () => {
  const { calorieData } = useContext(useCalorieContext);

  const processedData = processCalorieData(calorieData);

  return (
    <div>
      <h2>Calorie Intake Stats</h2>
      <LineChart width={500} height={300} data={processedData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default ChartStats;
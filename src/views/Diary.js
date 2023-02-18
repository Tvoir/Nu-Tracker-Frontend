import React from 'react';
import CalorieIntakeForm from '../components/CalorieIntakeForm';
import CalorieIntakeDelete from '../components/CalorieIntakeDelete';

const Diary = () => {
  return (
    <div>
      <h2>Calorie Intake Diary</h2>
      <CalorieIntakeForm />
      <CalorieIntakeDelete />
    </div>
  );
};

export default Diary;

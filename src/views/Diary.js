import React from 'react';
import CalorieIntakeForm from '../components/AddEntry';
import CalorieIntakeDelete from '../components/ViewEntry';

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

import React, { useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';

const CalorieIntakeForm = () => {
  const { addEntry } = useCalorieContext();
  const [formData, setFormData] = useState({
    date: '',
    food: '',
    calories: '',
    fat: '',
    protein: '',
    carbohydrates: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    addEntry(userId, formData);
    setFormData({
      date: '',
      food: '',
      calories: '',
      fat: '',
      protein: '',
      carbohydrates: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h2>Add Calorie Intake Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="food">Food:</label>
          <input
            type="text"
            id="food"
            name="food"
            value={formData.food}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fat">Fat:</label>
          <input
            type="number"
            id="fat"
            name="fat"
            value={formData.fat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="protein">Protein:</label>
          <input
            type="number"
            id="protein"
            name="protein"
            value={formData.protein}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="carbohydrates">Carbohydrates:</label>
          <input
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default CalorieIntakeForm
// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Table from "react-bootstrap/Table";

// export default function AddMacro() {
//     return (
//       <Table>
//         <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Calories</th>
//                     <th>Protein</th>
//                     <th>Carbs</th>
//                     <th>Fat</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td><Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter food name" />
//       </Form.Group></Form></td>
//       <td><Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter food name" />
//       </Form.Group></Form></td>
//       <td><Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter food name" />
//       </Form.Group></Form></td>
//       <td><Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter food name" />
//       </Form.Group></Form></td>
//       <td><Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter food name" />
//       </Form.Group></Form></td>
//       <td><Button variant="primary" type="submit">
//         Submit
//       </Button></td>
//               </tr>
              
//             </tbody>
//     </Table>
//     )
// }
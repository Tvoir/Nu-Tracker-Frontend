import React, { useState } from 'react';
import { useCalorieContext } from '../hooks/useCalorieContext';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";

const AddEntry = () => {
  const { addEntry } = useCalorieContext();
  const navigate = useNavigate()
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
    navigate('/dashboard')
  };

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <Form onSubmit={handleSubmit}>
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Calories</th>
          <th>Protein</th>
          <th>Carbs</th>
          <th>Fat</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group className="mb-3" controlId="date"> 
                <Form.Control name="date" type="date" value={formData.name} onChange={handleChange}/></Form.Group></td>
                <td>
              <Form.Group className="mb-3" controlId="food"> 
                <Form.Control name="food" type="text" value={formData.name} onChange={handleChange}/></Form.Group></td>
            <td>
              <Form.Group className="mb-3" controlId="calories"> 
                <Form.Control name="calories" type="number" value={formData.calories} onChange={handleChange}/></Form.Group></td>
            <td>
              <Form.Group className="mb-3" controlId="protein"> 
                <Form.Control name="protein" type="number" value={formData.protein} onChange={handleChange}/></Form.Group></td>
            <td>
              <Form.Group className="mb-3" controlId="fat"> 
                <Form.Control name="fat" type="number" value={formData.fat} onChange={handleChange}/></Form.Group></td>
            <td>
              <Form.Group className="mb-3" controlId="carbohydrates">
                <Form.Control name="carbohydrates" type="number" value={formData.carbohydrates} onChange={handleChange}/></Form.Group></td>
            <td><Button className="mb-3" variant="primary" type="submit">Submit</Button></td>
            </tr>
          </tbody>
  </Table>
  </Form>
  );
};

export default AddEntry
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";
import '../assets/style/dashboard.css';


const Diary = () => {
    return (
      <div className='home'>
      <Table>
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter food name" />
      </Form.Group></Form></td>
      <td><button type="submit">
        Submit
      </button></td>
              </tr>
              
            </tbody>
    </Table>
    </div>
    )
}

export default Diary;
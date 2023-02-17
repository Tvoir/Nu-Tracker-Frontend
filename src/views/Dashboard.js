import React from 'react';
import { Table } from 'react-bootstrap';
import '../assets/style/dashboard.css';

const Dashboard = () => {
  return ( 
      <Table >
      <thead >
        <tr>
          <th>Monday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
        <tr>
          <td>90g</td>
          <td>20g</td>
          <td>23g</td>
          <td>23g</td>
        </tr>
    <br />
      </tbody>
      <thead>
        <tr>
          <th>Tuesday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
        </tbody>
        <br />
        <thead>
        <tr>
          <th>Wednesday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
    
      </tbody>
      <br />
      <thead>
        <tr>
          <th>Thursday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
    
      </tbody>
      <br />
      <thead>
        <tr>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
    
        <br />
      </tbody>
      <thead>
        <tr>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
    
        <br />
      </tbody>
      <thead>
        <tr>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>Proteins</td>
          <td>Carbs</td>
          <td>Fats</td>
        </tr>
      </tbody>
      <br />
    </Table>
  )
}

export default Dashboard;

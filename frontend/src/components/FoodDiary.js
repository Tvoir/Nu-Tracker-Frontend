import React from "react";
import Table from "react-bootstrap/Table";


export default function FoodDiary(){
    return(  
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Monday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
  
    </tbody>
    <thead>
      <tr>
        <th>Tuesday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
      </tbody>
      <thead>
      <tr>
        <th>Wednesday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
  
    </tbody>
    <thead>
      <tr>
        <th>Thursday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
  
    </tbody>
    <thead>
      <tr>
        <th>Friday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
  
    </tbody>
    <thead>
      <tr>
        <th>Saturday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
  
    </tbody>
    <thead>
      <tr>
        <th>Sunday</th>
      </tr>
    </thead>
    <tbody>
    for (let r of data.list) {
      `<tr> 
        <td>${r.date}</td>
        <td>${r.food}</td>
        <td>${r.calories}</td>
        <td>${r.protein}</td> 
        <td>${r.carbohydrates}</td>   
        <td>${r.fats}</td>         
      </tr>`
    }
    </tbody>
  </Table>
)
}

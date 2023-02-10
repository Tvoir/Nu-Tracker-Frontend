import React from "react";
import Table from "react-bootstrap/Table";
import NavBar1 from "./NavBar1";

export default function About(){
    return (
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
        </Table>
    )
}
import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import '../assets/style/dashboard.css';

const MyDiet = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                </tr>
            </thead>
        </Table>
    )
}

export default MyDiet;

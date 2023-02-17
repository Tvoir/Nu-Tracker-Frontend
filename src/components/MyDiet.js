import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import '../assets/style/dashboard.css';

export default function MyDiet() {
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
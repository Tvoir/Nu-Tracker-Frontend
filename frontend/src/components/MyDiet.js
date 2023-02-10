import React, { useState } from 'react';
import Table from "react-bootstrap/Table";

export default function MyDiet() {
    return (
        <Table striped bordered hover variant="dark">
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
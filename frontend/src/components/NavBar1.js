import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar1() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "20px"}}>
      <Container>
        <Navbar.Brand href="#home">Nu-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#mydiet">Food Diary</Nav.Link>
            <Nav.Link href="#ass">Add Macros</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar1;
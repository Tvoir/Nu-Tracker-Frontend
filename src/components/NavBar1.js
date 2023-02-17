import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/style/navbar.css';


function NavBar1() {
  return (
    <div class="container-fluid">
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">Nu-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Food Tracker</Nav.Link>
            <Nav.Link href="/diary">Food Diary</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar1;
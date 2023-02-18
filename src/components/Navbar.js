// import React, { Component } from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavBar1() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom: "20px"}}>
//       <Container>
//         <Navbar.Brand href="#home">Nu-Tracker</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#mydiet">Food Diary</Nav.Link>
//             <Nav.Link href="#ass">Add Macros</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
//           </Nav>
//           <Nav>
//             <Nav.Link href="#register">Register</Nav.Link>
//             <Nav.Link eventKey={2} href="#login">
//               Log in
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar1;

import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useUserContext } from '../hooks/useUserContext';
import { useLogout } from '../hooks/useLogout';

function DashNavbar() {
  const { user } = useUserContext();
  const logout = useLogout();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Nu-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Welcome to Nu-Tracker {user.name}</Nav.Link>
          </Nav>
          <Button variant="outline-primary" onClick={logout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashNavbar;

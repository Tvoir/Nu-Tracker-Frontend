import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import { useLogout } from '../hooks/useLogout';

const DashNavbar = () => {
  const { user, isLoading } = useUserContext();
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  if (isLoading) {
    return null;
  }

  return (
    <nav>
      <div className="brand">
        <Link to="/">Nu-Tracker</Link>
      </div>
      {user && (
        <>
          <div className="user">
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/add-entry">Add Entry</Link>
            {/* <Link to="/view-entry">View Entries</Link> */}
          </div>
        </>
      )}
    </nav>
  );
};

export default DashNavbar;


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


import React from "react";
import { Container } from "react-bootstrap/lib/Tab";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
      <Navbar bg="light" style={{marginBottom: "20px"}}>
        <Container>
          <Navbar.Brand href="#">
            Nu-Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;

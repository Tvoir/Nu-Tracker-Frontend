import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import MyDiet from "./components/MyDiet";
import NavBar1 from "./components/NavBar1";

function App() {
  return (
    <div>
      <NavBar1 />
      <Container>
        <MyDiet />
      </Container>
    </div>
  );
}

export default App;

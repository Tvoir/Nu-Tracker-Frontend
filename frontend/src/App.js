import React from "react";
import Container from "react-bootstrap/Container";
import AddMacros from "./components/AddMacro";

import MyDiet from "./components/MyDiet";
import NavBar1 from "./components/NavBar1";
import AddMacro from "./components/AddMacro";
import Calendar from "./components/Calendar";
import About from "./components/About";
function App() {
  return (
    <div>
      <NavBar1 />
      <Container>
        <Calendar />
        <MyDiet />
        <AddMacro />
        <About />
      </Container>
    </div>
  );
}

export default App;

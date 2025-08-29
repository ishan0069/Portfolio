import React from 'react';
import "./App.css";
import Header from "./Components/header";
import Nav from "./Components/Nav";
import About from "./Components/about";
import Skill from "./Components/skill";
import Project from "./Components/project";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

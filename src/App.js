import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import React from "react";

function App() {
  let [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen}></Header>
      <Home></Home>
      <Skills></Skills>
      <Projects />
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

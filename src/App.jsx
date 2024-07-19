import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavigationBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

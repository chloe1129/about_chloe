import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="h-screen" style={{ backgroundColor: "#E6E6FA" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutme" Component={AboutMe} />
          <Route path="/experience" Component={Experience} />
          <Route path="/education" Component={Education} />
          <Route path="/project" Component={Project} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

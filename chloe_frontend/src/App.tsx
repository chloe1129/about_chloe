import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/experience" Component={Experience} />
          <Route path="/education" Component={Education} />
          <Route path="/project" Component={Project} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
      About Chloe
    </div>
  );
}

export default App;

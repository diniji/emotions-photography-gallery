import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Participate from "./Participate";
import './App.css';


function App() {
  
  return (
    <div>

      <Router>
        <nav>
          <Link to="/" className="navLink">🎞️ <span className="linkStyle">Gallery</span></Link>
          <Link to="/about" className="navLink"><span className="linkStyle">About</span></Link>
          <Link to="/participate" className="navLink"><span className="linkStyle">Take Part!</span></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/participate" element={<Participate />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

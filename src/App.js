import React from "react";
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from "./About";
import Photos from "./Photos";
import Navbar from "./Navbar";



function App() {
  return (
    
    <Router>
     <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />}> </Route> 
          <Route path="/about" element={<About />}> </Route>
          <Route path="/Photos" element={<Photos />}> </Route>
        </Routes>
    </Router>
  );
}

export default App;

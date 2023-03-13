// import React, { useState } from 'react';
import './App.css';
import Form from './Form.jsx';
import Display from './table/Display.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Form />} />
        <Route exact path="/display" element={ <Display />} />
      </Routes>
    </Router>
  );
}

export default App;

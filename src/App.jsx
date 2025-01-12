import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import HomePage from './components/HomePage';

function App() {
  return <div className="App">
  
  <HomePage/>
  
  </div>;
}


export default App;

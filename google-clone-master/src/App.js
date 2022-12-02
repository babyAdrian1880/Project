/* eslinit-disable no-unused-vars */
import './App.css';
import Home from './Components/Home'
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage';


export default function App() {

  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="./" element={<Home/>}>

        </Route>
        <Route path="./search" element={<SearchPage/>}>

        </Route>
      </Routes>
    </Router>
  <Home />
  </div>
);
}

//export default App;
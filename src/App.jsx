import React from 'react'; 
import './App.css';
import Home from './pages/Home';
import SeacrhPage from './pages/searchpage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
     
      <Router>
        <Routes>
          <Route path="/search" element={<SeacrhPage/>}>
      
          </Route>
          <Route path="/" element={<Home/>}>
          
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

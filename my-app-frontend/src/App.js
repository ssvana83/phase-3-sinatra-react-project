import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import Teams from './components/Teams';
import Team from './components/Team';


function App() {

  // need a get request here. 
  // initial state is established. 
  return (
    <div className="App">
    <Router>
        <Header />
        <NavBar />
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Team />} />

       </Routes>
        <Home />
        
      
    </Router>
    </div>
  );
}

export default App;



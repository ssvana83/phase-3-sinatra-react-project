import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import Teams from './components/Teams';
import Team from './components/Team';


function App() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/teams')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTeams(data)
    })
  }, [])



  // need a get request here. 
  // initial state is established. 
  return (
    <div className="App">
    <Router>
        <Header />
        <NavBar />
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/teams" element={<Teams teams={teams} />} />
        <Route path="/teams/:id" element={<Team />} />


       </Routes>
        <Home />
        
      
    </Router>
    </div>
  );
}

export default App;



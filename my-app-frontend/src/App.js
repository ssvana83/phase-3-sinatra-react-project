import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import Teams from './components/Teams';
import Team from './components/Team';
import Player from './components/Player';


function App() {
  const [teams, setTeams] = useState([])
  // const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/teams')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setTeams(data)
      // setPlayers(data)
    })
  }, [])

  
  // useEffect(() => {
  //   fetch('http://localhost:9292/players')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setPlayers(data)
  //   })
  // }, [])

  return (
    <div className="App">
    <Router>
        <Header />
        <NavBar />
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/teams" element={<Teams teams={teams} />} />
        <Route path="/teams/:id" element={<Team />} />
        {/* <Route path="/players" element={<Player players={players} />} /> */}

       </Routes>
        <Home />
        
      
    </Router>
    </div>
  );
}

export default App;



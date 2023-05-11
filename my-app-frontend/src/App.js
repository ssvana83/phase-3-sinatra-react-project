import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        
        
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
  return (
    <div>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/players">Players</NavLink></li>
        <li><NavLink to="/teams">Teams</NavLink></li>
        

      </ul>
    </div>
  )



}

export default NavBar;
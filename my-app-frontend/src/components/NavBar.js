import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  testDecoration: 'none',
  color: 'white',
  background: "green"
}

function NavBar () {
  return (
    <div>
      <ul>
        <NavLink to="/home" style={link} activestyle={{background: 'darkgreen'}}>Home</NavLink>
        <NavLink to="/players" style={link} activestyle={{background: 'darkgreen'}}>Players</NavLink>
        <NavLink to="/teams" style={link} activestyle={{background: 'darkgreen'}}>Teams</NavLink>
        

      </ul>
    </div>
  )



}

export default NavBar;
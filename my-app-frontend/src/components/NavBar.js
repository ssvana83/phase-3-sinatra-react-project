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
        <NavLink to="/home" exact style={link} activeStyle={{background: 'darkgreen'}}>Home</NavLink>
        <NavLink to="/players" exact style={link} activeStyle={{background: 'darkgreen'}}>Players</NavLink>
        <NavLink to="/teams" exact style={link} activeStyle={{background: 'darkgreen'}}>Teams</NavLink>
        

      </ul>
    </div>
  )



}

export default NavBar;
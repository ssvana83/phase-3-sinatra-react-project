import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player';


const Team = ({ players }) => {
  
  const displayPlayers = players.map(p => <Player key={p.id} player={p} />)

  return (
    <div>

      <br />
      <hr />
      <h3>Players:</h3>
      <br />
      {displayPlayers}
      <br />

    </div>
  )
}

export default Team;


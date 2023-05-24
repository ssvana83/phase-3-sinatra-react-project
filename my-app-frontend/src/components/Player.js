import React from 'react'

const Player = ({player}) => {

  
  return (
    <div>
      <h3>{player.first_name} {player.last_name}</h3>
      <button>Edit</button>
      <button>Delete</button>
      <br />
    </div>
  )
}

export default Player;
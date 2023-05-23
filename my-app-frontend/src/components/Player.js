import React from 'react'

const Player = ({player}) => {
  return (
    <div>
      <h3>{player.first_name} {player.last_name}</h3>
      <br />
    </div>
  )
}

export default Player;
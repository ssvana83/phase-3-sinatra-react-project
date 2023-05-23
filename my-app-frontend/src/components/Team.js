import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player';


const Team = () => {
  const [team, setTeam] = useState({
    players: []
  })
  const [playerFormFlag, setPlayerFormFlag] =useState(false);
  const params = useParams()
  // now have access to params

  useEffect(() => {
    fetch(`http://localhost:9292/teams/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTeam(data)
    })
  }, [])

  // FOR PLAYERFORM 
  // const addPlayer = (player) => {
  //   fetch(`http://localhost:9292/players`, {
  //     method: "POST",
  //     header: {

  //     },
  //     body: json.stringify({
  //       first_name: player.first_name,
  //       team_id: params.id

  //     })
  //   })
  // }

  const players = team.players.map(p => <Player key={p.id} player={p} />)

  return (
    <div>

      <br />
      <h2>{team.name}</h2>
      <hr />
      <h3>Players:</h3>
      <br />
      {players}
      <br />

    </div>
  )
}

export default Team;

// since state is here, I want to add the player button in the file that owns the state
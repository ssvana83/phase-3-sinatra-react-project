import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Player from './components/Player';


const Team = () => {
  const [team, setTeam] = useState({
    players: []
  })
  const [playerFormFlag, setPlayerFormFlag] =useState(false);
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/teams/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])

  return (
    <div>

    <h3>I am a team</h3>


    </div>
  )
}

export default Team;
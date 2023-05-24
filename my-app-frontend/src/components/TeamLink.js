import React from 'react';
import { Link } from 'react-router-dom';
import Team from './Team';

const TeamLink = ({team}) => {
  return (
    <div>
      {/* <Link to={`/teams/${team.id}`}> */}
        <h3>{team.name}</h3>
        <Team  players={team.players}/>
      {/* </Link> */}
    </div>
  )
}

export default TeamLink;
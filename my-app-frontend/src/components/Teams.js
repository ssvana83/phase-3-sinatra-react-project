import React, { useState, useEffect } from 'react';
import TeamLink from '../components/TeamLink';

const Teams = ({ teams }) => {
  
  const [teamFormFlag, setTeamFormFlag] = useState(false)
  const teamsList = teams.map( t => <TeamLink key={t.id} team={t} />)

  return (
    <div>
      <ul>
        {teamsList}
      </ul>
    </div>
  )
}

export default Teams;

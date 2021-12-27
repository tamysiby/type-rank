import React from 'react'

function AllRanking({data}) {
  return (
    <div className="AllRanking">
      <p>Ranking:</p>
      <ul>
          {data.map(prov => <li key={prov.id}>{prov.name}</li>)}
      </ul>
    </div>
  );
}

export default AllRanking;
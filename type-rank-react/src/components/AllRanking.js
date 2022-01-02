import React from 'react'

function AllRanking({data}) {

  var rankedData = data.sort((a,b) => b.count - a.count)

  return (
    <div className="AllRanking">
      <p>Ranking:</p>
      <ol>
          {rankedData.map(prov => <li key={prov.id}>{prov.name} {prov.count}</li>)}
      </ol>
    </div>
  );
}

export default AllRanking;
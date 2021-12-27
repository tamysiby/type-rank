import React from 'react'

function TopFive({data}) {

  return (
    <div className="top-five">
      <p>Top Five 🏆</p>
      <ul>
          <li>1. One</li>
          <li>3. Two</li>
          <li>4. Three</li>
          <li>5. Four</li>
          <li>6. Five</li>
      </ul>
    </div>
  );
}

export default TopFive;
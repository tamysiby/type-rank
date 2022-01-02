import {React, useState, useEffect} from 'react'
import TypeBar from './components/TypeBar';
import Leaderboard from './components/Leadeboard';
//import Location from './components/Location';
import './App.css';

/*
FIX LEADERBOARD. ONLY ONE LEADER BOARD PLS. just clean it up.
*/


function App() {
  const [location, setLocation] = useState(null); 

  
  useEffect(()=>{
    fetch("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0")
    .then(response => response.json())
    .then(data=>setLocation(data))
    .catch(err=>console.log(err))
    //.catch(alert("Check internet pls!"))


  }, [])
  


  return (
    <div className="App">
      <div className="bar-container">
      {location && <TypeBar location={location.state}/>}
      </div>
      <div className="leaderboard-container">
      <Leaderboard />
      <div className="top-five">
          {location && (<p>You're rooting for: {`${location.state}`}</p>)}
      </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect }  from 'react'
import AllRanking from './AllRanking';
import TopFive from './TopFive';
import './Leaderboard.css';

function Leaderboard() {
    const [isAROpen, setIsAROpen] = useState(false)
    const [locationData, setLocationData] = useState([])
    
    useEffect(()=>{
        fetch('/all-leaderboard').then(
            res => {
                if(res.ok){
                    return res.json()
                }
            }
        ).then(jsonResponse => setLocationData(jsonResponse))
        //).then(jsonResponse => console.log(jsonResponse))
    },[])

    if(isAROpen){
        return (
            <div className="lb-container">
                <AllRanking data={locationData}/>
                <p onClick={() => setIsAROpen(!isAROpen)} className="right-bottom-corner">back</p>
            </div>
          );
    } else {
        return (
            <div className="lb-container">
                <TopFive data={locationData}/>
                <p onClick={() => setIsAROpen(!isAROpen)} className="right-bottom-corner">see full ranking...</p>
            </div>
          );
    }
  
}

export default Leaderboard;
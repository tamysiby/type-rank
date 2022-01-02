import React, { useState, useEffect }  from 'react'
import AllRanking from './AllRanking';
import TopFive from './TopFive';
import './Leaderboard.css';

function Leaderboard() {
    const [locationData, setLocationData] = useState([])
    
    useEffect(()=>{
        fetch('/all-provinces').then(
            res => {
                if(res.ok){ return res.json() }
            }
        ).then(jsonResponse => setLocationData(jsonResponse))
        //).then(jsonResponse => console.log(jsonResponse))
    },[])

 
    return (
        //<div className="lb-container">
            <AllRanking data={locationData}/>
        //</div>
    )
}

export default Leaderboard;
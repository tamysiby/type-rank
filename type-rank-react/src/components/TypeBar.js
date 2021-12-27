import {React, useEffect, useRef} from 'react'
import axios from 'axios'
import './TypeBar.css'

function TypeBar({location}) {
  // useEffect(()=>{
  //   const name = {title: `${location}`}
  //   axios.post('http://localhost:5000/post-location', name)
  
  // }, [])

  const text = useRef()
  const name = {title: `${location}`}

  async function postLocation(e){
    e.preventDefault()
    //checks if user submits other than 'anjay'
    if(text.current.value.toLowerCase() !== "anjay"){
      alert("only 'anjay' bruh.")
      return
    }
    console.log(`1 point for ${location}`)

    
    try {
      await axios.post("http://localhost:5000/post-location", 
      {loc: location})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    } catch (error) {
      console.log(error)
    }
  }

  // function checkText(e){
  //   if(text.current.value.toLowerCase() !== "anjay"){
  //     alert("only 'anjay' bruh.")
  //     return
  //   }
  //   console.log(`1 point for ${prov}`)
  // }


  return (
    <div className="text-box">
      <form onSubmit={postLocation}>
      <label>Type "anjay":</label><br/>
      <input type="text" placeholder="anjay" ref={text}/>
      <input type="submit" value="enter" className="submit-btn"/>
      </form>
    </div>
  );
}

export default TypeBar;
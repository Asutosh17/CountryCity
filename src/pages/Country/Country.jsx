import axios from 'axios'
import React, { useState } from 'react'



export const Country = () => {
    
  
    const [country, setCountry]  = useState()



    const handleSubmit= ()=>{
        axios.post("http://localhost:3005/countries", {country})
    }

  return (
    <div>
        <span>Add Country</span><input type="text" placeholder='country' onChange={(e)=>{
            setCountry(e.target.value)
        }} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

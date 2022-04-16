import axios from 'axios'
import React, { useState } from 'react'



export const Country = () => {
    
  
    const [country, setCountry]  = useState()



    const handleSubmit= ()=>{
        axios.post("http://localhost:8080/countries", {country})
    }

  return (
    <div>
        <span>Add Country  </span><input type="text" onChange={(e)=>{
            setCountry(e.target.value)
        }} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

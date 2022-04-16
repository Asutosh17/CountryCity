import React from 'react'
import "./City.css"


export const City = () => {
  return (
    <div className='add-city'>
        <input type="text"  placeholder='country' id='country'/>
        <br/>

        <input type="number" placeholder='population' id='population'/>
        <br/>
        <button>submit</button>
    </div>
  )
}

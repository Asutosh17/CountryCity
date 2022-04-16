import React from 'react'
import "./City.css"


export const City = () => {
  return (
    <div className='add-city'>
        <span>Add Country</span><input type="text"  placeholder='country' id='country'/>
        <br/>

        <span>Add Population</span><input type="number" placeholder='population' id='population'/>
        <br/>
        <button>submit</button>
    </div>
  )
}

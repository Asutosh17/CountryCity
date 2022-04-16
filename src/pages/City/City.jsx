import React from 'react'
import "./City.css"


export const City = () => {
  return (
    <div className='city'>
        <span>Add Country  </span><input type="text"  id='country'/>
        <br/>

        <span>Add Population  </span><input type="number" id='population'/>
        <br/>
        <button>submit</button>
    </div>
  )
}

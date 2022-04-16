import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./Home.css"

export const Home = () => {
  const [cities, setCities] = useState([])
  useEffect(()=>{
    getCities()
  },[])


  const getCities = ()=>{
      axios.get("http://localhost:8080/cities").then((res)=>{
          setCities(res.data)
      })
  }
  return (
    <>
    <Link to="/add-country"><button >add country</button></Link> 
        <Link to="/add-city"><button>add city</button></Link>
    <div className='table'>
        
        <table>
            <tr>
                <th>Country</th>
                <th>City</th>
                <th>Population</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {cities.map((el)=>{
                return(
                    <>
                    <tr>
                    <td>{el.country}</td>
                    <td>{el.city}</td>
                    <td>{el.population}</td>
                    <td><button onClick="">edit</button></td>
                    <td><button onClick="">delete</button></td>
                </tr>
                </>              
                )
            })}

            
            
        </table>
           

    </div>
    </>
  )
}

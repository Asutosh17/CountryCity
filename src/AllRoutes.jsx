import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Country } from "./pages/Country/Country"
import { City } from "./pages/City/City"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element= {<Home/>}></Route>
        <Route path="/add-country"  element= {<Country/>}></Route>
        <Route path="/add-city"  element= {<City/>}></Route>
    </Routes>
  )
}

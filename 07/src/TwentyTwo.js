import React, { useState } from 'react'

function TwentyTwo() {
    const [car, setCar] = useState({
        brand:"Ford",
        model:"mustang",
        year:"1976",
        color:"black"
    });
    const updateColor = () =>{
        setCar(previousState=>{
            return {...previousState, color:"white"}
        })
    }
  return (
    <div>
        <h1>my {car.brand}</h1>
        <p> it is a {car.color} {car.model} from {car.year}</p>
        <button type="button" onClick={updateColor}>
            click
        </button>
    </div>
  )
}

export default TwentyTwo
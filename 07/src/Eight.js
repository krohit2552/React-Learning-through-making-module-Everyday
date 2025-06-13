import React, { useState } from 'react'

function Eight() {
    const [color,SetColor] = useState("red");
    const handleColor = ()=>{
        const newColor = color === 'red'?'blue':'red';
        SetColor(newColor);
    }
  return (
    <div>
       <button type="button" onClick={handleColor}>backgound-color:{color}</button> 
    </div>
  )
}

export default Eight
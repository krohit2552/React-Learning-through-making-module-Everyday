import React, { useState } from 'react'

function Five() {
    const [isToggles,setIsToggles] = useState(false);
    const handleToggle = () =>{
        setIsToggles(!isToggles);
    }

  return (
    <div>
        <button type="button" onClick={handleToggle}>click me </button>
        <p>{isToggles? "ON":"OFF"}</p>
    </div>
  )
}

export default Five
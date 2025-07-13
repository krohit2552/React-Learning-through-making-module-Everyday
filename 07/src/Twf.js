import React, { useState } from 'react'

function Twf() {
  const [darkMode,setDarkMode] = useState('false');

  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  const toggleTheme =()=>{
      setDarkMode(prevMode =>!prevMode)
  }
  return (
    <div style={themeStyles}>
      <h2>{darkMode?"Dark Mode":"Light Mode"}</h2>
      <button onClick={toggleTheme}>
        switch to {darkMode?"Light":"Dark"} mode
      </button>
    </div>
  )
}

export default Twf
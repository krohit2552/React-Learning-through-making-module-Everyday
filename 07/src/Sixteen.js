import React, { useState } from 'react'

function Sixteen() {
    const [chooseColor,setChooseColor] = useState('#000000');
    const handleChange = (e) =>{
        setChooseColor(e.target.value);
    }
  return (
    <div>
        <input type='color' onChange={handleChange}/>
       
        <div 
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: chooseColor,
                    marginTop: '10px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #ccc'
                }}
            >
        </div>        
    </div>
  )
}

export default Sixteen
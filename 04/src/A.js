import React from 'react'
import B from './B';
function A() {
    const greet = "Hello, i am Rohit";
  return (
    <div>
        <B greet ={greet}/>
    </div>
  )
}

export default A
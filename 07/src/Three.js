import React, { useState } from 'react'

function Three() {
    const [input, setInput] = useState('')
  return (
    <div className="App">
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>INPUT TEXT:{input}</p>
    </div>
  )
}

export default Three
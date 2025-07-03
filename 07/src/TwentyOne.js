import React, { useState } from 'react'

function TwentyOne() {
    const [state,setState] = useState({
        count:0,
        text:'Hello World',
        isActive:true
    })

    function IncrementCount(){
            setState({...state, count:state.count+1})
    }

    function ChangeText(){
            setState({...state,text:'Updated Text'})
    }

    function ToggleChange(){
            setState({...state,isActive:!state.isActive})
    }

  return (
    <div>
        <h1>Multiple State Example</h1>
        <p>Count:{state.count}</p>
        <p>Text:{state.text}</p>
        <p>Active:{state.isActive?'YES':'NO'}</p>

        <button onClick={IncrementCount}>Increment</button>
        <button onClick={ChangeText}>Change Text</button>
        <button onClick={ToggleChange}>Toggle Change</button>
    </div>
  )
}

export default TwentyOne
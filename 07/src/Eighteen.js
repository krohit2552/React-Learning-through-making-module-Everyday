import React, { useReducer } from 'react'

const initialState = {count:0};

function reducer(state, action){
        switch(action.type){
            case 'Increment':
                return {count:state.count+1};
            case 'Decrement':
                return {count:state.count-1};
            case 'Reset':
                return {count:0};
            default:
                return state;            
        }
}

function Eighteen() {
    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h1>Counter App</h1>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({type:'Increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'Decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
    </div>
  )
}

export default Eighteen
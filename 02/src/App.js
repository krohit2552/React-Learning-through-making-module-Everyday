
import { useReducer, useState } from 'react';
import './App.css';

const initialState={count:0};
const reducer=(state,action)=>{
    console.log(state,action);

    if(action.type==='incr'){
        return {count:state.count+1}
    }else if(action.type==='decr'){
        return {count:state.count-1}
    }
    else if(action.type==='mult'){
      return {count:state.count*2}
    }
    else{
      throw new Error('Unsupported action');
    } 
};
function App() {
  //const [count,setCount]= useState(1);
  
  // const handlePlus=()=>{
  //   setCount(count+1)
  // }
  // const handleMinus=()=>{
  //   setCount(count-1)
  // } 
  // const handleMut=()=>{
  //   setCount(count*2)
  // } 

  const [state, dispatch] = useReducer(reducer, initialState);
  const handlePlus=()=>{
    dispatch({type:"incr"});
  }
  const handleMinus=()=>{
    dispatch({type:"decr"});
  } 
  const handleMut=()=>{
    dispatch({type:"mult"});
  }
  
  return (
    <div className="App">
      <h1>{state.count}</h1>
      {/* <h1>count:{count}</h1> */}
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleMut}>*</button>
    </div>
  );
}

export default App;

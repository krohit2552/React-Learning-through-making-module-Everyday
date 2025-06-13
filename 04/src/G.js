import React,{useContext} from 'react'
import {GreetContext} from './GreetContext';
function G() {
    const val = useContext(GreetContext);
    console.log(val);
  return (
    <div>{val}</div>
  )
}

export default G
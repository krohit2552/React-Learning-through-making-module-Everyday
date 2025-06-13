import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [userInput,setUserInput]=useState("");
  //const [render,setRender]=useState(0);
  
  // useEffect(()=>{
  //   setRender(render+1);
  // })

  const render=useRef(0);
  useEffect(()=>{
      render.current=render.current+1;
  })
  return (
    <div className="App">
      hello
      <br/>
      <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
      <p>The Component rendered {render.current} times</p>
    </div>
  );
}

export default App;

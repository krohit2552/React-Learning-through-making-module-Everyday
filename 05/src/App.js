import React, {useMemo, useState } from 'react'

function slowFunction(num){
  //console.log(num);
  let res=0;
  for(let i=0;i<10;i++){
    res+=num;
  }
  console.log(res);
  return res;
}
function App() {
    const [number,setNumber]=useState(2);
    const [dark,setDark] = useState(false);

    const themeSytle = {
      backgroundColor:dark?'blue':'green',
      color:dark?'yellow':'red'
    };
    const doubleNumber = useMemo(()=>
      slowFunction(number),[number]
    )

    //const doubleNumber= slowFunction(number);
  return (
    <div style={themeSytle}>
        <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark(prev=>!prev)}>Toggle theme</button>
        <h1>{doubleNumber}</h1>
    </div>
  )
}

export default App
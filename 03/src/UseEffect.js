import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [clicked, setClicked] = useState();
    const [count,setCount]=useState(0);
    useEffect(() => {
        //console.log('We r in usestate');
        return(()=>{
            //console.log('this is return cleanUp');
        })
    },[clicked,count])
    return (
        <div>
            <button onClick={() => setClicked('hello')}>hello</button>
            <br />
            <hr />
            <button onClick={() => setClicked('Tarun')}>Tarun</button>
            <br />
            <hr />
            <button onClick={() => setClicked('Nayar')}>Nayar</button>
            <h1>{clicked}</h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffect;

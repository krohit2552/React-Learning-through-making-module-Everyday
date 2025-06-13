import React, { useEffect, useState } from 'react'

function Seven() {
    const [time, setTime] = useState(60);
    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=>setTime(time-1),1000);
        }
        return ()=>clearTimeout(time);
    },[time])
  return (
    <div>
        Time left: {time} second
    </div>
  )
}

export default Seven
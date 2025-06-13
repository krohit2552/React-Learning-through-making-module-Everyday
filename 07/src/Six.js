import React, { useEffect, useState } from 'react'

function Six() {
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
    },[])
  return (
    <div>
        data ?(title:{data.title} ):(<h1>Loading...</h1>)
        
    </div>
  )
}

export default Six
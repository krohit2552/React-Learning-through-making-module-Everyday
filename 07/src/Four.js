import React from 'react'

function Four() {
    const items = ['item1', 'item2','item3','item4']
  return (
        <ol>
            {items.map((i)=>{
                return <li>{i}</li>
            })}
        </ol>

    // <div className='App'>
    //     <li>
    //         <p>item1</p>
    //         <p>item2</p>
    //         <p>item3</p>
    //     </li>
    // </div>
  )
}

export default Four
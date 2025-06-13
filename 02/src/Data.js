import React, { useState } from 'react'
import datas from './Datas.json'
const Data = () => {
    const [nData, setnData] = useState(datas);
    console.log(datas);
    return (
        <div>
            <ul>
                {
                    nData.map(items=>{
                        <li key={items.id}>
                            {items.id}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Data




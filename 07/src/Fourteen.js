import React, { useState } from 'react'

function Fourteen({ items }) {
    const [searchItem, setSearchItem] = useState();
    const filteredItems = items.filter((item) => {
        return item.toLowerCase().includes((searchItem||"").toLowerCase());
    });
    
    return (
        <div>
            <input 
            type='text'
            placeholder='search...' 
            onChange={(e) => setSearchItem(e.target.value)} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Fourteen
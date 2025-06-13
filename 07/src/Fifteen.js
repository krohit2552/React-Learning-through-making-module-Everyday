import React, { useState } from 'react'

function Fifteen({items,itemPerPage}) {
    //console.log(items,itemPerPage)
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage*itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);
    console.log(currentItems);

    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(items.length/itemPerPage);i++){
        pageNumbers.push(i);
    }

  return (
    <div>
        <ul>
            {currentItems.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        {pageNumbers.map((number)=>(
            <li key={number} onClick={()=>setCurrentPage(number)}>{number}</li>
        ))}
    </div>
  )
}

export default Fifteen
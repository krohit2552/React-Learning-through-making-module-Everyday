import React from 'react'
import D from './D'
function C(props) {
    //console.log(props);
  return (
    <div>
      <D greet={props.greet}/>
    </div>
  )
}

export default C
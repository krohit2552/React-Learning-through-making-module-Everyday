import React from 'react';
function MobileList(props) {
    const { image, name, price } = props;//constructor
    return (
        <div>
            {props.greet}
            <img src={image} />
            <h1>{name}</h1>
            <p>{props.price}</p>
            <button>add to cart</button>
        </div>
    );
}


export default MobileList;
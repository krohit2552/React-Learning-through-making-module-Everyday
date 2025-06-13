import React from 'react';
import MobileList from './MobileList';
import books from './books.json';
function Mobile() {
    // const books = {
    //     image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/r/r/-original-imah9khh8wgzdafb.jpeg?q=70',
    //     name: 'iphone',
    //     price: '$100'
    // };
    // const books1 = {
    //     image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/8/d/pixel-8a-ga04988-in-google-original-imahyn3mskjbwphw.jpeg?q=70',
    //     name: 'google Pixel',
    //     price: '$50'
    // }

    // const books = [
    //     {
    //         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/r/r/-original-imah9khh8wgzdafb.jpeg?q=70',
    //         name: 'iphone',
    //         price: '$100'
    //     },
    //     {
    //         image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/8/d/pixel-8a-ga04988-in-google-original-imahyn3mskjbwphw.jpeg?q=70',
    //         name: 'google Pixel',
    //         price: '$50'
    //     }
    // ]
    return (
        <div>
            {/* <MobileList
                image={books.image}
                name={books.name}
                price={books.price}
            />
            <MobileList
                image={books1.image}
                name={books1.name}
                price={books1.price}
            /> */

                books.map((ele) => {
                    return <MobileList
                        image={ele.image}
                        name={ele.name}
                        price={ele.price}
                    />
                })
            }
        </div>
    );
}

export default Mobile;
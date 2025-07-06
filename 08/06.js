// A function that can access variables of its parent function, even after the parent has returned.
// imagine we`re working on e-commerce project, and we`re building a cart module for a websites.

function createCart(){
    let items = [];
    return {
        addItem : function(item){
            items.push(item);
            console.log(`${item} added to cart`);
        },
        getItem : function(){
            return items;
        },
        getCount : function(){
            return items.length;
        }
    };
}

const userCart = createCart();
userCart.addItem('watch');
userCart.addItem('t-shirt');
console.log(userCart.getCount());
console.log(userCart.getItem());

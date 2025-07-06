//closure is function that remembers variables in inner funtion that variable declare in outer funtion 
// , even their outer function is finished
//thier executions.

function outer(){
    let counter = 0;
    return function inner(){
        counter++;
        console.log(counter);
    }
}

const count = outer();
count();
count();
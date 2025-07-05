function display(res){
   document.getElementById("demo").innerHTML = res; 
}
// function calSum(n1,n2){
//     let sum = n1+n2;
//     display(sum);
// }
// // let res = calSum(10,29);
// // display(res);
// calSum(36,98);

// You cannot reuse myCalculator with another display logic (e.g., log to console, send to server, etc.)

function calSum(num1,num2, callback){
    let sum = num1+num2;
    callback(sum);
}

calSum(23,45,display);
calSum(43,89,console.log);
calSum(2,3,(sum)=>{
    alert("The result is  " + sum);
})

//When you pass a function as an argument, remember not to use parenthesis.
//Right: myCalculator(5, 5, myDisplayer);
//Wrong: myCalculator(5, 5, myDisplayer());



const arr = [1, 3, -9, 6, -4, 0, -2];

function remNeg(arr, callback){
    const newArr = [];
    for(const x of arr){
        if(callback(x)){
            newArr.push(x);
        }
    }

    return newArr;
}

const posNo = remNeg(arr, (x)=> x>=0);

document.getElementById("demo").innerHTML = posNo;
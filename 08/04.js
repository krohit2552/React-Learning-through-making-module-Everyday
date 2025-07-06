//Fetching User Data from API
//Imagine you're building a dashboard for a CRM system (used in sales or support industry). 
// You need to fetch user details from a backend API.

//A Promise is a built-in JavaScript object that represents the eventual result (success or failure) of an asynchronous operation.

//Think of it as: “A promise to return something later — either the result or an error.”

function fetchUserDataFromApi(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(userId===101){
                resolve({id:101, name:'Rohit',role:"Developer"});
            }
            else{
                reject('User not found');
            }
        }, 2000);
    })
}

fetchUserDataFromApi(101)
.then((user)=>{
    console.log("User fetched:" ,user);
})
.catch((error)=>{
    console.log("error ", error);
})
//document.getElementById("demo").innerHTML=obj;
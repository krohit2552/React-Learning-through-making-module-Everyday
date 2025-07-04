function getUserFromDB(userId){
    return new Promise(resolve =>{
        setTimeout(()=>resolve({id:userId, name:"Rohit"}), 1000);
    });
}

function getCreditScore(userId){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(780),5000);
    });
}
// Basic Concepts:
//async keyword is used to declare an asynchronous function.
//await is used inside async functions to pause execution until a Promise is resolved or rejected.

async function getUserProfile(userId) {
    try{
        const user = await getUserFromDB(userId);
        const score = await getCreditScore(userId);

        return {
            ...user,
            creditScore:score
        }
    } catch(err){
        console.log('error fetching profile', err);
        throw err;
    }
}

//call the function 
getUserProfile(101).then(profile =>{
    console.log('User Profile:', profile);
})

//callback example

function saveOrderToDB(orderdata, callback){
    setTimeout(()=>{
        console.log("order save in database");
        const message = callback();
        document.getElementById("demo").innerHTML = message;
    },2000);

}

function sendConfirmationEmail(){
    console.log("confirmation email sent to customer");
    return "your order is confirm";
}


saveOrderToDB({item:"mobile apple"}, sendConfirmationEmail);

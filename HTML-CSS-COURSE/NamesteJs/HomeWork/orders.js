 //create Order
 // Processed to Payment
 // show order summery
 // update wallet

 // Example usage: Creating an order with items
const items = [
    {name : "Laptop", price : 13000},
    {name : "Mouse", price : 30},
    {name : "Keybord", price : 500}

];

let walletBalance = 15000;  // Initial wallet balance
let currentOrder = null;   // Will hold the current order details
let totalCost = 0;         // Will store total cost of the order

 // verifying the items in the order (asynchronous)
function verifyItems(items){
    return new Promise((reslove, reject) =>{
        console.log("Length of the Items ==>",items.length);
        setTimeout( () => {
            if(items.length === 0){
                reject("NO items in the Order!"); // reject if no items
            }
            else
            {
                const itemList = items.map(item => `<li>${item.name} - $${item.price} </li>`).join("");
                showOutPut(`<ul>${itemList}</ul>`);
               reslove(items);
            }

        },1000); // 1- second delay
    })
}


//calculating the total cost (asynchronous)

function calculateTotal(items){
    return new Promise((reslove) => {
        setTimeout(( ) => {
            totalCost = items.reduce((sum, item) => sum + item.price,  0 );
            // Total Cost caculted : $100
           // console.log("Total cost Calculated : $" + totalCost); 
            console.log(`Total cost calculated : $${totalCost}`);
            
            reslove(totalCost);

        },500); // 0.5 - seconds delay for total cost calculation
    });
}

//Processing the payment (asynchronous)

function processPayment(totalCost){

    return new Promise((reslove,reject) => {
        setTimeout(()=>{
           console.log("Wallet Balence",+walletBalance);
           console.log("Total Cost",+totalCost);

            if(walletBalance >= totalCost){
                walletBalance -= totalCost;  // Deduct from wallet balance
                console.log(`Payment of $${totalCost} processed successfully`);
                reslove("payment successful");

            } else{
                reject("Insufficeient balance for the payment");
            }

        },1500); //1.5 - seconds delay for the payment Processing 
    })

}

// confirming the Order
function confirmOrder(){
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log("Order Confirmed Successfully");
            reslove("Order Confirmed");

        },1000) //1 - seconds delay for the confirm the order

    })
}

function createOrder(){
        console.log("Creating Order ...");
        //using promise chain to perform each step in Sequence
        verifyItems(items)
        .then(verifyedItems => calculateTotal(verifyedItems))    //// Verify items and calculate total cost
        .then(totalCost => processPayment(totalCost)) // Process payment after calculating total cost
        .then(() => confirmOrder( )) //  confirm the order after successful payment
        
        .then((confirmation) =>{
            currentOrder = { items, totalCost };  // Store the order details
            showOutPut(`${confirmation}<br>Order Total: $${totalCost}<br>Remaining Wallet Balance: $${walletBalance}`);
        })

        .catch(error => {
            showOutPut(`Error:${error}`); // Handle any error that occur in the process
        })
        .finally(() => {
            console.log("Order process completed.");
        });
        

}

function showOrderSummary(){
    if(currentOrder){
        const itemList = currentOrder.items.map(item => `<li>${item.name} - $${item.price} </li>`).join("");
        showOutPut(`Order Summary: <ul>${itemList}</ul> Total Cost : $${currentOrder.totalCost}`);

    }else{
        showOutPut(`No Order Placed yet`);
    }


}

//Function to update Wallet balance
function updateWallet() {
    walletBalance +=1000; // Add 1000 to the wallet
    showOutPut(`Wallet updated. Current Balance :$${walletBalance}`);
} 

 // Function to display result in the out put area
function showOutPut(message){
    document.getElementById("output").innerHTML = message ;
}

// Function to create order and handle the entire process
createOrder(items);


 // Add event listeners to buttons
 document.getElementById("createOrderBtn").addEventListener("click", createOrder );
 //document.getElementById("processedPaymentBtn").addEventListener("click", processPayment );
 document.getElementById("showOrderSummaryBtn").addEventListener("click", showOrderSummary );
 document.getElementById("updateWalletBtn").addEventListener("click", updateWallet );
 


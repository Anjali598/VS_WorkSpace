 // Simulating an asynchronous function to fetch order details
function fetchOrderDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {
                orderId: 12345,
                items: [
                    { name: "Laptop", price: 1200 },
                    { name: "Mouse", price: 20 },
                    { name: "Keyboard", price: 50 }
                ],
                shipping: 15
            };
            // Simulating a success scenario
            resolve(order);
        }, 2000); // Simulates a delay of 2 seconds
    });
}

// Simulating an asynchronous function to calculate total cost
function calculateTotalCost(order) {
    return new Promise((resolve, reject) => {
        const totalCost = order.items.reduce((total, item) => total + item.price, 0) + order.shipping;
        // Simulating success with no failure scenario here
        resolve(totalCost);
    });
}

// Function to display the order summary
function displayOrderSummary() {
    fetchOrderDetails()
        .then(order => {
            console.log("Order Details Fetched: ", order);
            return calculateTotalCost(order); // Pass the order to calculate the total cost
        })
        .then(totalCost => {
            console.log(`Total Cost: $${totalCost}`);
        })
        .catch(error => {
            console.error("Error fetching order details:", error);
        })
        .finally(() => {
            showOutPut("Order summary operation completed.");
        });
}

// Calling the function to display the order summary
//displayOrderSummary();

 // Function to display result in the out put area
 function showOutPut(message){
    document.getElementById("output").innerHTML = message ;
}

document.getElementById("fetchOrderBtn").addEventListener('click',displayOrderSummary);

const p1 = new Promise((resolve , reject) =>{
    setTimeout(() => resolve("P1 Success"),3000);
 });
 
 
 const p2 = new Promise((resolve , reject) =>{
     setTimeout(() => resolve("P2 Success"),1000);
    // setTimeout(() => reject("P2 Fail"),1000);
  });
 
 
  const p3 = new Promise((resolve , reject) =>{
   // setTimeout(() => resolve("P3 Success"),2000);
     setTimeout(() => reject("P3 Fail"),2000);
  });
 
 
  Promise.all([p1,p2,p3])
  .then((res)=>{
     console.log(res);
  })
 .catch((err) => {
     console.error(err);
 });
 

 Promise.allSettled([p1,p2,p3])
  .then((res)=>{
     console.log(res);
  })
 .catch((err) => {
     console.error(err);
 });
 

 Promise.race([p1,p2,p3])
 .then((res)=>{
    console.log(res);
 })
.catch((err) => {
    console.error(err);
});

Promise.any([p1,p2,p3])
 .then((res)=>{
    console.log(res);
 })
.catch((err) => {
    console.error(err);
});



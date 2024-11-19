console.log("welcome to js");

function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    a =100;
y();
    
}
x();
 

const number = [2,6,3,4,5];

const double = number.map(function (num){
    return num *2 ;
});

console.log(double);

function multiplier(factor){
    return function(number){
        return number * factor;

    };
}

const twice = multiplier(2);
console.log(twice(5));

// Filter and reduce examples
const numbers = [1,3,4,5,6];

const numberEven = numbers.filter(num => num % 2 ===0);
console.log(numberEven);

const sum = numbers.reduce((total, num)=> total + num, 0);
console.log(sum);

function createComparisonFunction(property) {
    return function(a, b) {
        let valueA = a[property];
        let valueB = b[property];

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    };
}

const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

data.sort(createComparisonFunction("age"));
console.log(data);

function greet(greeting){
    return function(name){
        return `${greeting},${name}!`;
    }

}

const sayHello = greet("hello");

console.log(sayHello("Alice"));
console.log(sayHello("Bob"));


function add(a){
    return function(b){
        return a+b;
    };
}
const addFive = add(5);
console.log(addFive(10));
console.log(addFive(15));


function multiplier(factor){
    return function(number){
       return number * factor;

    };
}

const double1 = multiplier(2);
const triple = multiplier(3);

console.log(double1(4));
console.log(triple(4));


function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const mycounter = counter();

console.log(mycounter());
console.log(mycounter());
console.log(mycounter());


const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
};
const circumference = function(radius){
    return 2* Math.PI * radius;

};
const daimeter = function(radius){
    return 2*radius;
};

const calculate = function (radius, logic){
    const output =[];
    for (let index = 0; index < radius.length; index++) {
        output.push(logic(radius[index]));
        
    }
    return output;
}


console.log(radius.map(area));

console.log(calculate(radius,area));


const array = [5,1,3,2,6];
//Filter odd values
 
function isOdd(x){
    return x % 2;
}

const output3 =array.filter(isOdd);
console.log(output3);

 
function isEven(x){
    return x % 2 === 0;
}

const output4 =array.filter(isEven);
console.log(output4);

function isGreaterThan4(x){
    return x > 4;
}

const output5 =array.filter(isGreaterThan4);
console.log(output5);


function isLessThan4(x){
    return x < 4;
}

const output6 =array.filter(isLessThan4);
console.log(output6);

const output7 = array.filter((x) => x >4);
console.log(output7);

const output8 = array.filter(function isLessThan4(x){
    return x < 4;
});
console.log(output8);

//Reduce function perform sum or max values in the array

const reduceArray = [3,5,6,7];

const result = reduceArray.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;

},0);

console.log(result);

// Filter for even numbers, then double them, then sum the results

const numbers1 = [1,2,3,4,5,6,7,8,9,10];

const results =  numbers1
.filter(num => num % 2 === 0)
.map(num => num * 2 )
.reduce((total, num) => total + num , 0)

console.log(results);

const people = [
    { firstName: "John", lastName: "Doe", age: 28 },
    { firstName: "Jane", lastName: "Smith", age: 34 },
    { firstName: "Michael", lastName: "Johnson", age: 45 },
    { firstName: "Emily", lastName: "Davis", age: 22 },
    { firstName: "Chris", lastName: "Brown", age: 31 }
];

const totalAgeUnder25 = people
.filter(person => person.age <25 )
.reduce((total,person) => total +person.age ,0);

console.log(totalAgeUnder25);

//call back function
 
setTimeout(function (){
    console.log("Call back function");
},3000);


const myPromise = new Promise((resolve, reject) => {
    let success = true;  // Simulate an operation result

    if (success) {
        setTimeout(() => {
            resolve("The operation was successful!");

        },1000)
        
    } else {
        reject("The operation failed.");
    }
});

const myPromise1 = new Promise((reslove, reject)=> {
  setTimeout(()=>{
    reslove("Sucess");
  },2000);

  });

  myPromise1
  .then(result => {
    console.log(result);

  })
  .catch(error => {
    console.error(error);

  })
  .finally(() => {
    console.log("promise is setteled");
  })

  const myPromise2 = new Promise((reslove,reject) => {
    setTimeout(()=>
        {
            reslove(1);
        },1000);
  }
 
  );
    
  myPromise2
  .then(result =>{ 
 console.log(result);
 return result * 2 ;
  })

.then(result =>{ 
    console.log(result);
    return result * 3 ;
     })

.then(result =>{ 
        console.log(result);
        
         })


    
const cart = ["shoes","pants","kurthis"];

const promise = CreateOrder(cart);
console.log(promise);

promise.then(function (orderId){
 console.log(orderId);
   //proceedToPayment(orderId);
})
.catch(function (error){
console.log(error);
})
function CreateOrder(cart){

   const myPromise = new Promise((reslove, reject) => {
// Create Oreder
// Validate  order
// order Id
if(!validateCart(cart)){
     reject("Cart is not Valid");
}

  
const orderId = "12345";
if(orderId){
   setTimeout(
       function(){
           reslove(orderId);
       }, 5000
   )
}

   });
   return myPromise;

}


function validateCart(cart){
   return false;
}      

 CreateOrder(cart)
 .then(function (orderId){
  console.log(orderId);
    //proceedToPayment(orderId);
 })
 .then(function (orderId){
    return proceedToPayment(orderId);
 })
 .then(function (paymentinfo){
    console.log(paymentinfo);
 })
.catch(function (error){
 console.log(error);
})

 function CreateOrder(cart){

    const myPromise = new Promise((reslove, reject) => {
// Create Oreder
// Validate  order
// order Id
if(!validateCart(cart)){
      reject("Cart is not Valid");
}

   
const orderId = "12345";
if(orderId){
    setTimeout(
        function(){
            reslove(orderId);
        }, 5000
    )
}
 
    });
    return myPromise;

 }
 
 function proceedToPayment(orderId){
        return new Promise(function (reslove, reject){
           reslove("Payment Successful");
        })
 }

 function validateCart(cart){
    return true;
 }


 const myPromise3 = new Promise((resolve, reject) => {
    let success = true;  // Simulate an operation result

    if (success) {
        const err = new Error("The operation was successful!");
        resolve(err.message);
    } else {
        reject("The operation failed.");
    }
});

console.log(myPromise3);



















































































































































































































































































































































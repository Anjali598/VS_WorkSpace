// Q1: What is the difference between var, let, and const?

/*
var: Function-scoped, can be re-declared and updated, hoisted but initialized as undefined.
let: Block-scoped, can be updated but not re-declared within the same scope, hoisted but not initialized.
const: Block-scoped, cannot be updated or re-declared, hoisted but not initialized, must be assigned a value when declared.
 */

function example(){
    console.log(a);
   // console.log(b);
   // console.log(c);

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(b);
    console.log(c);
}

example();

// Q2: Explain how JavaScript's prototype chain works.

/* In JavaScript, each object has a prototype, and objects inherit properties and methods from their prototype. 
The chain continues until null is reached. This is known as the prototype chain. */

function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(this.name +" make a noise");
}    

const dog = new Animal('Dog');
dog.speak();
 // Another example of prototype inheritence

 Function.prototype.mybind = function(){
    console.log("ABCDEF");
 }

 function fun (){

 }

fun.__proto__.mybind();
fun.mybind();

// Q3: What are closures in JavaScript?

/* A closure is a function that remembers the variables from its outer scope, even after the outer function has
 finished execution. */

 function outer(){
    let count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
 }

 const inc =outer();
 inc();
 inc();
 /* Here, increment() forms a closure that retains access to the count variable from outer() even after 
 outer() has returned. */ 

// Q4: How does JavaScript's event loop work?

/* The event loop allows JavaScript to perform non-blocking I/O operations, despite being single-threaded, 
by offloading tasks to the browser or Node.js APIs. It operates in this order:

Execute all synchronous code.
Check for any queued microtasks (e.g., promises).
Check for macrotasks (e.g., setTimeout, I/O operations).
Repeat. */
 
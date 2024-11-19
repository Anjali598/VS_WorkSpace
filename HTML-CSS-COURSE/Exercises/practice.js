// Write a function that takes a string as input and returns the string reversed.

function stringReverse(arry){

    const reversedString = arry.split('').reverse().join('');
    return reversedString;

}

const testString = "hello";
console.log(stringReverse(testString));

// Write a function to calculate the factorial of a given number.

function factorial(num){

    if(num === 0 || num === 1){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}
console.log(factorial(5));

// Write a function that checks whether a given word or phrase is a palindrome.

function isPolindrome(str){
    const cleanString = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    const reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString; 
}
const poliString = "madam";
console.log(isPolindrome(poliString));

// Write a function that takes a sentence as input and returns the longest word in it.

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
//     return longestWord;
//   }
  
//   console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "quick"
  
  /* Write a program that prints the numbers from 1 to 100. But for multiples of three, 
   print "Fizz" instead of the number, and for the multiples of five, print "Buzz." 
   For numbers that are multiples of both three and five, print "FizzBuzz." */

function numberDisplay(){

    for(let i=1 ; i<=100; i++){
        let output ="";
        if(i % 3 === 0){
            output += "Fizz";
          
        } 
        if(i % 5 === 0){
            output += "Buzz";
            
        }
         console.log(output || i);

    }

}

console.log(numberDisplay());

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Write a function that removes duplicate elements from an array and returns a new array without duplicates.

function removeDuplicates(arry){
return Array.from(new Set(arry));
}
const numbersArray = [2,2,5,6,7,8,6];
console.log(removeDuplicates(numbersArray));

// Write a function that rotates an array to the right by k steps, where k is a non-negative integer.

// Write a function that checks whether two words are anagrams of each other.

// Write a function that takes a sentence and title cases it (capitalizes the first letter of each word).

// Write a function that finds and returns the second largest number in an array.

// Given two sorted arrays, write a function to merge them into a single sorted array.

// Write a function to calculate the power of a number (e.g., x^y).
function powerOfNumber(num1,num2){
    let result = 1;
    for (let index = 0; index < num2; index++) {
        result *= num1;
        
    }
    return result;

}
console.log(powerOfNumber(2,3));
// using recurssion

function recursivePowerOfNumber(base,exponent){

    if(exponent === 0){
        return 1;
    }else{
        return base * recursivePowerOfNumber(base , exponent -1);

    }
}
console.log(recursivePowerOfNumber(3,4));



// Write a function that returns the intersection of two arrays.

// Implement a basic stack with push, pop, and peek operations.
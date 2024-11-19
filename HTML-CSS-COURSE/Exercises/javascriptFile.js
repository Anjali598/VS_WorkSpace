function flattenArray(arr) {
    return arr.reduce(
        (aggregator, currentValue) => { 
            const returnValue = aggregator.concat(
                Array.isArray(currentValue) ? flattenArray(currentValue) : currentValue
                );
            return returnValue;
        }, 
        []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5]
document.writeln(flattenArray(nestedArray));

function firstNonRepeatedChar(str) {
    const charCount = {};
    
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    document.write("<br>");
    document.writeln("Character count for the String::::"+charCount);
    console.log(charCount);
    for (const char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    
    return null; // If there is no non-repeated character
  }
  
  // Example usage:
  const testString = "programming";
  console.log(firstNonRepeatedChar(testString)); // Output: "p"
  document.write("<br>");
  document.writeln(firstNonRepeatedChar(testString));
 
 // write a function that takes an array of numbers as input and return the sum of the all even numbers in the array
 
 function sumEvenNumbers(numbers){
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
      sum += element;
    }
    
  }
  return sum; 

 }

 const numbers = [1,2,3,4,5,6,7,8,9,10];
 document.write("<br>"); // to print new line in HTML
 document.writeln(sumEvenNumbers(numbers));

 // write a function to remove duplicate from an array

 function removeDuplicate(arr){
return Array.from(new Set(arr));
 }

 const numbersArray = [1,2,2,5,5,7];
 document.write("<br>");
 document.writeln(removeDuplicate(numbersArray));

 // write a function to check if a given string is a polindrome

 function isPolindrome(str){
  const cleanString = str.toLowerCase().replace(/[^a-zA-z0-9]/g,'');
  document.writeln("Clean String ::::"+cleanString);
  const reversedString = cleanString.split('').reverse().join('');
  document.write("<br>");
  document.writeln("Reversed String ::::"+reversedString);
  return cleanString === reversedString;

 }

 const poliString = "A man, a plan,a canal, panama!";
 document.write("<br>");

 document.writeln(isPolindrome(poliString));
 document.write("<br>");

 const date = "2023-06-01";

// Reformat the date
const newDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");

console.log(newDate);  // Output: "06/01/2023"
document.write("<br>");

 document.writeln(newDate);

 const fruits = ['apple', 'orange', 'banana', 'apple', 'banana', 'orange', 'apple'];

 const fruitCount = fruits.reduce((accumulator, currentValue) => {
   accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
   return accumulator;
 }, {});
 
 console.log(fruitCount);
 document.write("<br>");

 document.writeln(fruitCount);
 // Output: { apple: 3, orange: 2, banana: 2 }
 

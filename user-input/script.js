// Write a program that prompts the user two times to write two numbers
//  and then alerts the user with the sum of those two numbers (the sum means adding those two numbers).

let numberOne = parseInt(prompt('Write a number: '));
let numberTwo = parseInt(prompt('Write another number: '));

let sumNumber = numberOne + numberTwo;

console.log(`The sum of two numbers you wrote number ${numberOne} and ${numberTwo} is ${sumNumber}`);
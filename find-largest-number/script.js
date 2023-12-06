// In the last session we checkout out an algorithm to swap two variables. 
// In this assignment you will be writing another algorithm to find the largest number from 3 numbers. 
// Assume that you have the variables a, b, and c which are numbers you get as input from the user. 
// Write some code to determine which of the numbers is the largest and output it in the console. 
// Try different inputs to see if the algorithm you wrote is working correctly.

let a = parseInt(prompt('Give a number: '));
let b = parseInt(prompt('Give a number: '));
let c = parseInt(prompt('Give a number: '));


if ((a > b && a > c)) {
    console.log(`Number a:${a} is the highest number`);
}
else if ((b > a && b > c)) {
    console.log(`Number b:${b} is the highest number`)
}
else if ((c > a && c > b)) {
    console.log(`Number c:${c} is the highest number`);
}
else {
    console.log('invalid input. Please type a number.');
}
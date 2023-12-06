// Create a program that detects whether a number is even (0, 2, 4, 6...)
//  or odd (1, 3, 5, 7, ...) and then output it in the console.
// The number should be taken from the user.

let giveNumber = parseInt(prompt('Type a number: '))
let even_or_odd

if (giveNumber % 2 == 0) {
  console.log('The number you have typed is Even')
} else if (giveNumber % 2 == 1) {
  console.log('The number you have typed is Odd')
} else {
  console.log('Invalid input. Please type a number')
}

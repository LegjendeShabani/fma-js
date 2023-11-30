// Write a program that prompts the user write their age and then in the console it writes:
// You are {age} years old so you were probably born in the year {yearOfBirth}.
// Think of a mathematical way to detemine the year of birth based on the age. Good luck!

let age = parseInt(prompt('Your age is: '))
let yearOfBirth = 2023 - age;
console.log(`You are ${age} years old so you were probably born in the year ${yearOfBirth}`);

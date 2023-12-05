// Create a program that gets a number from 0 to 100 from the user which represent the points the user has gotten in the test.
// From this you're going to give the user a grade from 1 to 5 depending on their points like so:
// 0-19 points is the grade 1
////20-39 points is the grade 2
//40-59 points is the grade 3
//60-79 points is the grade 4
//80-100 points is the grade 5

let getNumber = parseInt(prompt('Type a number from 0 to 100: '));

// Bonus points: Check if the user input is not a number at all
if (isNaN(getNumber)) {
    console.log('Invalid input');
}
// is a number smaller than 0, or a number bigger than 100, and simply output "There was an error in your input"
else if (getNumber < 0 || getNumber > 100) {
    console.log('There was an error in your input');
}
else if (getNumber >= 0 && getNumber <= 19) {
    console.log('Your grade is 1');
}
else if (getNumber <= 39) {
    console.log('Your grade is 2');
}
else if (getNumber <= 59) {
    console.log('Your grade is 3');
}
else if (getNumber <= 79) {
    console.log('Your grade is 4');
}
else {
    console.log('Your grade is 5');
}


// Write a program that asks the user to write the password to the website by using a prompt. 
// If the password given by the user is exactly "12341234"
//  then the user is allowed in the website so something like "Welcome" is printed on the console, otherwise nothing happens.

let myPassword = prompt('Type your password: ');

if (myPassword == '12341234') {
    console.log('Welcome to the website');
} else {
    console.log('Incorrect password');
}




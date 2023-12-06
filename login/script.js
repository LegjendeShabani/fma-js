// Create a program that gets a username and a password from the user using two prompts.
// Then, if the username is "admin" and the password is "12341234" the user is greeted,
//  otherwise they are notified they used the wrong credentials.
// Do this first by using the AND operator, and then by using a combination of the OR and NOT operators.

let username = prompt('Type username');
let password = prompt('Type password');

if (username.toLowerCase() == 'admin' && password == '12341234') {
    console.log('Welcome to the site');
} else if (username !== 'admin' || password == '12341234') {
    console.log('Your username is incorrect');
} else {
    console.log('Your password is incorrect');
}

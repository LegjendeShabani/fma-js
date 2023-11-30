// when the page is loaded the user will get a popup to write their Full Name and then another popup to write their Age.
// Then, an alert will show up that reads something like this: Your name is {user-name} and you are {user-age} years old.

let fullName = prompt('Please write your Full Name here: ');
let age = parseInt(prompt('Please write your Age: '));

console.log(`Your name is ${fullName} and you are ${age} years old`);

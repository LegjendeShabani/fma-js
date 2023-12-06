// In this assignment we wrote a program that detects if the user has written a consonant. 
// In this example you will do the same thing, but you will detect if the user has written a vowel, a consonant, a number, or another symbol.
// Depending on the user's input you will print a message to the console explaining what kind of symbol was written.

// Be sure to check for the number of characters and for uppercase letters.
//  As an extra, we can use an Event Listener which come ready with the features of the Browser, to detect when a user presses any key on the keyboard. 
// The template for this is like so: document.addEventListener('keypress', (e) =>){}


let letter = prompt('Type a letter');
let vowels = 'aeiouy';

letter = letter.toLowerCase();
if (letter.length !== 1) {
    console.log('Please type a letter');
}
else {
    if (vowels.includes(letter)) {
        console.log('it is a vowel');
    }
    else {
        console.log('it is not a vowel');
    }
}

document.addEventListener('keypress', (event) => {
    const pressedKey = event.key.toLowerCase().toString();

    if (pressedKey.length !== 1) {
        console.log('Please type a letter');
    } else {
        if (vowels.includes(pressedKey)) {
            console.log('It is a vowel');
        } else {
            console.log('It is not a vowel');
        }
    }
});
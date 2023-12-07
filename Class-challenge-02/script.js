let chooseLanguage = prompt('Choose language: ');
let userNameInput;


if (chooseLanguage === 'sq') {
    userNameInput = "Filan Fisteku";
}
else if (chooseLanguage === 'en') {
    userNameInput = 'John Doe';
}
else if (chooseLanguage === 'de') {
    userNameInput = 'Max Mustermann';
}
else {
    throw new Error('Unsupported language code!');
}

document.getElementById('username').placeholder = userNameInput;

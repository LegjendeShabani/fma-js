// Enhance the Boring Calculator example to also support the modulus operator.
//  Furthermore, use the switch() statement to check for the operator instead of a lot of else-ifs.

let a = parseFloat(prompt('Type a number: '));
let b = parseFloat(prompt('Type another number: '));
let result = prompt('What function do you want to use: ');

switch (result) {
    case 'modulo':
        console.log(a % b);
        break;
    case 'division':
        console.log(a / b);
        break;
    case 'multiplication':
        console.log(a * b);
        break;
    case 'addition':
        console.log(a + b);
        break;
    case 'subtraction':
        console.log(a - b);
        break;
    default:
        console.log('Never heard of it');
}

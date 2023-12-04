// Ask the user for the number of kilometers and then output how many miles is that.
// For example, if the user writes 3.2 you would say that is 2 miles. Remember, 1 mile is 1.6 kilometers.

const numberOfKilometers = parseFloat(prompt('Write the number of kilometers: '));
const miles = numberOfKilometers / 1.6;

console.log(`${numberOfKilometers} kilometers is equal to ${miles} miles`);

// Ask the user for the radius of a circle and then output the area of the circle. Remember, the area of the circle is PI times the radius squared - look this up online.

const radius = parseFloat(prompt('Enter the radius of the circle:'));
const area = Math.PI * Math.pow(radius, 2);
console.log(`The area of the circle with radius ${radius} is ${area} square units.`);


// This is the same as challenge 1 but you will be converting from euros to dollars.

const euros = parseFloat(prompt('Enter the amount in euros:'));
const exchangeRate = 1.09; // Current exchange rate of 1 Euro = 1.09 Dollars
const dollars = euros * exchangeRate;
console.log(`${euros} euros is equal to ${dollars} dollars.`);

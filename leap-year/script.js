// Write a program that gets the year from the user like 2001, 1984, or 1872 and then tells the user if that year is a Leap Year.
// Note that a leap year is a year in which the month of February has 29 days.
// A Leap year occurs every fourth year (so, if the year is divisible by 4 like 4, 8, 12, ...),
// but every 100 years it doesn't occur unless it's been 400 years (so, it doesn't happen on the year 500, 600, 700 but it happens on 800).

let year = parseInt(prompt('Type a year: '));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + ' is a leap year.');
} else {
    console.log(year + ' is not a leap year.');
}

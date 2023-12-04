// In this assignment you will be creating the following program.
//  When the user enters the webpage the are presented with a popup that reads "Which website do you want to visit?"
//  and the user writes a simple word like "google, facebook, youtube, johndoe, whatever"
//  and after clicking "OK" they are redirected the page "https://www.{whatever they wrote}.com".
// Don't worry if the website doesn't exist.

let enterWebsite = prompt('Which website do you want to visit?');
location.href = 'https://www.instagram.com';


window.location.href = 'https://www.' + enterWebsite + '.com';

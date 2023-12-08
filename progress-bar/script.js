let percentage = parseInt(prompt('What is the progress?'));
let color;


if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    throw new Error('Write a valid percentage');
}


// switch (true) {
//   case percentage <= 20:
//     color = 'black'
//     break
//   case percentage <= 50:
//     color = 'orange'
//     break
//   case percentage <= 80:
//     color = 'navy'
//     break
//   case percentage <= 100:
//     color = 'yellow'
//     break
//   default:
//     color = 'green'
// }

if (percentage <= 20) {
    color = 'black';
} else if (percentage <= 50) {
    color = 'orange';
}
else if (percentage <= 80) {
    color = 'red';
} else if (percentage <= 100) {
    color = 'yellow';
}
else {
    color = 'green';
}

let progressNumber = document.getElementById('progressNumber')
progressNumber.textContent = `${percentage}%`

let progressBar = document.getElementById('bar')
progressBar.style.backgroundColor = color
progressBar.style.height = `${percentage}%`
progressBar.setAttribute('title', `${percentage}%`)

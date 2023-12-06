let percentage = parseInt(prompt('What is the progress?'))

if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    throw new Error('Write a valid percentage')
}

let color

switch (true) {
    case percentage <= 20:
        color = 'black';
        break;
    case percentage <= 50:
        color = 'orange';
        break;
    case percentage <= 80:
        color = 'navy';
        break;
    case percentage <= 100:
        color = 'yellow';
        break;
    default:
        color = 'green';
}

let progressNumber = document.getElementById('progressNumber');
progressNumber.textContent = `${percentage}%`;

let progressBar = document.getElementById('bar');
progressBar.style.backgroundColor = color;
progressBar.style.height = `${percentage}%`;

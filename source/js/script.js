const userName = prompt('What is your name?', '');
const userYear = prompt('What is your year of birh?', '');
const userAge = new Date().getFullYear() - userYear;
alert(`Hello ${userName}, you're ${userAge} years old!`);
const isSquare = prompt('Would you like me to calculate square area?If YES - enter the square side size');
if (isSquare) {
    alert(`Area of square is: ${isSquare**2}`);
} else {
    alert('Then moving to next question...');
}
const isCircle = prompt('Would you like me to calculate circle area?If YES - enter the radius');
if (isCircle) {
    alert(`Area of circle is: ${3.14*isCircle**2}`);
} else {
    alert('Then moving to next question...');
}
const distance = prompt('Want me to count  way for you?If YES - enter the distance in km');
if (distance) {
    const time = prompt('Which time do you want to spend?In hours');
    alert(`You need to keep at least ${distance/time} km/h to reach place in time`);
} else {
    alert('Then moving to next question...');
}
const convert = prompt('Want me to convert USD to EUR?');
if (convert) {
    const eur = 1.03;
    alert(`You will recieve ${convert * eur} euro from this exchange`);
} else {
    alert('There\'s no more questions...');
}

const main = document.querySelector('.main');
main.classList.add('answer');
main.append(`Your name is: ${userName}, you're ${userAge} years old.You're living on our planet for ${userAge*365*24} hours!!!`);
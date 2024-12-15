// Counter Program

let count = document.getElementById('myH1');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

count.textContent = 0;


// Increase Button
increaseBtn.onclick = function (){
    count.textContent = parseInt(count.textContent) + 1;
}

// Decrease Button
decreaseBtn.onclick = function (){
    count.textContent = parseInt(count.textContent) - 1;
}

// Reset Button
resetBtn.onclick = function (){
    count.textContent = 0;
}


let randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber);

// Rolling Dice Game~
const H1Second = document.getElementById('myH1-2');
const label = document.getElementById('myLabel1');
const label2 = document.getElementById('myLabel2');
const roll = document.getElementById('roll');
const min = 1;
const max = 6;
let randomNum;
let randomNum2;

roll.onclick = function(){
    H1Second.textContent = 'Good Roll';
    randomNum = Math.floor(Math.random() * max); + min;
    randomNum2 = Math.floor(Math.random() * max); + min;
    myLabel1.textContent = randomNum;
    myLabel2.textContent = randomNum2;
}


// If Statement
let age = 13;

if( age >=18 ){
console.log('You are old enough to visit this website');
}
else{
console.log('You must be 18 to enter');
}

let time = 13;

if( time < 12){
console.log('Good Morning')
}
else{
    console.log('Good Afternoon Solider')
}

let isStudent = true;

if(isStudent){
console.log('You are a student')
}
else{
    console.log('You are NOT a student')
}

let newAge = 19;
let hasLiscense = true;

if( newAge >= 16){
console.log('You are old enough to have a liscense')

    if(hasLiscense){
        console.log('You have a liscense')
    }
    else{
        console.log('You do not have a liscense')
    }
}
else{
    console.log('You must be 16 or older to have a liscense')
}

// Last Container Javascript

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit'); 
const result = document.getElementById('resultElement');
let height;

mySubmit.onclick = function(){
// Sample height in centimeters

height = myText.value;
height = Number(height);

if (height < 150) {
    console.log("You are short.");
    result.textContent = `You are short.`;
} else if (height >= 150 && height < 180) {
    console.log("You have an average height.");
    result.textContent = `You have an average height.`;
} else {
    console.log("You are tall.");
    result.textContent = `You are tall.`;
}

}


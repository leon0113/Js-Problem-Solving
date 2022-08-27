//absolute of a number
const myNumber = -5;
const output = Math.abs(myNumber);
// console.log(output);

// ceilling a number
const number = 8.204154;
const out = Math.ceil(number);
// console.log(out);

//Flooring a number 
const num = 8.204154;
const out1 = Math.floor(num);
// console.log(out1);

// Rounding a number
const num1 = 8.204154;
const out2 = Math.round(num1);
// console.log(out2);

// Random Number
const randomNumber = Math.random() * 100;
const rounded = Math.ceil(randomNumber);
// console.log(randomNumber);
// console.log(rounded);

//Random number in For loop
for (let i = 0; i <= 30; i++) {
    const randomNumber = Math.random() * 6;
    const rounded = Math.ceil(randomNumber);
    // console.log(randomNumber);
    // console.log(rounded);
}

const result = Math.pow(5, 2);
console.log(result);

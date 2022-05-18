const numbers = [454, 64, 6, 5, 69, 254, 52];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    sum = sum + number;
}
console.log(sum);

//Using function
function arraytTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        sum = sum + number;
    }
    return sum;
}
const total = arraytTotal([4, 5, 8, 3, 6, 98, 100]);
console.log(total);
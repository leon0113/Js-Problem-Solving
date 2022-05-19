const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);

//Using function
function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'ERROR! Please input a number';
    }
    if (num < 2) {
        return 'Please enter a positive number greater than 2';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}

const output = fibonacciSeries(5);
console.log(output);
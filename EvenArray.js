function largestElement(numbers) {
    let largest = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 == 0) {
            largest.push(element);
        }
    }
    return largest;

}

const ages = [45, 2, 85, 69, 25, 50, 32, 69, 80];
const oldest = largestElement(ages);
console.log(oldest);

var first = 5;
var second = 7;
console.log(first, second);
//Swapping technique
var temp = first;
first = second;
second = temp;
console.log(first, second);

// Destructuring 
[first, second] = [second, first];
console.log(first, second);
